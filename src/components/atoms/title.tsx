import { PropsWithChildren } from 'solid-js';

const Title = (p: PropsWithChildren) => (
  <h4 class={'mb-2 font-medium'}>{p.children}</h4>
);

export default Title;
