import { Optional } from '../../interfaces/shared/optional';
import { IoPersonCircle } from 'solid-icons/io';
import { Show } from 'solid-js';
import { compose, defaultTo, join, trim } from 'ramda';

interface Props {
  firstName: Optional<string>;
  lastName: Optional<string>;
  title: Optional<string>;
  organization: Optional<string>;
}

const getFullName = (
  firstName: Optional<string>,
  lastName: Optional<string>,
) => {
  const fn = defaultTo('')(firstName);
  const ln = defaultTo('')(lastName);
  return compose(trim, join(' '))([fn, ln]);
};

const ProfileSummary = (p: Props) => {
  return (
    <div class={'flex flex-col items-center px-8 pt-8'}>
      <div class={'mb-2'}>
        <IoPersonCircle size={80} />
      </div>
      <div class={'text-2xl font-medium mb-0.5 capitalize text-center'}>
        {getFullName(p.firstName, p.lastName)}
      </div>
      <Show when={p.title}>
        <div class={'capitalize text-center'}>{p.title}</div>
      </Show>
      <Show when={p.organization}>
        <div class={'text-xl text-center'}>{p.organization}</div>
      </Show>
    </div>
  );
};

export default ProfileSummary;
