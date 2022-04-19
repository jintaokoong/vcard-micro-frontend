import {
  any,
  complement,
  compose,
  defaultTo,
  filter,
  isNil,
  join,
  or,
  pipe,
  trim,
  values,
} from 'ramda';
import { useNavigate, useParams } from 'solid-app-router';
import { IoDownload, IoPersonCircle } from 'solid-icons/io';
import { createEffect, createResource, Show } from 'solid-js';
import FieldEntry from '../components/field-entry';
import { Address } from '../interfaces/address';
import { Optional } from '../interfaces/shared/optional';
import { Vcard } from '../interfaces/vcard';
import Label from '../components/label';

const fetchCard = (id: string) =>
  fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/cards/${id}`)
    .then((res) => {
      if (res.status !== 200) throw new Error('not found :(');
      return res.json();
    })
    .then((body) => body.data);

const getFullName = (
  firstName: Optional<string>,
  lastName: Optional<string>,
) => {
  const fn = defaultTo('')(firstName);
  const ln = defaultTo('')(lastName);
  return compose(trim, join(' '))([fn, ln]);
};

const concatAddress = (address: Optional<Address>) => {
  if (isNil(address)) return '';
  const { city, label, postalCode, state, street } = address;
  const streetPostcode = compose(
    trim,
    join(' '),
    filter(complement(isNil)),
  )([street, postalCode]);
  const ordered = [label, streetPostcode, city, state];
  return pipe(
    filter<string | undefined>((s) => s !== undefined && s.length > 0),
    join(', '),
  )(ordered);
};

const defaultEmpty = defaultTo('');

export const Card = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [card] = createResource<Vcard, string>(() => params.id, fetchCard);

  createEffect(() => {
    if (card.error !== undefined) {
      navigate('/404');
    }
  });

  return (
    <>
      <div class={'px-2 pb-15'}>
        <div class={'flex flex-col items-center px-8 pt-8'}>
          <div class={'mb-2'}>
            <IoPersonCircle size={80} />
          </div>
          <div class={'text-2xl font-medium mb-0.5 capitalize text-center'}>
            {getFullName(card()?.firstName, card()?.lastName)}
          </div>
          <Show when={card()?.title}>
            <div class={'capitalize text-center'}>{card()?.title}</div>
          </Show>
          <Show when={card()?.organization}>
            <div class={'text-xl capitalize text-center'}>
              {card()?.organization}
            </div>
          </Show>
        </div>
        <hr class={'my-8'} />
        <div>
          <h4 class={'mb-2 font-medium'}>Work Info</h4>
          <FieldEntry label={'email'} value={card()?.workEmail} />
          <FieldEntry label={'contact'} value={card()?.workContact} />
          <Label>Address</Label>
          <textarea
            rows={3}
            readOnly
            value={defaultEmpty(concatAddress(card()?.workAddress))}
            class={
              'p-2 w-full text-md bg-gray-500 rounded-md resize-none focus:outline-transparent'
            }
          />
          <hr class={'my-8'} />
        </div>
        <Show
          when={or(
            any((field) => Boolean(field))([card()?.email, card()?.contact]),
            any((field) => Boolean(field))(values(card()?.address)),
          )}
        >
          <div>
            <h4 class={'mb-2 font-medium'}>Personal Info</h4>
            <FieldEntry label={'email'} value={card()?.email} />
            <FieldEntry label={'contact'} value={card()?.contact} />
            <Label>Address</Label>
            <textarea
              rows={3}
              readOnly
              value={defaultEmpty(concatAddress(card()?.address))}
              class={
                'p-2 w-full text-md bg-gray-500 rounded-md resize-none focus:outline-transparent'
              }
            />
          </div>
          <hr class={'my-8'} />
        </Show>
        <Show when={card()?.notes}>
          <div class={'mb-4'}>
            <div class={'mb-1.5 text-sm capitalize'}>Notes</div>
            <textarea
              rows={3}
              readOnly
              value={defaultEmpty(card()?.notes)}
              class={
                'p-2 w-full text-md bg-gray-500 rounded-md resize-none focus:outline-transparent'
              }
            />
          </div>
        </Show>
      </div>
      <div
        class={'w-inherit w-max-inherit fixed bottom-3 active:bottom-2.5 px-2'}
      >
        <button
          onClick={() =>
            window.open(
              `${import.meta.env.VITE_APP_API_BASE_URL}/cards/export/${
                params.id
              }`,
            )
          }
          class={
            'text-lg h-11 w-full rounded-lg bg-gray-800 hover:bg-gray-700 active:bg-gray-900 shadow-lg'
          }
        >
          <IoDownload class={'mr-1'} /> Download
        </button>
      </div>
    </>
  );
};
