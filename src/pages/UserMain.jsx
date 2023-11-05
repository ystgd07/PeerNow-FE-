import React from 'react';
import User from '../features/userUpdate/User';
import Title from '../features/newproject/Title';
import MyProjectCard from '../features/newproject/MyProjectCard';
import PjtInfo from '../features/newproject/PjtInfo';

export default function UserMain() {
  return (
    <div className="flex justify-center w-4/5 mx-auto my-7 h-4/5">
      <User />
    </div>
  );
}
