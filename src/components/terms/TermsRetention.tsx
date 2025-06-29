import * as S from '@styles/terms/TermsOfUse.style';

/**
 * 보존 항목	보존 기간	법적 근거
 * 결제 및 거래 내역 (청약, 환불 등 포함)	5년	전자상거래법 제6조
 * 소비자 불만 및 분쟁처리 기록	3년	전자상거래법 제6조
 * 접속 기록 (IP 주소 등)	3개월	통신비밀보호법 제15조의2
 */
const TABLE_DATA = [
  ['보존 항목', '보존 기간', '법적 근거'],
  ['결제 및 거래 내역 (청약, 환불 등 포함)', '5년', '전자상거래법 제6 조'],
  ['소비자 불만 및 분쟁처리 기록', '3년', '전자상거래법 제6 조'],
  ['접속 기록 (IP 주소 등)', '3개월', '통신비밀보호법 제15조의2'],
];

const TermsRetention = () => {
  return (
    <S.TermSRetentionBlock>
      {TABLE_DATA.map((data, i) => (
        <div key={i} className="row">
          {data.map((item, j) => (
            <div key={j}>{item}</div>
          ))}
        </div>
      ))}
    </S.TermSRetentionBlock>
  );
};

export default TermsRetention;
