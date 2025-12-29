import React from 'react';

export default function Update() {
  const updateInfo = '순교자 직업 수정';
  const updateDate = '(2025.12.29)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
