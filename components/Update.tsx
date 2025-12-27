import React from 'react';

export default function Update() {
  const updateInfo = '로마의 몰락 수정';
  const updateDate = '(2025.12.27)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
