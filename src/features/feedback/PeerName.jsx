import { useTogetherPeerEv } from '../../store/PeerStore/store';

export default function PeerName() {
  const { selectedName, selectedImg } = useTogetherPeerEv((state) => state);
  return (
    <>
      <div className="">
        <span className="flex justify-center">
          <img
            // src="https://source.unsplash.com/random/?"
            src={`data:image/*;base64,${selectedImg}`}
            // src={selectedImg}
            alt="평가할_동료_이미지"
            className="w-11 h-11 rounded-full mr-1"
          />
          <span className="ml-1 text-2xl mt-1.5">{selectedName}</span>
        </span>
      </div>
    </>
  );
}
