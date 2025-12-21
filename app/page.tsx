'use client';

import React from 'react';
import MemoSheet from '../components/MemoSheet';
import JobModal from '../components/JobModal';
import JobSelectorModal from '../components/JobSelectorModal';
import NavigationBar from '../components/NavigationBar';
import Update from '../components/Update';
import ErrorBoundary from '../components/ErrorBoundary';

export default function Home() {
  return (
    <ErrorBoundary>
      <>
        <NavigationBar />
        <div className="max-w-full mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            시계탑에 흐른 피 - 메모 시트
            <br />
            <Update />
          </h1>
          <MemoSheet />
        </div>

        <JobModal />
        <JobSelectorModal />
      </>
    </ErrorBoundary>
  );
}
