'use client';

import React, { useState, useEffect } from 'react';
import MemoSheet from '../components/MemoSheet';
import JobModal from '../components/JobModal';
import JobSelectorModal from '../components/JobSelectorModal';
import NavigationBar from '../components/NavigationBar';
import { Job, MemoData } from '../types';
import Update from '../components/Update';
import HostMemoSheet from '../components/HostMemoSheet';

export default function Home() {
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);
  const [memoData, setMemoData] = useState<MemoData>({});
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isJobSelectorOpen, setIsJobSelectorOpen] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem('blood-on-the-clocktower-host-mode');
    if (item) {
      try {
        const parsedItem = JSON.parse(item) as MemoData;

        // 로컬스토리지 청소 (key가 옛날 버전일 때)
        const isLastData = Object.values(parsedItem).some(({ memos }) =>
          Object.keys(memos).some((v) => /[가-힣]/.test(v) || '0 Day' === v)
        );
        if (isLastData) {
          setMemoData({});
          setSelectedJobs([]);
          localStorage.setItem(
            'blood-on-the-clocktower-host-mode',
            JSON.stringify({})
          );
        } else {
          setMemoData(parsedItem);
          const jobInfos = Object.values(parsedItem).map((j) => j.info);
          setSelectedJobs(jobInfos);
        }
      } catch (error) {
        localStorage.setItem(
          'blood-on-the-clocktower-host-mode',
          JSON.stringify({})
        );
      }
    }
  }, []);

  // Update local storage whenever memoData changes
  useEffect(() => {
    if (Object.keys(memoData).length !== 0) {
      localStorage.setItem(
        'blood-on-the-clocktower-host-mode',
        JSON.stringify(memoData)
      );
    }
  }, [memoData]);

  const handleJobSelect = (job: Job) => {
    if (!selectedJobs.find((j) => j.id === job.id)) {
      setSelectedJobs([...selectedJobs, job]);
      setMemoData((prev) => {
        if (Object.keys(prev).length === 0) {
          return {
            [job.id]: {
              info: job,
              memos: {},
              tokens: [],
            },
          };
        } else {
          return {
            ...prev,
            [job.id]: {
              info: job,
              memos: { ...prev[job.id]?.memos },
              tokens: prev[job.id]?.tokens,
            },
          };
        }
      });
    }

    setIsJobSelectorOpen(false);
  };

  const resetSheet = () => {
    setSelectedJobs([]);
    setMemoData({});
    localStorage.setItem(
      'blood-on-the-clocktower-host-mode',
      JSON.stringify({})
    );
  };

  const handleJobRemove = (jobId: string) => {
    setSelectedJobs(selectedJobs.filter((job) => job.id !== jobId));
    const newMemoData = { ...memoData };
    delete newMemoData[jobId];
    localStorage.setItem(
      'blood-on-the-clocktower-host-mode',
      JSON.stringify(newMemoData)
    );
    setMemoData(newMemoData);
  };

  const handleMemoUpdate = (jobId: string, period: string, value: string) => {
    setMemoData((prev) => {
      if (Object.keys(prev).length === 0) {
        if (value.trim() === '') {
          return {
            [jobId]: {
              info: selectedJobs.find((j) => j.id === jobId),
              memos: {},
              tokens: [],
            },
          };
        }

        return {
          [jobId]: {
            info: selectedJobs.find((j) => j.id === jobId),
            memos: { [period]: value },
            tokens: [],
          },
        };
      } else {
        if (value.trim() === '') {
          const memos = { ...prev[jobId]?.memos, [period]: value };
          delete memos[period];

          return {
            ...prev,
            [jobId]: {
              info: prev[jobId].info,
              memos,
              tokens: prev[jobId].tokens,
            },
          };
        }

        return {
          ...prev,
          [jobId]: {
            info: prev[jobId].info,
            memos: { ...prev[jobId]?.memos, [period]: value },
            tokens: prev[jobId].tokens,
          },
        };
      }
    });
  };

  const handleRemoveOnlyMemo = () => {
    setMemoData((prev) => {
      const newMemodata = {};

      Object.keys(prev).forEach((jobId) => {
        newMemodata[jobId] = {
          info: prev[jobId].info,
          memos: {},
          tokens: [],
        };
      });
      return newMemodata;
    });
  };

  // const handleTokenUpdate = (jobId: string, tokens: Token[]) => {
  //   console.log(jobId, tokens);
  //   setMemoData((prev) => {
  //     if (prev) {
  //       return {
  //         ...prev,
  //         [jobId]: {
  //           info: prev[jobId].info,
  //           memos: { ...prev[jobId].memos },
  //           tokens,
  //         },
  //       };
  //     } else {
  //       return {
  //         [jobId]: {
  //           info: prev[jobId].info,
  //           memos: { ...prev[jobId].memos },
  //           tokens,
  //         },
  //       };
  //     }
  //   });
  // };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  const handleJobCellClick = (jobId: string | null = null) => {
    setIsJobSelectorOpen(true);
  };

  try {
    return (
      <>
        <NavigationBar />

        <div className="max-w-full mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            시계탑에 흐른 피 - 메모 시트
            <br />
            <Update />
          </h1>

          <HostMemoSheet
            selectedJobs={selectedJobs}
            memoData={memoData}
            onMemoUpdate={handleMemoUpdate}
            // onTokenUpdate={handleTokenUpdate}
            onJobRemove={handleJobRemove}
            onJobClick={handleJobClick}
            onJobCellClick={handleJobCellClick}
            onReset={resetSheet}
            handleRemoveOnlyMemo={handleRemoveOnlyMemo}
          />
        </div>

        <JobModal
          job={selectedJob}
          isOpen={isJobModalOpen}
          onClose={() => setIsJobModalOpen(false)}
        />

        <JobSelectorModal
          isOpen={isJobSelectorOpen}
          onJobSelect={handleJobSelect}
          onClose={() => {
            setIsJobSelectorOpen(false);
          }}
        />
      </>
    );
  } catch (error) {
    localStorage.setItem('blood-on-the-clocktower', JSON.stringify({}));
    window.location.reload();
  }
}
