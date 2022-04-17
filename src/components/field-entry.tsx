interface Prop {
  label?: string;
  value?: string | number;
}

const FieldEntry = (props: Prop) => {
  return (
    <div class={'mb-4'}>
      <div class={'mb-1.5 text-sm capitalize'}>{props.label}</div>
      <input
        class={
          'p-2 w-full text-md bg-gray-500 rounded-md focus:outline-transparent'
        }
        readOnly
        value={props.value}
      />
    </div>
  );
};

export default FieldEntry;
