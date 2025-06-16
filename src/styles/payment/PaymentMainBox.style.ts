import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

export const PaymentMainBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 20px 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  & > h2 {
    width: 100%;
    ${css(translateFontSize('B_38'))};
  }
`;

export const PaymentContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

export const PaymentContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > h4 {
    width: 100%;
    ${css(translateFontSize('M_20'))};
  }
`;

export const PaymentCoupon = styled.div`
  display: flex;
  justify-content: space-between;
  & > .discount {
    &,
    & > span {
      color: ${palette.system.red};
    }
  }
  & > .select {
    display: flex;
    flex-direction: column;

    & > .notFound {
      color: ${palette.system.red};
    }
  }
`;

export const PaymentMethod = styled.div`
  padding: 0px 20px 10px 20px;
  border-radius: 8px;
  border: 1px solid ${palette.black.B40};
  margin-top: 10px;
`;

export const PaymentRefundAgreed = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;

  & > .label {
    cursor: pointer;
    & > span {
      color: ${palette.system.blue};
    }
  }

  & > .direct {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${palette.black.B70};
    fill: ${palette.black.B70};
    cursor: pointer;

    & > img {
      width: 10px;
      height: 10px;
      aspect-ratio: 1/1;
    }
  }
`;
