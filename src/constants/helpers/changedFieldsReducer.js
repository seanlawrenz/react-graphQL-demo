export const changedFieldsReducer = changedFields => {
  const c = changedFields || {};
  const keys = Object.keys(c);
  const keysInChangedField = keys.length > 0 ? c[keys[0]] : { field: null, value: null };
  return {
    [keysInChangedField.field]: keysInChangedField.value,
  };
};

export const changedFieldsValidating = changedFields => {
  const c = changedFields || {};
  const keys = Object.keys(c);
  const field = keys.length > 0 ? c[keys[0]] : {};
  if (field.validating === undefined) {
    field.validating = true;
  }
  return field.validating === true;
};
