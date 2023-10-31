import React from 'react';
import { useCreatePjtOne } from '../../store/store';

export default function SideModalSearchResult() {
  const { peerName, setPeerName } = useCreatePjtOne((state) => state);
  console.log('peerName', peerName);

  return (
    <div
      className={`absolute z-50 ${
        !peerName ? 'hidden' : ''
      } h-full py-3 mt-8 overflow-y-scroll text-sm bg-white rounded-md w-full shadow-md top-11 right-0`}
    >
      <div className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100">
        <span className="w-2 h-2 m-2 bg-gray-400 rounded-full"></span>
        <div className="flex-grow px-2 font-medium">Tighten Co.</div>
        <div className="text-sm font-normal tracking-wide text-gray-500">
          Team
        </div>
      </div>
      <div className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100">
        <span className="w-2 h-2 m-2 bg-green-400 rounded-full"></span>
        <div className="flex-grow px-2 font-medium">Taylor Otwell</div>
        <div className="text-sm font-normal tracking-wide text-gray-500">
          Member
        </div>
      </div>
      <div className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100">
        <span className="w-2 h-2 m-2 bg-gray-400 rounded-full"></span>
        <div className="flex-grow px-2 font-medium">Adam Wathan</div>
        <div className="text-sm font-normal tracking-wide text-gray-500">
          Member
        </div>
      </div>
      <div className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100">
        <span className="w-2 h-2 m-2 bg-gray-400 rounded-full"></span>
        <div className="flex-grow px-2 font-medium">
          Duke Street Studio Inc.
        </div>
        <div className="text-sm font-normal tracking-wide text-gray-500">
          Team
        </div>
      </div>
      <div className="flex justify-start px-2 py-2 my-2 text-gray-700 rounded-md cursor-pointer hover:text-blue-400 hover:bg-blue-100">
        <span className="w-2 h-2 m-2 bg-green-400 rounded-full"></span>
        <div className="flex-grow px-2 font-medium">Jeffrey Wey</div>
        <div className="text-sm font-normal tracking-wide text-gray-500">
          Member
        </div>
      </div>
    </div>
  );
}
