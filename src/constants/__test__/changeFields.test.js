import { changedFieldsValidating, changedFieldsReducer } from '../helpers/changedFieldsReducer';

let testAnswer;
let expectedAnswer;

const nameChangedField = {
  name: {
    dirty: false,
    errors: undefined,
    field: 'name',
    name: 'name',
    touched: true,
    validating: true,
    value: 'n',
  },
};

const sslChangedField = {
  name: {
    dirty: false,
    field: 'sslVerificationEnabled',
    name: 'sslVerificationEnabled',
    touched: true,
    value: true,
  },
};

describe('changedFieldKeys', () => {
  it('should return if it is validating', () => {
    testAnswer = changedFieldsValidating(nameChangedField);
    expect(testAnswer).toEqual(true);

    const notValidating = Object.assign({}, nameChangedField);
    notValidating.name.validating = false;
    testAnswer = changedFieldsValidating(notValidating);
    expect(testAnswer).toEqual(false);
  });

  it('should handle a field that is not required to be valid', () => {
    testAnswer = changedFieldsValidating(sslChangedField);
    expect(testAnswer).toEqual(true);
  });

  it('should handle an empty object', () => {
    testAnswer = changedFieldsValidating({});
    expect(testAnswer).toEqual(true);
  });
});

describe('changedFieldReducer', () => {
  it('should return the field and the value', () => {
    testAnswer = changedFieldsReducer(nameChangedField);
    expectedAnswer = { name: 'n' };
    expect(testAnswer).toEqual(expectedAnswer);

    testAnswer = changedFieldsReducer(sslChangedField);
    expectedAnswer = { sslVerificationEnabled: true };
    expect(testAnswer).toEqual(expectedAnswer);
  });

  it('should handle an object with no field or value', () => {
    testAnswer = changedFieldsReducer({});
    expectedAnswer = { null: null };
    expect(testAnswer).toEqual(expectedAnswer);
  });
});
