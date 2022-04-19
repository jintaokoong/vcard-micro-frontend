import { Optional } from '../../interfaces/shared/optional';
import { Address } from '../../interfaces/address';
import Title from '../atoms/title';
import FieldEntry from '../molecules/field-entry';
import Label from '../atoms/label';
import TextArea from '../atoms/text-area';
import addressUtils from '../../utils/address-utils';

interface Props {
  email: Optional<string>;
  contact: Optional<string>;
  address: Optional<Address>;
}

const WorkInfo = (p: Props) => {
  return (
    <>
      <Title>Work Info</Title>
      <FieldEntry label={'email'} value={p.email} />
      <FieldEntry label={'contact'} value={p.contact} />
      <Label>Address</Label>
      <TextArea value={addressUtils.concatAddress(p.address)} />
    </>
  );
};

export default WorkInfo;
