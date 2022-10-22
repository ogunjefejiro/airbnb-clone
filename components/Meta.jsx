import Head from "next/head";

const Meta = ({ title, keywords, description, image }) => {
  const metaTitle = `${title || "Vacation Homes & Condo Rentals"} - Airbnb - Airbnb`;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords || ""} />
      <meta
        name="description"
        content={
          description ||
          "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb."
        }
      />
      <meta
        property="og:title"
        content="Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes &amp; Experiences"
      ></meta>
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={image || "https://a0.muscache.com/im/pictures/fe7217ff-0b24-438d-880d-b94722c75bf5.jpg"}
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/icons/airbnb-icon.svg" />
      <title>{metaTitle}</title>
    </Head>
  );
};

export default Meta;
