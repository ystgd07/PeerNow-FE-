import FeedbackDetail from '../features/feedback/FeedbackDetail';
import Header from '../ui/Header';

export default function PeerFeedback() {
  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        <FeedbackDetail />
      </div>
    </>
  );
}
