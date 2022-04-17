interface Prop {
  label?: string;
  value?: string | number;
}

const FieldEntry = ({ label, value }: Prop) => {
  return (
    <div class={'mb-4'}>
      <div class={'mb-1.5 text-sm capitalize'}>{label}</div>
      <div class={'p-2 text-md bg-gray-500 rounded-md'}>{value}</div>
    </div>
  );
};

export default FieldEntry;
