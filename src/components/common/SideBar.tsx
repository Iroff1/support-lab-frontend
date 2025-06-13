import { sideBarList } from '@consts/sideBarList';
import useScroll from '@hooks/useScroll';
import * as S from '@styles/common/SideBar.style';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const naviagte = useNavigate();
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const scrollBarRef = useRef<HTMLDivElement | null>(null);
  const { scrollState, handleScrollRef } = useScroll();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sideBarToggle, setSideBarToggle] = useState(true);

  const scrollEvent = () => {
    handleScrollRef(categoryRef, scrollBarRef.current!.clientHeight, 30);
  };
  const handdleToggle = () => {
    setSideBarToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setSideBarToggle(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (!categoryRef.current || !scrollBarRef.current) return;
    categoryRef.current.addEventListener('scroll', scrollEvent);
    return () => {
      categoryRef.current &&
        categoryRef.current.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <S.Wrapper $hide={windowWidth >= 1024 ? false : sideBarToggle}>
      <S.ScrollBar ref={scrollBarRef} $h={scrollState.y} />

      {windowWidth < 1024 ? (
        <S.Opener onClick={handdleToggle} className={sideBarToggle ? '' : 'on'}>
          <svg
            width="56"
            height="57"
            viewBox="0 0 56 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.7713 28.4987L16.6213 11.3487C16.038 10.7654 15.7556 10.0747 15.7743 9.2767C15.793 8.4787 16.0948 7.78882 16.6796 7.20704C17.2645 6.62526 17.9552 6.33359 18.7516 6.33204C19.5481 6.33048 20.238 6.62215 20.8213 7.20704L38.7296 25.1737C39.1963 25.6404 39.5463 26.1654 39.7796 26.7487C40.013 27.332 40.1296 27.9154 40.1296 28.4987C40.1296 29.082 40.013 29.6654 39.7796 30.2487C39.5463 30.832 39.1963 31.357 38.7296 31.8237L20.763 49.7904C20.1796 50.3737 19.4991 50.656 18.7213 50.6374C17.9435 50.6187 17.263 50.3169 16.6796 49.732C16.0963 49.1471 15.8046 48.4565 15.8046 47.66C15.8046 46.8636 16.0963 46.1737 16.6796 45.5904L33.7713 28.4987Z"
              fill="#757575"
            />
          </svg>
        </S.Opener>
      ) : null}
      <S.CategoryList ref={categoryRef}>
        {sideBarList.map((item, index) => (
          <S.Subject key={index}>
            <h3>{item.title}</h3>
            <ul>
              {item.list.map((item2, index2) => (
                <li
                  key={index2}
                  className={
                    window.location.pathname === item.path + '/' + (index2 + 1)
                      ? 'on'
                      : ''
                  }
                  onClick={() => {
                    naviagte({ pathname: item.path + '/' + (index2 + 1) });
                  }}
                >
                  {item2}
                </li>
              ))}
            </ul>
          </S.Subject>
        ))}
        <S.Subject>
          <h3>제출하기</h3>
        </S.Subject>
      </S.CategoryList>
    </S.Wrapper>
  );
};

export default SideBar;
