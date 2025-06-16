import Blank from '@components/common/Blank';
import { productList } from '@consts/productList';
import * as S from '@styles/product/ProductList.style';

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.55018 15.15L18.0252 6.675C18.2252 6.475 18.4585 6.375 18.7252 6.375C18.9918 6.375 19.2252 6.475 19.4252 6.675C19.6252 6.875 19.7252 7.11267 19.7252 7.388C19.7252 7.66333 19.6252 7.90067 19.4252 8.1L10.2502 17.3C10.0502 17.5 9.81685 17.6 9.55018 17.6C9.28351 17.6 9.05018 17.5 8.85018 17.3L4.55018 13C4.35018 12.8 4.25418 12.5627 4.26218 12.288C4.27018 12.0133 4.37451 11.7757 4.57518 11.575C4.77585 11.3743 5.01351 11.2743 5.28818 11.275C5.56285 11.2757 5.80018 11.3757 6.00018 11.575L9.55018 15.15Z"
        fill="#191970"
      />
    </svg>
  );
};

const ProductList = () => {
  return (
    <S.Wrapper>
      <S.ProductListBlock>
        <h2>요금제</h2>
        <S.ListItemWrapper>
          {productList.map((product, pIndex) => (
            <S.ListItem key={pIndex}>
              <div className="cardTag">서비스 {pIndex + 1}</div>
              <S.ListItemContent>
                <div className="title">
                  <p>{product.subTitle}</p>
                  <h3>{product.mainTitle}</h3>
                </div>
                <div className="price">
                  {typeof product.price === 'number' ? (
                    <>
                      {product.price}
                      <span> 원 (부가세 포함)</span>
                    </>
                  ) : (
                    product.price
                  )}
                </div>
                <div className="line" />
                <div className="contents">
                  {product.contents.map((content, contentIndex) => (
                    <div className="contentItem" key={contentIndex}>
                      <CheckIcon />
                      <p>{content}</p>
                    </div>
                  ))}
                  {product.event ? (
                    <div className="contentItem">
                      <div className="openEvent">오픈 이벤트</div>
                      <CheckIcon />
                      <p>{product.event}</p>
                    </div>
                  ) : null}
                </div>
                <div className="procedure">
                  <h4>이용절차</h4>
                  {product.procedure.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {itemIndex + 1}. {item}
                    </div>
                  ))}
                </div>
              </S.ListItemContent>
              <div className="buttonBox">
                <S.ItemButton inverse>예시 보기</S.ItemButton>
                <S.ItemButton>결제하기</S.ItemButton>
              </div>
            </S.ListItem>
          ))}
        </S.ListItemWrapper>
      </S.ProductListBlock>
      <Blank width="100%" height="100px" />
    </S.Wrapper>
  );
};

export default ProductList;
