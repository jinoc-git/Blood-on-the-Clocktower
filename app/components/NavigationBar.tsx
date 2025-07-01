
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md mb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <Link
            href="/"
            className={`py-4 px-6 text-lg font-medium transition-colors ${
              pathname === '/' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            메모 시트
          </Link>
          <Link
            href="/jobs"
            className={`py-4 px-6 text-lg font-medium transition-colors ${
              pathname === '/jobs' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            직업 설명
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
