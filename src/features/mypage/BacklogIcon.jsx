import { AllBacklogOfThisPjt } from '../../store/BackLogStore/store';

export default function BacklogIcon() {
  // backlogData
  const { backlogData } = AllBacklogOfThisPjt((state) => state);
  // 진행중인 상태의 백로그
  const filteredBacklogs = backlogData.filter((item) => item.status == 'ing');

  return (
    <>
      {filteredBacklogs.map((item, index) => (
        <p
          key={index}
          className="py-2 text-center border border-gray-300 rounded-md"
        >
          <div className="flex justify-center">
            <span className="">
              <img
                src={item.image}
                alt={`백로그_담당자_이미지_${index}`}
                className="w-6 h-6 rounded-full"
              />
            </span>
            <span className="ml-1">{item.title}</span>
          </div>
        </p>
      ))}
    </>
  );
}
