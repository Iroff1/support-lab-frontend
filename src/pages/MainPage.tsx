import MainContents from '@components/main/MainContents';
import MetaTag from '@components/MetaTag';

const MainPage = () => {
  return (
    <>
      <MetaTag
        title="PlanKit - 지원 사업 솔루션"
        description="지원 사업을 위한 사업계획서 솔루션을 제공해드립니다."
        keywords="지원 사업, 사업, 사업계획서, 솔루션"
      />
      <MainContents />
    </>
  );
};
export default MainPage;
