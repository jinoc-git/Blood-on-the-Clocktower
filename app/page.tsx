
"use client";
import React, { useState } from 'react';
import MemoSheet from './components/MemoSheet';
import JobModal from './components/JobModal';
import JobSelectorModal from './components/JobSelectorModal';
import NavigationBar from './components/NavigationBar';
import { Job, MemoData, Token } from './types';

export default function Home() {
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);
  const [memoData, setMemoData] = useState<MemoData>({});
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isJobSelectorOpen, setIsJobSelectorOpen] = useState(false);
  const [selectingForJobId, setSelectingForJobId] = useState<string | null>(null);

  const handleJobSelect = (job: Job) => {
    if (selectingForJobId) {
      // Replace existing job
      setSelectedJobs(prev => prev.map(j => j.id === selectingForJobId ? job : j));
      // Update memo data key
      const newMemoData = { ...memoData };
      if (newMemoData[selectingForJobId]) {
        newMemoData[job.id] = newMemoData[selectingForJobId];
        delete newMemoData[selectingForJobId];
      }
      setMemoData(newMemoData);
    } else {
      // Add new job
      if (!selectedJobs.find(j => j.id === job.id)) {
        setSelectedJobs([...selectedJobs, job]);
      }
    }
    setIsJobSelectorOpen(false);
    setSelectingForJobId(null);
  };

  const handleJobRemove = (jobId: string) => {
    setSelectedJobs(selectedJobs.filter(job => job.id !== jobId));
    const newMemoData = { ...memoData };
    delete newMemoData[jobId];
    setMemoData(newMemoData);
  };

  const handleMemoUpdate = (jobId: string, period: string, value: string) => {
    setMemoData(prev => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        [period]: value
      }
    }));
  };

  const handleTokenUpdate = (jobId: string, tokens: Token[]) => {
    setMemoData(prev => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        tokens: tokens
      }
    }));
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  const handleJobCellClick = (jobId: string | null = null) => {
    setSelectingForJobId(jobId);
    setIsJobSelectorOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="max-w-full mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          시계탑에 흐른 피 - 메모 시트
        </h1>

        <MemoSheet
          selectedJobs={selectedJobs}
          memoData={memoData}
          onMemoUpdate={handleMemoUpdate}
          onTokenUpdate={handleTokenUpdate}
          onJobRemove={handleJobRemove}
          onJobClick={handleJobClick}
          onJobCellClick={handleJobCellClick}
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
          setSelectingForJobId(null);
        }}
      />
    </main>
  );
}
