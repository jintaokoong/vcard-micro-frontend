import { PropsWithChildren } from 'solid-js';

const Label = (props: PropsWithChildren) => {
  return <div class={'mb-1.5 text-sm capitalize'}>{props.children}</div>;
};

export default Label;
