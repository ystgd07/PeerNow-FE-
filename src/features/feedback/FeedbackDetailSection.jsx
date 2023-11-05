import CreateButton from '../../ui/CreateButton';
import FeedbackQuestion from './FeedbackQuestion';

export default function FeedbackDetailSection() {
  return (
    <>
      <form>
        <div className="p-2">
          <FeedbackQuestion />
        </div>
        <div className="float-right my-5">
          <CreateButton value={'제출'} option={'px-10'} />
        </div>
      </form>
    </>
  );
}
