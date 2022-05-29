import { any, defaultTo, or, values } from 'ramda';
import { useNavigate, useParams } from 'solid-app-router';
import { createEffect, createResource, Show } from 'solid-js';
import { Vcard } from '../interfaces/vcard';
import Divider from '../components/atoms/divider';
import ProfileSummary from '../components/organisms/profile-summary';
import WorkInfo from '../components/organisms/work-info';
import PersonalInfo from '../components/organisms/personal-info';
import { truthy } from '../utils/fp-utils';
import Title from '../components/atoms/title';
import TextArea from '../components/atoms/text-area';
import DownloadButton from '../components/molecules/download-button';

const fetchCard = (id: string) =>
  fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/cards/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error('not found');
      return res.json();
    })
    .then((body) => body.data);

const defaultEmpty = defaultTo('');

export const Card = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [card] = createResource<Vcard, string>(() => params.id, fetchCard);

  createEffect(() => {
    if (card.error) {
      navigate('/404');
    }
  });

  return (
    <Show when={!card.error}>
      <div class={'px-2 pb-15'}>
        <ProfileSummary
          firstName={card()?.firstName}
          lastName={card()?.lastName}
          title={card()?.title}
          organization={card()?.organization}
        />
        <Divider />
        <WorkInfo
          email={card()?.workEmail}
          contact={card()?.workContact}
          address={card()?.workAddress}
        />
        <Divider />
        <Show
          when={or(
            any(truthy)([card()?.email, card()?.contact]),
            any(truthy)(values(card()?.address)),
          )}
        >
          <PersonalInfo
            email={card()?.email}
            contact={card()?.contact}
            address={card()?.address}
          />
          <Divider />
        </Show>
        <Show when={card()?.notes}>
          <Title>Notes</Title>
          <TextArea value={defaultEmpty(card()?.notes)} />
          <Divider />
        </Show>
      </div>
      <DownloadButton id={params.id} />
    </Show>
  );
};
