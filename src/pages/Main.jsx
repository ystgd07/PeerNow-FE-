import React from 'react';
import Title from '../features/newproject/Title';
import MyProjectCard from '../features/newproject/MyProjectCard';
import PjtInfo from '../features/newproject/PjtInfo';

export default function Main() {
  return (
    <div className="flex flex-col justify-center h-SectionH w-SectionW bg-section">
      <div className="w-3/4 m-auto">
        <Title />
        <div className="flex">
          <MyProjectCard />
          <PjtInfo />
        </div>
      </div>
    </div>
  );
}
