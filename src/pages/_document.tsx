import Document, { Html, Head, Main, NextScript } from "next/document";

const MetaConfig = {
  title: "Next.js + Typescript + Tailwind Boilerplate",
  description: "Opinionated Boilerplate for Next.js",
  url: "https://firatoezcan.github.io/nextjs-typescript-tailwind-boilerplate",
};

export default class MyDocument extends Document {
  render() {
    const faviconFolder = `${MetaConfig.url}/favicon`;
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          {/* Favicons + PWA Tags */}
          <link rel="apple-touch-icon" sizes="180x180" href={`${faviconFolder}/apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${faviconFolder}/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${faviconFolder}/favicon-16x16.png`} />
          <link rel="manifest" href={`${faviconFolder}/site.webmanifest`} />
          <link rel="mask-icon" color="#5bbad5" href={`${faviconFolder}/safari-pinned-tab.svg`} />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {/* Primary Meta Tags */}
          <meta name="title" content={MetaConfig.title} />
          <meta name="description" content={MetaConfig.description} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={MetaConfig.url} />
          <meta property="og:title" content={MetaConfig.title} />
          <meta property="og:description" content={MetaConfig.description} />

          {/* Twitter */}
          <meta property="twitter:url" content={MetaConfig.url} />
          <meta property="twitter:title" content={MetaConfig.title} />
          <meta property="twitter:description" content={MetaConfig.description} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
