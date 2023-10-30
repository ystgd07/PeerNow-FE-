import React from 'react';
import Title from '../features/newproject/Title';
import MyProjectCard from '../features/newproject/MyProjectCard';
import PjtInfo from '../features/newproject/PjtInfo';
import { useProjectModal } from '../store/store';
import Button from '../features/newproject/Button';
export default function Main() {
  const { setPjtModalFalse } = useProjectModal((state) => state);

  return (
    <div className={`relative flex flex-row justify-center`}>
      <div className={`flex flex-col`}>
        <Title />
        <div
          className="flex flex-col items-center justify-center"
          onClick={setPjtModalFalse}
        >
          <div className="flex rl">
            <div className="flex ">
              <MyProjectCard />
            </div>
            <PjtInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
