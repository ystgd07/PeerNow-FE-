import Radio from '../../ui/Radio';

export default function ScoreRadio({ name, setEvent }) {
  return (
    <>
      {Array.apply(null, Array(10)).map((e, idx) => (
        <Radio name={name} value={idx + 1} event={setEvent}>
          {idx + 1}점
        </Radio>
      ))}
    </>
  );
}
