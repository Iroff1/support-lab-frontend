import palette from '@assets/colors';
import Blank from '@components/common/Blank';
import translateFontSize from '@utils/translateFontSize';
import { css, styled } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductListBlock = styled.div`
  width: 100%;
  max-width: 928px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h2 {
    width: 100%;
    ${css(translateFontSize('B_38'))};
  }
`;

const ListBox = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  max-width: 444px;
  width: 100%;
  min-width: 320px;
  min-height: 612px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid ${palette.black.B50};
  overflow: hidden;
  position: relative;
  padding-top: 82px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 34px;

  & > .cardTag {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    ${css(translateFontSize('SB_17'))};
    color: ${palette.black.white};
    background-color: ${palette.main.main};
    padding: 10px 32px;
    display: flex;
    align-items: center;
  }
  & > .buttonBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const ListItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & > div {
    width: 100%;
    &.title {
      & > p {
        ${css(translateFontSize('R_20'))};
      }
      & > h3 {
        ${css(translateFontSize('B_20'))};
      }
    }
    &.price {
      font-size: 32px;
      font-weight: 300;
      & > span {
        ${css(translateFontSize('R_14'))};
        color: ${palette.black.B300};
      }
    }
    &.line {
      height: 1px;
      background-color: ${palette.black.B50};
    }
  }
`;

const ItemButton = styled.button<{ inverse?: boolean }>`
  min-width: 180px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${palette.main.main};
  color: ${palette.black.white};
  border: 0;
  ${css(translateFontSize('SB_18'))};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  }

  ${({ inverse }) =>
    inverse &&
    css`
      background-color: transparent;
      color: ${palette.black.black};
      border: 2px solid ${palette.black.black};
    `}
`;

const ProductList = () => {
  return (
    <Wrapper>
      <ProductListBlock>
        <h2>요금제</h2>
        <ListBox>
          {Array.from({ length: 10 }).map((_, index) => (
            <ListItem key={index}>
              <div className="cardTag">서비스 {index + 1}</div>
              <ListItemContent>
                <div className="title">
                  <p>서비스 설명</p>
                  <h3>서비스 이름</h3>
                </div>
                <div className="price">
                  100,000<span>원 (부가세 포함)</span>
                </div>
                <div className="line" />
                <div className="explanation">서비스 설명</div>
                <div className="procedure">서비스 설명</div>
              </ListItemContent>
              <div className="buttonBox">
                <ItemButton inverse>예시 보기</ItemButton>
                <ItemButton>결제하기</ItemButton>
              </div>
            </ListItem>
          ))}
        </ListBox>
      </ProductListBlock>
      <Blank width="100%" height="100px" />
    </Wrapper>
  );
};

export default ProductList;
