import React from 'react';

export default function Update() {
  const updateInfo = '추적자, 명사수 추가 및 팡키 능력 변경';
  const updateDate = '(2025.12.21)';
  return (
    <>
      <span className=" text-sm font-normal">
        업데이트: {updateInfo} {updateDate}
      </span>
    </>
  );
}
