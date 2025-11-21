import React from 'react';

export default function Update() {
  const updateInfo = '소녀 추가, 각종 직업 수정';
  const updateDate = '(2025.11.21)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
