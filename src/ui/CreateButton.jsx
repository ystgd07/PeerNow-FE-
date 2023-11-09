export default function CreateButton({
  value,
  option,
  event,
  backlogdto,
  backFileDto,
}) {
  console.log('createButton : ', backFileDto);
  console.log('createButton BackLogDto : ', backlogdto);
  return (
    <>
      <button
        className="text-right mr-1 -mb-6"
        onClick={() => {
          event(backlogdto, backFileDto);
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
