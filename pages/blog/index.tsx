import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Card from "../../components/Card";
import { posts } from "../../lib/content";

export default function BlogIndex() {
  return (
    <>
      <Head><title>Blog – ACUFIN</title></Head>
      <Header />
      <PageHero title="Insights & Blog" subtitle="Open ‘Lees meer’ om het volledige artikel te lezen." />
      <main className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Card
            key={p.slug}
            title={p.title}
            excerpt={p.excerpt}
            body={p.body}           // 👈 dropdown op dezelfde pagina
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
