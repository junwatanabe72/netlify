import React from 'react';
import styled from 'styled-components';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import FlexLayout from '../../../atoms/FlexLayout';

type Notes = typeof notes['sns'];
interface Props {
  category: 'base' | 'golf' | 'sns' | 'other';
  formik: any;
}

const StyledField = styled.input`
  width: ${SIZE.SMALL}vw;
  font-size: ${FONTSIZE.LARGE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  ${media.tablet`
      width: ${SIZE.MEDIUMLARGE}vw;
      `}
`;

const Styleddiv = styled.div`
  margin: 0 auto;
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const Inline = styled.div`
  font-size: ${FONTSIZE.SMALL}px;
`;
const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const items = {
  base: {
    name: '名前',
    email: 'メールアドレス',
  },
  sns: {
    twitter: 'twitterアカウント',
    instagram: 'instagramアカウント',
    youtube: 'youtubeアカウント',
    facebook: 'facebookアカウント',
  },
  golf: {
    homeCourse: 'ホームコース',
    favourite: '好きなゴルファー',
  },
  other: {
    job: '職業',
    school: '出身校',
    hobby: '趣味',
  },
};
const notes = {
  sns: {
    twitter: 'twitter.com/後のアカウント名。',
    instagram: 'www.instagram.com/後のアカウント名。',
    youtube: 'www.youtube.com/channel/後のアカウント名。',
    facebook: 'www.facebook.com/後のアカウント名。',
  },
};

const UserInputItem: React.FC<Props> = ({ category, formik }) => {
  const notesItem = category === 'sns' ? notes[category] : undefined;

  return (
    <>
      {Object.entries(items[category]).map(([key, value]: string[], num: number) => {
        const inputValue = formik.values[key] ? formik.values[key] : '';
        return (
          <React.Fragment key={num}>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <FlexLayout
                justifyContent={JUSTIFYCONTENT.START}
                width={SIZE.XXXSMALL}
                alignItems={ALIGNITEMS.START}
                left={
                  <Padding left={CLEAR.TINY}>
                    <StyledLabel htmlFor={key}>{value}</StyledLabel>
                  </Padding>
                }
                right={
                  <Padding left={CLEAR.MEDIUM}>
                    <StyledField
                      type={key}
                      name={key}
                      placeholder={value}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={inputValue}
                    />
                    {notesItem && <Inline>{notesItem[key as keyof Notes]}</Inline>}
                  </Padding>
                }
              />
            </Padding>
            {formik.touched[key as keyof UserType] && formik.errors[key as keyof UserType] ? (
              <Styleddiv>{formik.errors[key as keyof UserType]}</Styleddiv>
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default UserInputItem;
