interface Props {
  value: string | undefined;
}

const TextArea = (p: Props) => (
  <textarea
    rows={3}
    readOnly
    value={p.value}
    class={
      'p-2 w-full text-md bg-gray-500 rounded-md resize-none focus:outline-transparent'
    }
  />
);

export default TextArea;
