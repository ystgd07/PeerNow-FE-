import { useQuery } from 'react-query';

export default function BacklogIcon() {
  const items = [
    {
      text: '화면 설계서 만들기',
      imageSrc: 'https://source.unsplash.com/random/?woman',
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <p
          key={index}
          className="py-2 text-center border border-gray-300 rounded-md"
        >
          <div className="flex justify-center">
            <span className="">
              <img
                src={item.imageSrc}
                alt={`백로그_담당자_이미지_${index}`}
                className="w-6 h-6 rounded-full"
              />
            </span>
            <span className="ml-1">{item.text}</span>
          </div>
        </p>
      ))}
    </>
  );
}
