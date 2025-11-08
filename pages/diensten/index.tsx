// pages/diensten/index.tsx
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Card from "../../components/Card";
import { services } from "../../lib/content";

export default function DienstenPage() {
  return (
    <>
      <Head><title>Diensten – ACUFIN</title></Head>
      <Header />
      <PageHero title="Diensten" subtitle="Klap ‘Lees meer’ open voor de volledige uitleg." />
      <main className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.slug} title={s.title} excerpt={s.excerpt} body={s.body} />
        ))}
      </main>
      <Footer />
    </>
  );
}
