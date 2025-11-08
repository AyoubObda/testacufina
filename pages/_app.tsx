import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ACUFIN BV · Accountancy & Fiscaliteit</title>
        <meta name="description" content="Boekhouding, rapportering en fiscaal advies voor vrije beroepen." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
