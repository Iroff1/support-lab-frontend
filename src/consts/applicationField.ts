import { IStringObj } from '@models/common.model';
import {
  IApplicationOptionalField,
  IApplicationRequiredField,
} from '@models/docs.model';

export const applicationRequiredFields: IStringObj<IApplicationRequiredField> =
  {
    itemName: '아이템명',
    coreContent: '핵심 내용',
    internalMotivation: '내부적 동기',
    functionAndEffect: '기능 및 효과',
    productStatus: '시제품 현황',
    marketAndCustomerValidation: '시장/고객 검증',
    salesPath: '판매 경로',
    thisYearProduct: '올해 시제품',
    productUpgrade: '시제품 고도화',
    revenueStructure: '수익구조',
  };

export const applicationOptionalFields: IStringObj<IApplicationOptionalField> =
  {
    externalMotivation: '외부적 동기',
    targetMarket: '목표 시장',
    targetCustomer: '목표 고객',
    competitorAnalysis: '경쟁사 분석',
    intellectualProperty: '지식재산권',
    certification: '인증',
    domesticSales: '국내 매출',
    domesticSalesStrategy: '국내 판매 전략',
    thisYearDomesticSales: '올해 국내 매출',
    overseasSales: '해외 매출',
    overseasSalesStrategy: '해외 판매 전략',
    thisYearOverseasSales: '올해 해외 매출',
    expectedSales: '예상 매출',
    fundingPlan: '자금 조달 계획',
    shortTermGoal: '단기 목표',
    longTermGoal: '중장기 목표',
    representativeAbility: '대표자 역량',
    teamAbility: '팀원 역량',
    equipmentAndFacility: '장비·시설',
    partnerAbility: '파트너사 역량',
  };
