import palette from '@assets/colors';
import useScroll from '@hooks/useScroll';
import translateFontSize from '@utils/translateFontSize';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  z-index: 5;
  width: 210px;
  height: calc(100vh - 64px);
  padding: 10px;
  background-color: ${palette.black.B20};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

const CategoryList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollBar = styled.div<{ $h: number }>`
  position: absolute;
  top: ${({ $h }) => $h + 30}px;
  right: 2px;
  width: 8px;
  height: 230px;
  background-color: ${palette.black.B40};
  border-radius: 10px;
`;

const Subject = styled.div`
  & > h3 {
    ${css(translateFontSize('SB_18'))};
  }

  & > ul {
    margin-top: 14px;
    & > li {
      padding: 7px;
      border-radius: 6px;
      color: ${palette.black.B500};
      transition: all 0.2s background-color;
      &.on {
        background-color: ${palette.black.B40};
      }
    }
  }
`;

const SideBar = () => {
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);
  const { state, handleScrollY } = useScroll();

  const handleScrollEvent = () => {
    if (!categoryRef.current) return;
    const { clientHeight, scrollHeight, scrollTop } = categoryRef.current;
    const percent = scrollTop / (scrollHeight - clientHeight);
    handleScrollY(percent * (clientHeight - 260));
  };

  useEffect(() => {
    categoryRef.current &&
      categoryRef.current.addEventListener('scroll', handleScrollEvent);
    return () => {
      categoryRef.current &&
        categoryRef.current.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  // TODO) 스크롤 드래그 이벤트 완성
  //   const [prevMouseY, setPrevMouseY] = useState<number | null>(null);
  //   const handleScrollDrag = (e: MouseEvent) => {
  //     if (prevMouseY === null) return;
  //     const diff = e.clientY - prevMouseY;
  //     handleScrollY(state.y + diff);
  //   };
  //   useEffect(() => {
  //     if (prevMouseY !== null) {
  //       console.log('down');
  //       scrollBarRef.current?.addEventListener('mousemove', handleScrollDrag);
  //     } else {
  //       console.log('up');
  //       scrollBarRef.current?.removeEventListener('mousemove', handleScrollDrag);
  //     }
  //     console.log(prevMouseY);
  //   }, [prevMouseY]);
  //   useEffect(() => {
  //     if (categoryRef.current)
  //       categoryRef.current.scrollTop =
  //         (state.y / (categoryRef.current.clientHeight - 260)) *
  //         (categoryRef.current.scrollHeight - categoryRef.current.clientHeight);
  //   }, [state.y]);

  return (
    <Wrapper>
      <ScrollBar ref={scrollBarRef} $h={state.y} />
      <CategoryList ref={categoryRef}>
        <Subject>
          <h3>기본정보</h3>
          <ul>
            <li>이용약관</li>
            <li>개인정보 입력</li>
            <li>지원사업 선택</li>
            <li>안내사항</li>
            <li>아이템 키워드 선택</li>
          </ul>
        </Subject>
        <Subject>
          <h3>필수항목</h3>
          <ul>
            <li>아이템명</li>
            <li>핵심 내용</li>
            <li>내부적 동기</li>
            <li>기능 및 효과</li>
            <li>시제품 현황</li>
            <li>시장/고객 검증</li>
            <li>판매 경로</li>
            <li>올해 시제품</li>
            <li>시제품 고도화</li>
          </ul>
        </Subject>
        <Subject>
          <h3>선택항목</h3>
          <ul>
            <li>예상 매출</li>
            <li>자금 조달 계획</li>
            <li>단기 목표</li>
            <li>중장기 목표</li>
            <li>대표자 역량</li>
            <li>팀원 역량</li>
            <li>장비·시설</li>
            <li>파트너사 역량</li>
          </ul>
        </Subject>
        <Subject>
          <h3>제출하기</h3>
        </Subject>
      </CategoryList>
    </Wrapper>
  );
};

export default SideBar;
