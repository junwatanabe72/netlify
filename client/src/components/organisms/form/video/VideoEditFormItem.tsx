import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormikContext, ErrorMessage } from 'formik';
import Iframe from '../../../atoms/Iframe';
import Button from '../../../atoms/Button';
import FlexLayout from '../../../atoms/FlexLayout';
import Logo from '../../../atoms/Logo';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { CLEAR, FONTSIZE, SIZE } from '../../../../utils/constant/number';
import { Padding, ALIGNITEMS, JUSTIFYCONTENT } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';

interface Props {
  formikKey: string;
  remove: <T>(index: number) => T | undefined;
  currentVideos: ArrayVideoType;
  onChange: () => void;
}

const ExtendPadding = styled(Padding)`
  border-bottom: 1px solid #ccc;
`;
const StyledField = styled.input`
  width: ${SIZE.XSMALL}vw;
  font-size: ${FONTSIZE.BASE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  ${media.tablet`
      width: ${SIZE.MEDIUMLARGE}vw;
      `}
`;
const StyledLabel = styled.label`
  font-size: ${FONTSIZE.BASE}px;
  color: ${BASICCOLORS.BASICDARK};
`;

const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${media.tablet`
      justify-content: center;
      `}
`;

const Center = styled.div`
  ${media.tablet`
      text-align: center;
      `}
`;
const Width = styled.div`
  width: 50vw;
`;
const StyledDiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;
const item = {
  name: '動画タイトル',
  url: '動画URL',
};
const buttonValue = '動画を削除する';

const VideoEditFormItem: React.FC<Props> = ({ remove, currentVideos, formikKey, onChange }) => {
  const [stateVideos, setVideo] = useState<VideoType[]>(currentVideos);
  const moveVideo = (num: number) => {
    const newVideos = stateVideos.filter((_, index: number) => {
      return index !== num;
    });
    setVideo(newVideos);
  };
  const { values, handleChange } = useFormikContext<FormikValueType<typeof currentVideos>>();

  return (
    <Width>
      {Object.values(values.formikValues).map((video: VideoType, index: number) => {
        const checksubItem = () => {
          onChange();
          moveVideo(index);
          remove(index);
        };
        return (
          <ExtendPadding top={CLEAR.XSMALL} key={index}>
            <div>{`動画${index + 1}`}</div>
            <FlexLayout
              width={SIZE.XXXSMALL}
              alignItems={ALIGNITEMS.CENTER}
              justifyContent={JUSTIFYCONTENT.BETWEEN}
              left={
                <>
                  {Object.entries(item).map(([key, value]: string[], num: number) => {
                    const name = `${formikKey}.${index}.${key}`;

                    return (
                      <Center key={num}>
                        <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
                          <StyledLabel htmlFor={name}>{value}</StyledLabel>
                          <StyledField
                            type={'text'}
                            placeholder={'入力してください。'}
                            name={name}
                            onChange={handleChange}
                            value={video[key]}
                          />
                          <StyledDiv>
                            <ErrorMessage name={name} />
                          </StyledDiv>
                        </Padding>
                      </Center>
                    );
                  })}
                </>
              }
              right={
                stateVideos[index] ? (
                  <Center>
                    <Logo>{stateVideos[index].name}</Logo>
                    <Padding all={CLEAR.TINY} />
                    <Iframe
                      source={stateVideos[index].url}
                      width={SIZE.XSMALL}
                      height={SIZE.XXSMALL}
                    />
                  </Center>
                ) : (
                  <></>
                )
              }
            />
            <ButtonPosition>
              <Padding top={CLEAR.TINY} bottom={CLEAR.XSMALL}>
                <Button
                  pWidth={CLEAR.TINY}
                  pHeight={CLEAR.TINY}
                  color={BASICCOLORS.SECONDARY}
                  fontSize={FONTSIZE.BASE}
                  onClick={checksubItem}
                >
                  {buttonValue}
                </Button>
              </Padding>
            </ButtonPosition>
          </ExtendPadding>
        );
      })}
    </Width>
  );
};

export default VideoEditFormItem;
