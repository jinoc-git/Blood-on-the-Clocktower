import React from 'react';
import { JOBS } from '../data/jobs';
import { Job } from '../types';
import Image from 'next/image';

interface JobSelectorModalProps {
  isOpen: boolean;
  onJobSelect: (job: Job) => void;
  onClose: () => void;
}

export default function JobSelectorModal({ isOpen, onJobSelect, onClose }: JobSelectorModalProps) {
  if (!isOpen) return null;

  const getJobColor = (category: string) => {
    switch (category) {
      case 'villager': return 'bg-blue-500 hover:bg-blue-600';
      case 'outsider': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'minion': return 'bg-red-500 hover:bg-red-600';
      case 'demon': return 'bg-black hover:bg-gray-800';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6 text-center">직업 선택</h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {JOBS.map(job => (
            <div
              key={job.id}
              onClick={() => onJobSelect(job)}
              className={`
                ${getJobColor(job.category)}
                text-white cursor-pointer transition-colors rounded-lg p-3 flex flex-col items-center
              `}
            >
              <div className="w-16 h-16 rounded-full bg-white p-2 mb-2 relative overflow-hidden">
                <Image
                  src={job.image || '/placeholder-job.png'}
                  alt={job.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-job.png';
                  }}
                />
              </div>
              <span className="text-sm font-medium text-center">{job.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}