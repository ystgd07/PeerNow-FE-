import { useState } from 'react';
import CreateButton from '../../ui/CreateButton';
import TestModal from './TestModal';

export default function BacklogHeader() {
  function clickBtn() {
    console.log('[BacklogHeader] clickBtn!');
  }

  return (
    <div className="flex justify-between items-center mx-1">
      <div className="text-3xl text-slate-700 mx-3">백로그</div>
      <span onClick={clickBtn()}>
        <CreateButton value={'이슈 만들기'} onClick={clickBtn} />
      </span>
    </div>
  );
}
