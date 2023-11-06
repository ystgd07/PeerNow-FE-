import FeedbackMain from '../features/feedback/FeedbackMain';
import Header from '../ui/Header';

export default function Feedback() {
  return (
    <>
      {/* 화면 틀 */}
      <div className="w-full h-auto">
        <Header />
        <FeedbackMain />
      </div>
    </>
  );
}
