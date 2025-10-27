'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    localStorage.setItem('blood-on-the-clocktower', JSON.stringify({}));
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            앗, 문제가 발생했습니다.
          </h1>
          <p className="text-gray-700 mb-6">
            데이터를 초기화하고 다시 시도해 주세요. 저장된 데이터가 사라집니다.
          </p>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            데이터 초기화 및 새로고침
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
