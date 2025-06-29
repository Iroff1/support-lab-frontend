import { Helmet } from 'react-helmet-async';

interface IMetaTagProps {
  title: string;
  description: string;
  keywords: string;
}

const MetaTag = (prop: IMetaTagProps) => {
  return (
    <Helmet>
      <title>{prop.title}</title>

      <meta name="description" content={prop.description} />
      <meta name="keywords" content={prop.keywords} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={prop.title} />
      <meta property="og:site_name" content={prop.title} />
      <meta property="og:description" content={prop.description} />
      <meta property="og:keywords" content={prop.keywords} />
      <meta property="og:image" content={'/preview'} />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  );
};

export default MetaTag;
