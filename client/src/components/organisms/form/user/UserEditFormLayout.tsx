import React from 'react';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import FormTitle from '../../../atoms/form/FormTitle';
import UserInputItem from './UserInputItem';
import UserSelectItem from './UserSelectItem';

type Category = typeof category;
interface Props {
  formik: any;
}

const editTitles = ['基本情報', 'ゴルフ', 'SNS', 'その他'];
const category = { base: 'base', golf: 'golf', sns: 'sns', other: 'other' } as const;
const UserEditFormLayout: React.FC<Props> = ({ formik }) => {
  const editElements = [
    <>
      <UserInputItem category={category['base' as keyof Category]} formik={formik} />
      <UserSelectItem category={category['base' as keyof Category]} formik={formik} />
    </>,
    <>
      <UserInputItem category={category['golf' as keyof Category]} formik={formik} />
      <UserSelectItem category={category['golf' as keyof Category]} formik={formik} />
    </>,
    <UserInputItem category={category['sns' as keyof Category]} formik={formik} />,
    <>
      <UserSelectItem category={category['other' as keyof Category]} formik={formik} />
      <UserInputItem category={category['other' as keyof Category]} formik={formik} />
    </>,
  ];

  return (
    <>
      {editElements.map((element, i) => {
        return i === 0 ? (
          <Padding key={i} top={CLEAR.XSMALL} bottom={CLEAR.SMALL}>
            <FormTitle>{editTitles[i]}</FormTitle>
            {element}
          </Padding>
        ) : (
          <Padding key={i} bottom={CLEAR.SMALL}>
            <FormTitle>{editTitles[i]}</FormTitle>
            {element}
          </Padding>
        );
      })}
    </>
  );
};

export default UserEditFormLayout;
