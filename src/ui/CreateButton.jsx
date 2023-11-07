export default function CreateButton({ value, option, event, dto }) {
  return (
    <>
      <button
        className="text-right mr-1 -mb-6"
        onClick={() => {
          event(dto);
        }}
      >
        <span
          className={`text-lg bg-gray-300 p-1 px-4 rounded-md hover:bg-gray-400 ${option}`}
        >
          {value}
        </span>
      </button>
    </>
  );
}
