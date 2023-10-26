import React from 'react';
import Gnb from '../ui/Gnb';
import Snb from '../ui/Snb';
import { Outlet } from 'react-router-dom';
import Button from '../features/newproject/Button';

export default function Home() {
  return (
    <>
      <Gnb />
      <div className="flex flex-row h-screen">
        <Snb />
        <div className="flex flex-row w-3/4 ml-10">
          <Outlet />
        </div>
      </div>
      <Button />
    </>
  );
}
