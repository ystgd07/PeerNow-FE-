export default function CreateButton({ value, option }) {
  return (
    <div className="flex">
      <button className="text-lg">
        <span
          className={`bg-gray-300 p-1 px-4 rounded-md hover:bg-gray-400 ${option}`}
        >
          {value}
        </span>
      </button>
    </div>
  );
}