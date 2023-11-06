export default function MainPeerBlock() {
  const items = [
    {
      name: '최현희',
      imageSrc: 'https://source.unsplash.com/random/?woman',
    },
    {
      name: '양성수',
      imageSrc: 'https://source.unsplash.com/random/?dog',
    },
    {
      name: '정현욱',
      imageSrc: 'https://source.unsplash.com/random/?man',
    },
    {
      name: '김란희',
      imageSrc: 'https://source.unsplash.com/random/?egg',
    },
    {
      name: '이은지',
      imageSrc: 'https://source.unsplash.com/random/?love',
    },
    {
      name: '이유빈',
      imageSrc: 'https://source.unsplash.com/random/?kid',
    },
    {
      name: '조하민',
      imageSrc: 'https://source.unsplash.com/random/?rabbit',
    },
    {
      name: '이시영',
      imageSrc: 'https://source.unsplash.com/random/?quokka',
    },
  ];

  return (
    <>
      <p className="m-2 ml-3 mb-5">함께한 동료에 대해 평가해주세요</p>
      <div className="grid grid-cols-5 gap-4 text-center text-base">
        {items.map((item, index) => (
          <a key={index} href="#">
            <div className="flex justify-center">
              <img
                src={item.imageSrc}
                alt={`최고의동료_이미지${index}`}
                className="text-sm mr-2 w-7 h-7 rounded-full"
              />
              <span className="font-semibold">{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
