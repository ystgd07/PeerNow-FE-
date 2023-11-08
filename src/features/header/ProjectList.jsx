export default function ProjectList({ pjt, onSelect }) {
  return (
    <>
      <p
        href="#"
        className="block px-4 py-2 mb-1 hover:bg-gray-100 cursor-pointer"
        onSelect={onSelect}
      >
        {/* 제목 */}
        {pjt.title}
      </p>
    </>
  );
}
