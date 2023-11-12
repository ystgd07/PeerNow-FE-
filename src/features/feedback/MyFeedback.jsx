import React from 'react';
import MyFeedbackDetail1 from './MyFeedbackDetail1';
import MyFeedbackDetail2 from './MyFeedbackDetail2';

export default function MyFeedback() {
  return (
    <>
      <div className="p-2 flex flex-row items-center">
        <div className="mr-10  w-1/2">
          <MyFeedbackDetail1 />
        </div>
        <div className="w-1/2">
          <MyFeedbackDetail2 />
        </div>
      </div>
    </>
  );
}
