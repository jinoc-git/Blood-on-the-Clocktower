import React from 'react';

export default function Update() {
  const updateDate = '(2025.07.11)';
  const updatedNote = ` 고스트 직업 설명 변경 ${updateDate}`;
  return (
    <>
      <span className=" text-sm font-normal">업데이트:{updatedNote}</span>
    </>
  );
}
