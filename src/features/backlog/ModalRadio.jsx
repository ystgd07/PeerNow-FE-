// import { RadioGroup } from '@headlessui/react';
import Radio from '../../ui/Radio';
import RadioGroup from '../../ui/RadioGroup';

export default function ModalRadio() {
  return (
    <div className="text-center mb-4">
      <RadioGroup>
        <span className="mr-6">
          <Radio name="contact" value="진행 예정" defaultChecked>
            &nbsp;진행 예정
          </Radio>
        </span>
        <span className="mr-6">
          <Radio name="contact" value="진행 중">
            &nbsp;진행 중
          </Radio>
        </span>
        <span className="mr-6">
          <Radio name="contact" value="완료">
            &nbsp;완료
          </Radio>
        </span>
      </RadioGroup>
    </div>
  );
}
