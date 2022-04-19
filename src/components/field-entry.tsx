import { defaultTo } from 'ramda';
import Label from './label';

interface Prop {
  label?: string;
  value?: string | number;
}

const defaultEmpty = defaultTo('');

const FieldEntry = (props: Prop) => {
  return (
    <div class={'mb-4'}>
      <Label>{props.label}</Label>
      <input
        class={
          'p-2 w-full text-md bg-gray-500 rounded-md focus:outline-transparent'
        }
        readOnly
        value={defaultEmpty(props.value)}
      />
    </div>
  );
};

export default FieldEntry;
