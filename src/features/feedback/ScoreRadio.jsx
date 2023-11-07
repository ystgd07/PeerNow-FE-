import Radio from '../../ui/Radio';

export default function ScoreRadio({ name }) {
  return (
    <>
      <Radio name={name} value="1">
        &nbsp;1점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="2">
        &nbsp;2점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="3">
        &nbsp;3점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="4">
        &nbsp;4점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="5">
        &nbsp;5점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="6">
        &nbsp;6점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="7">
        &nbsp;7점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="8">
        &nbsp;8점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="9">
        &nbsp;9점
      </Radio>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio name={name} value="10">
        &nbsp;10점
      </Radio>
    </>
  );
}
