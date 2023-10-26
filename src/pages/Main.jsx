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
    <div className={`relative flex flex-row justify-center h-full`}>
      <div className={`flex flex-col `}>
        <div className="flex flex-col w-3/4 ml-64 " onClick={setPjtModalFalse}>
          <Title />
          <div className="flex rl">
            <div className="h-PjtInfo ">
              <MyProjectCard />
            </div>
            <PjtInfo />
          </div>
        </div>
        <Button />
      </div>

      <div className="sticky top-0 right-0 z-50 w-full h-full">
        <SideModal />
      </div>
    </div>
  );

}
