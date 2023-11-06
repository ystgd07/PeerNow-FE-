import FeedbackDetailSection from './FeedbackDetailSection';
import FeedbackDetailTitle from './FeedbackDetailTitle';
import PeerName from './PeerName';

export default function FeedbackDetail() {
  return (
    <>
      <div className="m-2">
        <FeedbackDetailTitle />
        <div className="m-10 float-left">
          <PeerName />
        </div>
        <div className="bg-white rounded-md m-1 mt-3">
          <FeedbackDetailSection />
        </div>
      </div>
    </>
  );
}