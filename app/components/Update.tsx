import React from 'react';

export default function Update() {
  const updateInfo = '팡키 수정';
  const updateDate = '(2025.11.07)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
