import { Optional } from './shared/optional';

export interface Address {
  label: Optional<string>;
  street: Optional<string>;
  city: Optional<string>;
  postalCode: Optional<string>;
  state: Optional<string>;
}
