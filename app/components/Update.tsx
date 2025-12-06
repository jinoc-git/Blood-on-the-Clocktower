import React from 'react';

export default function Update() {
  const updateInfo = '수학자, 땜장이 추가';
  const updateDate = '(2025.12.06)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
