import React from 'react';
import Title from '../features/newproject/Title';
import MyProjectCard from '../features/newproject/MyProjectCard';
import PjtInfo from '../features/newproject/PjtInfo';
import Button from '../features/newproject/Button';
import SideModal from '../features/newproject/SideModal';
import { useProjectModal } from '../store/store';

export default function Main() {
  const { setPjtModalFalse } = useProjectModal((state) => state);

  return (
    <div className={`relative flex flex-row justify-center`}>
      <div className={`flex flex-col`}>
        <div
          className="flex flex-col items-center justify-center"
          onClick={setPjtModalFalse}
        >
          <Title />
          <div className="flex rl">
            <div className="flex ">
              <MyProjectCard />
            </div>
            <PjtInfo />
          </div>
        </div>
      </div>

      <div className="sticky top-0 right-0 z-50 w-full h-full">
        <SideModal />
      </div>
    </div>
  );
}
