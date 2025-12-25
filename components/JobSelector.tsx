import React from 'react';
import { Job } from '../app/types';
import { JOBS_SPARTA } from '../data/삐약이의저주';

interface JobSelectorProps {
  onJobSelect: (job: Job) => void;
  selectedJobs: Job[];
  onJobClick: (job: Job) => void;
}

const JobSelector: React.FC<JobSelectorProps> = ({
  onJobSelect,
  selectedJobs,
  onJobClick,
}) => {
  const getJobColor = (category: string) => {
    switch (category) {
      case 'townsfolk':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'outsider':
        return 'bg-sky-400 hover:bg-sky-500';
      case 'minion':
        return 'bg-red-500 hover:bg-red-600';
      case 'demon':
        return 'bg-red-700 hover:bg-red-800';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

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
        return '';
    }
  };

  const categories = ['villager', 'outsider', 'minion', 'demon'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">직업 선택</h2>

      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            {getCategoryTitle(category)}
          </h3>

          <div className="grid grid-cols-1 gap-2">
            {JOBS_SPARTA.filter((job) => job.team === category).map((job) => {
              const isSelected = selectedJobs.some((j) => j.id === job.id);

              return (
                <div
                  key={job.id}
                  className={`
                    ${getJobColor(job.team)} 
                    text-white p-3 rounded cursor-pointer transition-colors
                    ${isSelected ? 'opacity-50' : ''}
                  `}
                  onClick={() => {
                    if (!isSelected) {
                      onJobSelect(job);
                    }
                    onJobClick(job);
                  }}>
                  <div className="text-sm font-medium">{job.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSelector;
