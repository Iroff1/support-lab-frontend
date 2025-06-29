/**
 * 이용약관 유형을 나타내는 리터럴 타입 (6가지)
 * @argument termsofService 서비스 이용약관
 * @argument privacyPolicy 개인정보 수집 및 이용 동의
 * @argument marketing 이벤트 혜택 정보 수신
 * @argument refund 환불 규정 안내
 * @argument otherInfo 기타 정보 수신
 * @argument businessPlan 사업계획서 초안 이용약관
 */
export type TTypeOfTerms =
  | 'termsOfService'
  | 'privacyPolicy'
  | 'marketing'
  | 'refund'
  | 'otherInfo'
  | 'businessPlan';
