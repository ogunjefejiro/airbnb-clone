import Head from "next/head";

const Meta = ({ title, keywords, description, image }) => {
  const metaTitle = `${title || "Vacation Homes & Condo Rentals"} - Airbnb - Airbnb`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords || ""} />
      <meta name="description" content={description || ""} />
      <meta property="og:image" content={image || ""} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/icons/airbnb-icon.svg" />
      <title>{metaTitle}</title>
    </Head>
  );
};

export default Meta;
