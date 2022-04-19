import { Optional } from '../interfaces/shared/optional';
import { Address } from '../interfaces/address';
import { complement, compose, filter, isNil, join, pipe, trim } from 'ramda';

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

const addressUtils = {
  concatAddress,
};

export default addressUtils;
