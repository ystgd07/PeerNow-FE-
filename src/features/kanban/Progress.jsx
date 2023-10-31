export default function Progress({ value, color }) {
  return (
    <>
      <div className="mb-3">
        <span
          className={`${color} text-lg font-semibold rounded-md p-1 px-2 text-white`}
        >
          {value}
        </span>
      </div>
    </>
  );
}
