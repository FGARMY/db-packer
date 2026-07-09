import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object | object[];
}

/**
 * Reusable SEO head component that sets page-specific meta tags,
 * Open Graph, Twitter Cards, and JSON-LD structured data.
 */
const SEOHead = ({
  title,
  description,
  canonicalPath = '/',
  ogImage = 'https://adbpack.com/assets/hero-corrugated-boxes.png',
  ogType = 'website',
  keywords,
  schema,
}: SEOHeadProps) => {
  const siteUrl = 'https://adbpack.com';
  const fullUrl = `${siteUrl}${canonicalPath}`;

  // Support single schema or array of schemas
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ADBPack" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
