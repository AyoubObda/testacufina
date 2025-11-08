import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ACUFIN BV · Boekhouding & Fiscaal advies</title>
        <meta
          name="description"
          content="ACUFIN BV — Heldere boekhouding, fiscaal advies en begeleiding voor zelfstandigen en kmo’s."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
