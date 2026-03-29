import React from 'react';

export default function Update() {
  const updateInfo = '오라클 직업 설명 수정';
  const updateDate = '(2026.0.3.29)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
