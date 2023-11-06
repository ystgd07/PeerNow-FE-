import MainBPBlock from './MainBPBlock';
import MainMyFBBlock from './MainMyFBBlock';
import MainMyScoreBlock from './MainMyScoreBlock';
import MainPeerBlock from './MainPeerBlock';

export default function FeedbackMain() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 m-1 mt-2 gap-2 text-lg">
        <div className="bg-white rounded-md row-span-3 p-3 grid grid-rows-3">
          <MainMyScoreBlock />
        </div>
        <div className="bg-white rounded-md row-span-2 p-3">
          <MainBPBlock />
        </div>
        <div className="bg-white rounded-md text-center p-3">
          <MainMyFBBlock />
        </div>
        <div className="bg-white rounded-md col-span-full p-3">
          <MainPeerBlock />
        </div>
      </div>
    </>
  );
}
