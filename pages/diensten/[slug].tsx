import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// Optioneel: eigen hero
// import PageHero from "../../components/PageHero";
import { services } from "../../lib/content";

export default function ServiceDetail() {
  const { query, isReady } = useRouter();
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;
  const item = services.find((s) => s.slug === slug);

  if (!isReady) return null; // wacht tot router klaar is
  if (!item) {
    // eenvoudige 404
    return (
      <>
        <Head><title>Niet gevonden – ACUFIN</title></Head>
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-12">Deze dienst werd niet gevonden.</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head><title>{item.title} – ACUFIN</title></Head>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
        <p className="mt-2 text-gray-600">{item.excerpt}</p>
        <article className="prose prose-gray mt-6">
          <p>{item.body}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
