
import React from 'react';
import { Job } from '../types';

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  if (!isOpen || !job) return null;

  const getJobColor = (category: string) => {
    switch (category) {
      case 'villager': return 'bg-blue-500';
      case 'outsider': return 'bg-sky-400';
      case 'minion': return 'bg-red-500';
      case 'demon': return 'bg-red-700';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'villager': return '마을 주민';
      case 'outsider': return '이방인';
      case 'minion': return '하수인';
      case 'demon': return '악마';
      default: return '';
    }
  };

  const getTimingDescription = (timing: string) => {
    switch (timing) {
      case 'night0': return '0번째 밤';
      case 'night': return '매일 밤';
      case 'day': return '낮';
      case 'once_night': return '게임 중 한번 (밤)';
      case 'once_day': return '게임 중 한번 (낮)';
      case 'death': return '죽었을 때';
      case 'passive': return '패시브';
      default: return timing;
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`${getJobColor(job.category)} text-white p-4 rounded-t-lg`}>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{job.name}</h2>
              <p className="text-lg opacity-90">{getCategoryTitle(job.category)}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">능력 정보</h3>
            <div className="bg-gray-100 p-3 rounded">
              <p><strong>사용 시기:</strong> {getTimingDescription(job.abilities.timing)}</p>
              <p><strong>사용 빈도:</strong> {job.abilities.frequency === 'once' ? '한번' : 
                job.abilities.frequency === 'nightly' ? '매일 밤' : 
                job.abilities.frequency === 'daily' ? '매일' : '특수'}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">능력 설명</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
