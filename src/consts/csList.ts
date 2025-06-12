interface IServiceList {
  path: string;
  title: string;
}

export const CustomerServiceList: Array<IServiceList> = [
  { path: '/customerService/supportBusinesses', title: '지원사업 정보' },
  { path: '/customerService/questions', title: '자주하는 질문' },
  { path: '/customerService/inquire', title: '문의하기' },
];

export const UserServiceList: Array<IServiceList> = [
  { path: '/', title: '사업계획서 관리' },
  { path: '/', title: '구매내역' },
  { path: '/user/modifyInfo', title: '개인정보 수정' },
  { path: '/', title: '문의 내역' },
];
