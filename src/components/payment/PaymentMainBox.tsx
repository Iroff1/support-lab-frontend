import AuthCheckItem from '@components/auth/AuthCheckItem';
import SubmitButton from '@components/common/SubmitButton';
import styled from 'styled-components';

const PaymentMainBoxBlock = styled.div``;

const PaymentMainBox = () => {
  return (
    <PaymentMainBoxBlock>
      {/* 헤더 */}
      <div>
        <h2>주문결제</h2>
      </div>

      {/* 바디 */}
      <div>
        {/* 컨텐츠 */}
        <form>
          {/* 결제 정보 리스트*/}
          <div></div>

          {/* 개인정보 동의 */}
          <AuthCheckItem name="paymentAgree">
            위 주문 내용을 확인하였으며, 회원 본인은 개인정보 이용 및 제공 및
            결제에 동의합니다.
          </AuthCheckItem>
        </form>

        {/* 결제 버튼 */}
        <SubmitButton>결제하기</SubmitButton>
      </div>
    </PaymentMainBoxBlock>
  );
};

export default PaymentMainBox;
