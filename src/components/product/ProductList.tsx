import Blank from '@components/common/Blank';
import * as S from '@styles/product/ProductList.style';

const ProductList = () => {
  return (
    <S.Wrapper>
      <S.ProductListBlock>
        <h2>요금제</h2>
        <S.ListBox>
          {Array.from({ length: 10 }).map((_, index) => (
            <S.ListItem key={index}>
              <div className="cardTag">서비스 {index + 1}</div>
              <S.ListItemContent>
                <div className="title">
                  <p>서비스 설명</p>
                  <h3>서비스 이름</h3>
                </div>
                <div className="price">
                  100,000<span>원 (부가세 포함)</span>
                </div>
                <div className="line" />
                <div className="explanation">서비스 설명</div>
                <div className="procedure">서비스 설명</div>
              </S.ListItemContent>
              <div className="buttonBox">
                <S.ItemButton inverse>예시 보기</S.ItemButton>
                <S.ItemButton>결제하기</S.ItemButton>
              </div>
            </S.ListItem>
          ))}
        </S.ListBox>
      </S.ProductListBlock>
      <Blank width="100%" height="100px" />
    </S.Wrapper>
  );
};

export default ProductList;
