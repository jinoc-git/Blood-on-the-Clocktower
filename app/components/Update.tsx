import React from 'react';

export default function Update() {
  const updateInfo = '직업 다수 추가 및 변경';
  const updateDate = '(2025.12.06)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
