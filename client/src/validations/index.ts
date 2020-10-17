import * as yup from 'yup';

export const emailValidation = (message = 'メールアドレスの形式で入力してください') =>
  yup.string().email(message).required('必須項目です');

export const nameValidation = (message = '必須項目です') =>
  yup.string().required(message).max(15, '15字以下にしてください。');

export const urlValidation = (message = '必須項目です') => yup.string();

export const passwordValidation = (message = '必須項目です', minCount = 8, maxCount = 30) =>
  yup
    .string()
    .required(message)
    .min(minCount, `${minCount}字以上にしてください。`)
    .max(maxCount, `${maxCount}以下にしてください。`);

export const confirmedPasswordValidation = (message = '入力したパスワードではありません。') =>
  yup.string().oneOf([yup.ref('password'), undefined], message);
