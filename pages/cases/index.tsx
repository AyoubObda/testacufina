// pages/cases/index.tsx
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Card from "../../components/Card";
import { cases } from "../../lib/content";

export default function CasesPage() {
  return (
    <>
      <Head><title>Cases – ACUFIN</title></Head>
      <Header />
      <PageHero title="Cases & Getuigenissen" subtitle="Klik op ‘Lees meer’ om het volledige verhaal te lezen." />
      <main className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <Card key={c.slug} title={c.title} excerpt={c.excerpt} body={c.body} />
        ))}
      </main>
      <Footer />
    </>
  );
}
