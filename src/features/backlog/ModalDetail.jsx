import CreateButton from '../../ui/CreateButton';

export default function ModalDetail() {
  return (
    <>
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        <input
          className="border-2 w-full  border-gray-300 p-2 mb-2 rounded-md"
          placeholder=" *무엇을 해야합니까"
        />
        <input
          className="border-2 w-full  border-gray-300 p-2 mb-2 rounded-md"
          placeholder=" *담당자를 선택해주세요"
        />
        <input
          className="border-2 w-full  border-gray-300 p-2 mb-2 rounded-md"
          placeholder="설명을 입력할 수 있습니다"
        />
        <input
          className="border-2 w-full  border-gray-300 p-2 mb-2 rounded-md"
          placeholder="파일 업로드 칸"
        />
        <div className="float-right my-2">
          <CreateButton value={'완료'} />
        </div>
      </div>
    </>
  );
}
