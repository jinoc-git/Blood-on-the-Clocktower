import React from 'react';
import Image from 'next/image';
import { useNoteState } from '../providers/NoteProvider';
import { useNoteActions } from '../hooks/useNoteActions';

export default function JobModal() {
  const { selectedJobForModal: job, isJobModalOpen: isOpen } = useNoteState();
  const { closeJobModal: onClose } = useNoteActions();

  if (!isOpen || !job) return null;

  const getJobColor = (category: string) => {
    switch (category) {
      case 'townsfolk':
        return 'bg-blue-500';
      case 'outsider':
        return 'bg-sky-400';
      case 'minion':
        return 'bg-red-500';
      case 'demon':
        return 'bg-red-700';
      default:
        return 'bg-gray-500';
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`${getJobColor(job.team)} text-white p-4 rounded-t-lg`}>
          <div className="flex flex-col justify-center items-center relative">
            <h2 className="text-2xl font-bold">{job.name}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold absolute top-0 right-0">
              ×
            </button>
            <div className="text-center space-y-2">
              <div className="bg-white rounded-full">
                <Image
                  src={typeof job.image === 'string' ? job.image : job.image[0]}
                  alt={job.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/jobs/placeholder-job.png';
                  }}
                />
              </div>
              <p className="text-lg opacity-90">{getCategoryTitle(job.team)}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">능력 설명</h3>
            <p className="text-gray-700 leading-relaxed">{job.ability}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
