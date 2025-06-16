import Blank from '@components/common/Blank';
import SubmitButton from '@components/common/SubmitButton';
import DocumentRadioLabel from '@components/doc/common/DocumentRadioLabel';
import { useAppSelector } from '@store/index';
import { CheckBox, IconChecked } from '@styles/common/CheckBox.style';
import * as T from '@styles/common/Table.style';
import * as S from '@styles/payment/PaymentMainBox.style';
import { ICON_ARROW_RIGHT } from '@styles/user/UserModifyInfo.style';
import translatePhoneNumber from '@utils/translateContact';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentMainBox = () => {
  const auth = useAppSelector(({ auth }) => auth.auth);
  const [refundAgreed, setRefundAgreed] = useState(false);
  const [discount, setDiscount] = useState(0);
  const handleRefundAgreed = () => {
    setRefundAgreed((prev) => !prev);
  };
  const coupon = [];

  const handleDiscount = (val: number) => {
    setDiscount(val);
  };

  return (
    <S.PaymentMainBoxBlock>
      {/* 헤더 */}
      <h2>주문결제</h2>

      {/* 컨텐츠 */}
      <S.PaymentContents>
        {/* 결제 정보 리스트*/}
        <S.PaymentContentItem>
          <h4>주문 상품 정보</h4>
          <T.Table>
            <T.TableRow>
              <T.TableLeft></T.TableLeft>
              <div className="col">
                <T.TableRight>사업계획서 작성 솔루션</T.TableRight>
                <T.TableRight>1개</T.TableRight>
                <T.TableRight>89,000</T.TableRight>
              </div>
            </T.TableRow>
          </T.Table>
        </S.PaymentContentItem>

        <S.PaymentContentItem>
          <h4>구매자 정보</h4>
          <T.Table>
            <T.TableRow>
              <T.TableLeft>이름</T.TableLeft>
              <T.TableRight>{auth?.name || '홍길동'}</T.TableRight>
            </T.TableRow>
            <T.TableRow>
              <T.TableLeft>이메일</T.TableLeft>
              <T.TableRight>{auth?.email || 'example@test.com'}</T.TableRight>
            </T.TableRow>
            <T.TableRow>
              <T.TableLeft>휴대폰 번호</T.TableLeft>
              <T.TableRight>
                {translatePhoneNumber(auth?.phone || '01012341234')}
              </T.TableRight>
            </T.TableRow>
          </T.Table>
        </S.PaymentContentItem>

        <S.PaymentContentItem>
          <h4>결재 정보</h4>
          <T.Table>
            <T.TableRow>
              <T.TableLeft>총 상품 가격</T.TableLeft>
              <T.TableRight>
                <span>89,000</span>원
              </T.TableRight>
            </T.TableRow>
            <T.TableRow>
              <T.TableLeft>할인 쿠폰</T.TableLeft>
              <T.TableRight>
                <S.PaymentCoupon>
                  <div className="discount">
                    <span>{-discount}</span>원
                  </div>
                  <div className="select">
                    {coupon.length === 0 ? (
                      <span className="notFound">
                        적용 가능한 할인쿠폰이 없습니다.
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </S.PaymentCoupon>
              </T.TableRight>
            </T.TableRow>
            <T.TableRow>
              <T.TableLeft>총 결제 금액</T.TableLeft>
              <T.TableRight>
                <strong>89,000</strong>원
              </T.TableRight>
            </T.TableRow>
          </T.Table>
        </S.PaymentContentItem>
        <S.PaymentContentItem>
          <h4>결제 수단</h4>
          <T.Table>
            <S.PaymentMethod>
              <DocumentRadioLabel
                name="payment"
                $placeholder="신용 카드"
                $checked
                handleClick={() => {}}
              />
            </S.PaymentMethod>
          </T.Table>
        </S.PaymentContentItem>
      </S.PaymentContents>
      <Blank height="20px" />

      {/* 환불 약관 동의 */}

      <S.PaymentRefundAgreed>
        <CheckBox $checked={refundAgreed} onClick={handleRefundAgreed}>
          <IconChecked />
        </CheckBox>
        <p className="label" onClick={handleRefundAgreed}>
          <span>[필수]</span> 환불 약관 전체 확인 및 동의
        </p>
        <Link to={'/terms/refund'} target="_blank" className="direct">
          전체
          <img src={ICON_ARROW_RIGHT} alt=">" />
        </Link>
      </S.PaymentRefundAgreed>
      <Blank height="20px" />

      {/* 결제 버튼 */}
      <SubmitButton>결제하기</SubmitButton>
    </S.PaymentMainBoxBlock>
  );
};

export default PaymentMainBox;
