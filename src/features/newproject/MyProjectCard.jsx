import React from 'react';
import MyProjectCardTitle from './MyProjectCardTitle';
import MyProjectCardFooter from './MyProjectCardFooter';
import Title from './Title';

export default function MyProjectCard() {
  return (
    <div class="mt-4 first:w-PjtCard h-PjtCard  max-w-md p-4 bg-white  border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-500 dark:border-gray-500">
      <MyProjectCardTitle />
      <MyProjectCardFooter />
    </div>
  );
}
