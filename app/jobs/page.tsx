'use client';
import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import JobModal from '../components/JobModal';
import { Job } from '../types';
import Image from 'next/image';
import { JOBS } from '../data/삐약이의저주';
import Update from '../components/Update';

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['townsfolk', 'outsider', 'minion', 'demon'] as const;

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'townsfolk':
        return '마을 주민';
      case 'outsider':
        return '이방인';
      case 'minion':
        return '하수인';
      case 'demon':
        return '악마';
      default:
        return category;
    }
  };

  const getJobColor = (category: string) => {
    switch (category) {
      case 'townsfolk':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'outsider':
        return 'bg-sky-400 hover:bg-sky-500';
      case 'minion':
        return 'bg-red-500 hover:bg-red-600';
      case 'demon':
        return 'bg-black hover:bg-gray-800';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div>
      <NavigationBar />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          시계탑에 흐른 피 - 직업 설명
          <br />
          <Update />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-transparent rounded-lg shadow-md p-6">
              <h2
                className={`text-xl font-bold mb-4 text-center rounded text-white ${getJobColor(
                  category
                )}`}>
                {getCategoryTitle(category)}
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {JOBS.filter((job) => job.team === category).map((job) => (
                  <div
                    key={job.id}
                    className={`
                      ${getJobColor(job.team)} 
                      text-white p-4 rounded cursor-pointer transition-colors flex items-center
                    `}
                    onClick={() => handleJobClick(job)}>
                    <div className="w-12 h-12 mr-3 relative flex-shrink-0 bg-white rounded-full">
                      <Image
                        src={
                          typeof job.image === 'string'
                            ? job.image
                            : job.image[0]
                        }
                        alt={job.name}
                        fill
                        className="object-cover rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/assets/jobs/placeholder-job.png';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-medium">{job.name}</div>
                      <div className="text-sm opacity-80 mt-1">
                        클릭하여 상세보기
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <JobModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
