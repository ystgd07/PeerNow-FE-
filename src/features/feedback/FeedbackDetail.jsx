import { useTogetherPeerEv } from '../../store/PeerStore/store';
import FeedbackDetailSection from './FeedbackDetailSection';
import FeedbackDetailTitle from './FeedbackDetailTitle';
import PeerName from './PeerName';

export default function FeedbackDetail() {
  const { selectPeerId, selectedName } = useTogetherPeerEv((state) => state);
  console.log('selectPeerId', selectPeerId);

  return (
    <>
      <div className="h-[40rem] scroll overflow-y-scroll scrollBar">
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
