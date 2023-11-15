import { useBackNumStore } from '../store/BackLogStore/store';
import { useTogetherPeerEv } from '../store/PeerStore/store';
import { useCreatePjtOne } from '../store/store';

export default function Radio({
  children,
  value,
  name,
  defaultChecked,
  disabled,
  id,
}) {
  const { setSelectedStatus } = useBackNumStore();
  const { setSelectUserRole } = useCreatePjtOne((state) => state);

  return (
    <label className="mr-3">
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="text-[#f7cc10] border-[#f7cc10] border-2 hover:cursor-pointer focus:ring-1 focus:ring-[#f7cc10]"
        onChange={(e) => {
          setSelectedStatus(e.target.value);
          setSelectUserRole(id, value);
        }}
      />
      {children}
    </label>
  );
}
