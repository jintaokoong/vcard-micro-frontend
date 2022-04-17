type Optional<T> = T | undefined;

export interface Address {
  label: Optional<string>;
  street: Optional<string>;
  city: Optional<string>;
  postalCode: Optional<string>;
  state: Optional<string>;
}
