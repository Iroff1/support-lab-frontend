import { useEffect } from 'react';
import styled from 'styled-components';
import MessageBox from '../common/MessageBox';
import palette from '@assets/colors/index';
import useSlideShow from '@hooks/useSlideShow';

const ICON_ARROW = [
  require('@assets/images/common/icon_arrow_left.svg'),
  require('@assets/images/common/icon_arrow_right.svg'),
];
const ICON_TO_DOWN = require('@assets/images/main/icon_to_down.png');
const IMAGE_DOC_BEFORE = require('@assets/images/main/image_doc_before.png');
const IMAGE_DOC_AFTER = [
  require('@assets/images/main/image_doc_after_1.png'),
  require('@assets/images/main/image_doc_after_2.png'),
  require('@assets/images/main/image_doc_after_3.png'),
];

const MainBoxForExampleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const BoxHeader = styled(MessageBox)`
  margin-bottom: 46px;
`;

const BoxContents = styled.div`
  width: 100%;
  max-width: 1176px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  & > div:nth-child(1) {
    width: 100%;
    max-width: 952px;
    aspect-ratio: 965/669;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 106.5px;
    margin: 0 auto;
    background: url(${ICON_TO_DOWN}) center/contain no-repeat;
  }
`;

const SlideBox = styled.div<{ index: number }>`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > .slideWrapper {
    width: 100%;
    position: relative;

    // 슬라이드 출력 블럭
    & > .slideView {
      width: 100%;
      max-width: 952px;
      aspect-ratio: 952/337;
      overflow: hidden;
      position: relative;
      margin: 0 auto;

      & > ul {
        width: ${IMAGE_DOC_AFTER.length + '00%'};
        display: flex;

        position: absolute;
        left: ${(props) => props.index * -100}%;
        transition: 0.4s ease left;

        & > li {
          flex: 1;
          & > img {
            width: 100%;
            heigth: 100%;
          }
        }
      }
    }
    // 슬라이드 버튼 블럭
    & > .btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 56px;
      height: 56px;
      cursor: pointer;

      &.left {
        left: 0;
        background: url(${ICON_ARROW[0]}) center/cover no-repeat;
      }
      &.right {
        right: 0;
        background: url(${ICON_ARROW[1]}) center/cover no-repeat;
      }
    }
  }

  // 슬라이드 순서 블럭
  & > .slideDot {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 24px;

    & > div {
      width: 8px;
      heigth: 8px;
      aspect-ratio: 1/1;
      border-radius: 50%;

      background-color: ${palette.black.B80};
      transition: 0.4s ease background-color;

      &.on {
        background-color: ${palette.black.white};
      }
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 952px;
    height: 1px;
    background-color: ${palette.black.B200};
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;

const MainBoxForExample = () => {
  const slideShow = useSlideShow(IMAGE_DOC_AFTER.length);

  useEffect(() => {
    slideShow.start();
    return () => {
      slideShow.stop();
    };
  }, []);

  return (
    <MainBoxForExampleBlock>
      <BoxHeader>
        <h1>그래서 만들었습니다.</h1>
        <p>
          여러분의 아이템에 대한 생각을 말만 해주면
          <br />
          수십 개의 서류 통과된 사업계획서를 학습한 생성형 AI를 통해서
          <br />
          10분 이내로 사업계획서 초안을 작성해드립니다.
        </p>
      </BoxHeader>

      <BoxContents>
        {/* 문서 작성 전 이미지 */}
        <div>
          <img src={IMAGE_DOC_BEFORE} alt="문서 작성 예시" />
        </div>

        {/* 화살표 */}
        <div />

        {/* 문서 작성 후 이미지 슬라이드 */}
        <SlideBox index={slideShow.index}>
          <div
            className="slideWrapper"
            onMouseOver={slideShow.stop}
            onMouseOut={slideShow.start}
          >
            <div className="slideView">
              <ul>
                {IMAGE_DOC_AFTER.map((item, index) => (
                  <li key={index}>
                    <img src={item} alt="문서 작성 결과 예시" />
                  </li>
                ))}
              </ul>
            </div>
            <div onClick={slideShow.goLeft} className="left btn" />
            <div onClick={slideShow.goRight} className="right btn" />
          </div>

          <div className="slideDot">
            {IMAGE_DOC_AFTER.map((_, index) => (
              <div className={slideShow.index === index ? 'on' : ''} />
            ))}
          </div>
        </SlideBox>
      </BoxContents>
    </MainBoxForExampleBlock>
  );
};
export default MainBoxForExample;
