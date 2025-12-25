import React from 'react';

export default function Update() {
  const updateInfo = '스파르타 시트 추가';
  const updateDate = '(2025.12.25)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
