import Radio from '../../ui/Radio';
import RadioGroup from '../../ui/RadioGroup';

export default function ModalRadio({ onChange }) {
  return (
    <div className="text-center mb-4">
      <RadioGroup>
        <span className="mr-6">
          <Radio name="status" value="todo" onChange={onChange} defaultChecked>
            &nbsp;진행 예정
          </Radio>
        </span>
        <span className="mr-6">
          <Radio name="status" value="ing">
            &nbsp;진행 중
          </Radio>
        </span>
        <span className="mr-6">
          <Radio name="status" value="done">
            &nbsp;완료
          </Radio>
        </span>
      </RadioGroup>
    </div>
  );
}
