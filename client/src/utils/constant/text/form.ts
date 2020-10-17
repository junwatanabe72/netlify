export const FORMTYPES = {
  SIGNLOGIN: 'SIGNLOGIN',
  USERPROFILE: 'USERPROFILE',
} as const;

export function deleteValues(
  current: { [key: string]: string | number }[],
  submit: { [key: string]: string | number }[]
) {
  const submitValuesIds = Object.values(submit).map((value) => {
    return value.id;
  });
  const values = Object.values(current)
    .filter((value) => {
      const data = submitValuesIds.includes(value.id);
      return !data;
    })
    .map((value) => {
      return { ...value, name: undefined };
    });
  return values;
}

export function arrayToString(result: any) {
  const returnValues = result.map((value: any) => {
    if (Array.isArray(value['tie'])) {
      value['tie'] = value['tie'].join();
      return value;
    }
    return value;
  });

  return returnValues;
}
