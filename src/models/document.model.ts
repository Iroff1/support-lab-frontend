export interface IDocumentForm {
  initial: {
    terms: boolean;
    personalInfo: IDocumentPersonalInfo;
    support: string;
    businessKeyword: string;
  };
  //   required: IDocumentFormRequired;
  //   optional: IDocumentFormOptional;
}

export interface IDocumentPersonalInfo {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  companyPosition: string;
}

export interface IDocumentFormRequired {}
export interface IDocumentFormOptional {}

export interface IDocumentFormItem {
  index: number;
  name: string;
  placeholder: string;
  title: string;
  description: string;
  attachment: any[]; // 첨부 파일
}
