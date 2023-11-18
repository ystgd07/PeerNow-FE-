import FeedbackDetailTitle from './FeedbackDetailTitle';
import FeedbackQuestion from './FeedbackQuestion';

export default function FeedbackDetail() {
  return (
    <>
      <div className="h-[40rem] scroll overflow-y-scroll scrollBar flex justify-center">
        <div className="w-[66rem]">
          <FeedbackDetailTitle />
          <div className="bg-white rounded-md m-5 mt-3">
            <FeedbackQuestion />
          </div>
          <div className="p-3"></div>
        </div>
      </div>
    </>
  );
}
