import React, { useState } from 'react';
import { useCreatePjtOne } from '../../store/store';

export default function SideModalList() {
  const { peerName, setPeerName, userList, selectedUser, setSelectUser } =
    useCreatePjtOne((state) => state);
  // console.log('selectedUser', selectedUser);
  return (
    <>
      <li className="py-3 list-none sm:py-4">
        {Object.keys(selectedUser)?.length > 0 && (
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="/img/je.jfif"
                alt="Neil"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500 truncate dark:text-white">
                {selectedUser.team ? selectedUser.team : '무소속'}
              </p>
              <div className="flex items-center ">
                <p className="mr-2 text-sm font-bold text-black truncate dark:text-gray-400">
                  {selectedUser.name}
                </p>
              </div>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
