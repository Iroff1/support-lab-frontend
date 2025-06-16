interface IProductProfile {
  subTitle: string;
  mainTitle: string;
  price: number | '견적받기 필요';
  contents: string[];
  event: string | null;
  procedure: string[];
}

export const productList: Array<IProductProfile> = [
  {
    subTitle: '스스로 하는',
    mainTitle: '사업계획서 초안 작성',
    price: 199000,
    contents: [
      '질의응답 과정을 통해 사업 아이템 구체화',
      '합격 사례를 학습한 AI를 통해 사업계획서 초안 작성',
      '10분 내 문서 결과 제공 (docx, hwp)',
    ],
    event: '전문가 전화상담 15분 추가',
    procedure: [
      '솔루션 결제',
      '질의응답 필수 10개, 선택 20개 입력',
      '사업계획서 초안 결과물 받기 (docx, hwp)',
    ],
  },

  {
    subTitle: '전문가를 통한',
    mainTitle: '사업계획서 초안 작성',
    price: 699000,
    contents: [
      '전문가의 멘토링을 통한 아이템 구체화 및 궁금증 해소',
      '합격 사례를 학습한 AI를 통해 사업계획서 초안 작성',
      '10분 내 문서 결과 제공 (docx, hwp)',
    ],
    event: '전문가 전화상담 30분 추가',
    procedure: [
      '솔루션 결제',
      '전문가 배정 후 멘토링 예약',
      '멘토링을 통한 아이템 질의응답 (60분)',
      '사업계획서 초안 결과물 받기 (docx, hwp)',
    ],
  },
  {
    subTitle: '전문가가 해주는',
    mainTitle: '사업계획서 첨삭 코멘트',
    price: 199000,
    contents: [
      '사업계획서 세부 항목별 구체적인 첨삭 코멘트',
      '확인 없던 사업계획서를 전문가 시점에서 검증',
    ],
    event: '전문가 전화상담 15분 추가',
    procedure: [
      '솔루션 결제',
      '전문가 배정 후 첨삭 박을 사업계획서 전달',
      '첨삭 코멘트 결과물 받기 (영업일 기준 1일)',
    ],
  },
  {
    subTitle: 'IR 전문가가 해주는',
    mainTitle: 'PPT형식 사업계획서 제작',
    price: '견적받기 필요',
    contents: [
      'PPT 기획부터 디자인까지 IR 전문가가 제작',
      '심사위원 입맛에 딱 맞는 PPT 자료 제작',
    ],
    event: null,
    procedure: [
      'PPT에 들어갈 자료 전달',
      '견적서 받고 솔루션 결제',
      '초기 기획안 제공 및 수정 - 5일',
      '초기 디자인 제공 및 수정 - 6일',
      '최종 결과물 받기 (ppt)',
    ],
  },
];
