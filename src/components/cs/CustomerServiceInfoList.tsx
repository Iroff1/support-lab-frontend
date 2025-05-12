import palette from '@assets/colors/index';
import Floating from '@components/common/Floating';
import translateFontSize from '@utils/translateFontSize';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const searchBtn = require('@assets/images/common/icon_search.png');

const CustomerServiceInfoListBlock = styled.div`
  max-width: 1076px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

const InfoListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h1 {
    ${css(translateFontSize('B_38'))};
  }
`;

const InfoListSearchBlock = styled.div`
  max-width: 700px;
  width: 100%;
  min-width: 360px;
`;

const InfoListSearchForm = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  input[type='text'] {
    width: 100%;
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
    padding-right: 76px;
    align-items: center;
    border-radius: 40px;
    border: 1px solid ${palette.main.main};
    ${css(translateFontSize('SB_18'))};
    outline: 0px;
  }

  button {
    position: absolute;
    width: 36px;
    height: 36px;
    background: url(${searchBtn}) center/cover no-repeat;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    border: 0;
    outline: 0;
    cursor: pointer;
  }
`;

const InfoListSearchFilter = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterTag = styled.div`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: ${palette.black.B700};
  background-color: ${palette.black.B20};
  ${css(translateFontSize('SB_18'))};
  transition: 0.2s ease color, 0.2s ease background-color;

  &:hover {
    color: ${palette.black.white};
    background-color: ${palette.main.main};
  }
`;

const InfoListBody = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const InfoItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const InfoItem = styled.div`
  width: 332px;
  height: 254px;
  border-radius: 10px;
  border: 1px solid ${palette.black.B40};
  padding: 16px;
  transition: 0.2s ease border, 0.2s ease transform, 0.2s ease box-shadow;

  &:hover {
    transform: scale(1.01);
    border: 1px solid ${palette.black.B400};
    box-shadow: 0px 0px 8px #00000040;
  }

  & > div {
    width: 100%;
    aspect-ratio: 75/46;
    background-color: ${palette.black.B40};
  }

  & > p {
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    ${css(translateFontSize('B_20'))}
  }
`;

const CustomerServiceInfoList = () => {
  const exList: string[] = Array.from(
    { length: 9 },
    () => '제목입니다. 글이 길어지면 점이 생깁니다.',
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <CustomerServiceInfoListBlock>
        {/* 헤더 */}
        <InfoListHeader>
          {/* 제목 */}
          <h1>지원사업정보</h1>

          {/* 검색 + 필터 */}
          <InfoListSearchBlock>
            <InfoListSearchForm onSubmit={handleSearch}>
              <input type="text" placeholder="검색어를 입력하세요" />
              <button />
            </InfoListSearchForm>

            <InfoListSearchFilter>
              <FilterTag>
                <Link to={'?'}>#전체</Link>
              </FilterTag>
              <FilterTag>
                <Link to={'?tag=1'}>#지원사업</Link>
              </FilterTag>
              <FilterTag>
                <Link to={'?tag=2'}>#사업계획서</Link>
              </FilterTag>
            </InfoListSearchFilter>
          </InfoListSearchBlock>
        </InfoListHeader>

        {/* 바디 */}
        <InfoListBody>
          <InfoItemWrapper>
            {exList.map((value) => (
              <InfoItem>
                <div></div>
                <p>{value}</p>
              </InfoItem>
            ))}
          </InfoItemWrapper>
        </InfoListBody>
      </CustomerServiceInfoListBlock>
      <Floating />
    </>
  );
};
export default CustomerServiceInfoList;
