import { Address } from '../../interfaces/address';
import FieldEntry from '../molecules/field-entry';
import Label from '../atoms/label';
import Title from '../atoms/title';
import addressUtils from '../../utils/address-utils';
import TextArea from '../atoms/text-area';

interface Props {
  email: string | undefined;
  contact: string | undefined;
  address: Address | undefined;
}

const PersonalInfo = (p: Props) => {
  return (
    <>
      <Title>Personal Info</Title>
      <FieldEntry label={'email'} value={p.email} />
      <FieldEntry label={'contact'} value={p.contact} />
      <Label>Address</Label>
      <TextArea value={addressUtils.concatAddress(p.address)} />
    </>
  );
};

export default PersonalInfo;
