import palette from '@assets/colors';
import SubmitButton from '@components/common/SubmitButton';
import translateFontSize from '@utils/translateFontSize';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ICON_CHECK_CIRCLE = require('@assets/images/common/icon_check_circle.png');

const FullScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.black.white};
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  padding-top: 104px;
  display: flex;
  justify-content: center;
`;

const CSInquirementSuccessBlock = styled.div`
  max-width: 500px;
  width: 100%;
  min-width: 320px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & > img {
    width: 72px;
    aspect-ratio: 1/1;
  }
`;

const Notice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${palette.black.black};
    text-align: center;
    ${css(translateFontSize('B_38'))};
  }
  p {
    text-align: center;
    ${css(translateFontSize('R_22'))};
  }
`;

const Navigations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

interface ICSInquirementSuccess {
  setIsDone: () => void;
}

const CSInquirementSuccess: React.FC<ICSInquirementSuccess> = ({
  setIsDone,
}) => {
  const navigate = useNavigate();
  return (
    <FullScreen>
      <CSInquirementSuccessBlock>
        <Contents>
          <img src={ICON_CHECK_CIRCLE} alt="check_circle" />
          <Notice>
            <h2>접수가 완료되었습니다.</h2>
            <p>영업일 기준 3일 이내 처리됩니다.</p>
          </Notice>
        </Contents>
        <Navigations>
          <SubmitButton inverse={true} onClick={setIsDone}>
            신규 문의 접수
          </SubmitButton>
          <SubmitButton
            onClick={() => {
              navigate('/');
            }}
          >
            메인 페이지
          </SubmitButton>
        </Navigations>
      </CSInquirementSuccessBlock>
    </FullScreen>
  );
};

export default CSInquirementSuccess;
