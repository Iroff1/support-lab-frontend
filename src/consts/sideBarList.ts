interface ISideBarList {
  title: string;
  path: '/documents' | '/documents/required' | 'documents/optional';
  list: string[];
}

const sideBarInitial: ISideBarList = {
  title: '기본정보',
  path: '/documents',
  list: [
    '이용약관',
    '개인정보 입력',
    '지원사업 선택',
    '안내사항',
    '아이템 키워드 선택',
  ],
};

const sideBarRequired = {
  title: '필수항목',
  path: '/documents/required',
  list: [
    '아이템명',
    '핵심 내용',
    '내부적 동기',
    '기능 및 효과',
    '시제품 현황',
    '시장/고객 검증',
    '판매 경로',
    '올해 시제품',
    '시제품 고도화',
  ],
};

const sideBarOptional = {
  title: '선택항목',
  path: '/documents/optional',
  list: [
    '예상 매출',
    '자금 조달 계획',
    '단기 목표',
    '중장기 목표',
    '대표자 역량',
    '팀원 역량',
    '장비·시설',
    '파트너사 역량',
  ],
};

export const sideBarList = [sideBarInitial, sideBarRequired, sideBarOptional];
