import palette from '@assets/colors/index';
import styled from 'styled-components';

const [FLOATING_CALL, FLOATING_KAKAO, FLOATING_UPPER] = [
  require('@assets/images/common/floating_call.png'),
  require('@assets/images/common/floating_kakao.png'),
  require('@assets/images/common/floating_upper.png'),
];

const FloatingBlock = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  z-index: 101;
  gap: 20px;
`;

const ActionButton = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0px 4px 10px 0px #00000040;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  transition: 0.2s ease box-shadow, 0.2s ease transform;
  &:hover {
    box-shadow: 0px 4px 10px 0px #00000080;
    transform: scale(1.05);
  }
`;

const Floating = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCall = () => {
    const callAnchor = document.createElement('a');
    callAnchor.setAttribute('href', 'tel:0507-1402-3531');
    callAnchor.click();
  };

  return (
    <FloatingBlock>
      <ActionButton
        style={{ backgroundColor: palette.system.green }}
        onClick={handleCall}
      >
        <img src={FLOATING_CALL} alt="phoneCall" />
      </ActionButton>
      <ActionButton
        style={{ backgroundColor: '#FAE300' }}
        onClick={() => {
          window.open('https://pf.kakao.com/_BqZCn', '_blank');
        }}
      >
        <img src={FLOATING_KAKAO} alt="kakaoTalk" />
      </ActionButton>
      <ActionButton
        style={{ backgroundColor: palette.black.white }}
        onClick={handleScrollToTop}
      >
        <img src={FLOATING_UPPER} alt="upperButton" />
      </ActionButton>
    </FloatingBlock>
  );
};

export default Floating;
