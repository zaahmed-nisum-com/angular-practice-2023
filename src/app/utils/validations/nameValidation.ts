import { FULL_NAME_REGEX } from '../../constants';

export const isValidName = (name: string) => {
  console.log(name);
  if (name == '') {
    return [false, 'Please enter name'];
  } else {
    if (!FULL_NAME_REGEX.test(name)) {
      return [false, 'Invalid name'];
    }
  }
  return [true, ''];
};
