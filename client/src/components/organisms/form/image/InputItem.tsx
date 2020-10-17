import React, { useState } from 'react';
import styled from 'styled-components';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import FlexLayout from '../../../atoms/FlexLayout';

type BaseItems = typeof baseItems;
type NoteItems = typeof noteItems;
interface Props {
  formik: any;
  valueKey: string;
  currentUser: UserType;
}

const StyledField = styled.input`
  font-size: ${FONTSIZE.BASE}px;
  ${media.tablet`
      width: ${SIZE.MEDIUMLARGE}vw;
      `}
`;

const Styleddiv = styled.div`
  margin: 0 auto;
  color: ${BASICCOLORS.SECONDARYDARK};
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Inline = styled.div`
  font-size: ${FONTSIZE.SMALL}px;
`;
const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;
const StyledImage = styled.img`
  width: ${SIZE.XXSMALL}vw;
  ${media.tablet`
        width: ${SIZE.SMALL}vw
      `}
`;

const baseItems = {
  profileImage: 'プロフィールイメージ',
  clubImage: 'クラブセッティングイメージ',
};

const noteItems = {
  profileImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
  clubImage: '画像をアップロードする（縦横200px×200px以上推奨、5MB未満）',
};
const InputItem: React.FC<Props> = ({ formik, valueKey, currentUser }) => {
  const [targetImage, setImage] = useState<any>(currentUser[valueKey as keyof UserType]);
  const editImage = (value: string | ArrayBuffer | null) => {
    setImage(value);
  };
  return (
    <>
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        <FlexLayout
          justifyContent={JUSTIFYCONTENT.START}
          width={SIZE.XXXSMALL}
          alignItems={ALIGNITEMS.START}
          left={
            <Padding left={CLEAR.TINY}>
              <StyledLabel htmlFor={valueKey}>{baseItems[valueKey as keyof BaseItems]}</StyledLabel>
            </Padding>
          }
          right={
            <Padding left={CLEAR.MEDIUM}>
              <Center>
                <StyledField
                  type={'file'}
                  accept={'image/*'}
                  name={valueKey}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file =
                      event.currentTarget.files !== null ? event.currentTarget.files[0] : null;
                    if (file === null) {
                      return;
                    }
                    formik.setFieldValue(valueKey, file);
                    const reader = new FileReader();
                    reader.onload = () => {
                      editImage(reader.result);
                    };
                    if (file) {
                      reader.readAsDataURL(file);
                    }
                  }}
                  onBlur={formik.handleBlur}
                />
                <StyledImage src={targetImage} />
                {noteItems ? <></> : <Inline>{noteItems[valueKey as keyof NoteItems]}</Inline>}
                {formik.touched[valueKey as keyof ImageUserType] &&
                formik.errors[valueKey as keyof ImageUserType] ? (
                  <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                    <Styleddiv>{formik.errors[valueKey as keyof ImageUserType]}</Styleddiv>
                  </Padding>
                ) : null}
              </Center>
            </Padding>
          }
        />
      </Padding>
    </>
  );
};

export default InputItem;
