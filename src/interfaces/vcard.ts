import { Address } from './address';
import { Optional } from './shared/optional';

export interface Vcard {
  label: string;
  _id: string;
  firstName: Optional<string>;
  lastName: Optional<string>;
  contact: Optional<string>;
  email: Optional<string>;
  address: Optional<Address>;
  title: Optional<string>;
  organization: Optional<string>;
  workContact: Optional<string>;
  workEmail: Optional<string>;
  workAddress: Optional<Address>;
  notes: Optional<string>;
  createdBy: Optional<string>;
  createdAt: number;
  updatedAt: number;
}
