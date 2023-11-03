export default function Radio({
  children,
  value,
  name,
  defaultChecked,
  disabled,
}) {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="text-[#f7cc10] border-[#f7cc10] border-2 hover:cursor-pointer focus:ring-1 focus:ring-[#f7cc10]"
      />
      {children}
    </label>
  );
}
