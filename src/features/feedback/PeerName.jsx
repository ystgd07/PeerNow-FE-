import { usePeerList } from '../../store/PeerStore/store';

export default function PeerName() {
  const { peerDatalistDto } = usePeerList((state) => state);

  return (
    <>
      <div className="">
        <span className="flex justify-center">
          <img
            // src={`data:image/*;base64,${peer_image}`}
            src={peerDatalistDto.peer_image}
            alt="평가할_동료_이미지"
            className="w-11 h-11 rounded-full mr-1"
          />
          <span className="ml-1 text-2xl mt-1.5">
            {peerDatalistDto.peer_name}
          </span>
        </span>
      </div>
    </>
  );
}
// const { peerDatalistDto } = usePeerList((state) => state);
