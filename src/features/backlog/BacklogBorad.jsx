import BacklogThead from './BacklogThead';
import BacklogTbody from './BacklogTbody';
import './scrollbar.css';

export default function BacklogBoard() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2 overflow-y-auto scrollBar h-96">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <BacklogThead />
        </thead>
        <tbody>
          <BacklogTbody />
        </tbody>
      </table>
    </div>
  );
}
