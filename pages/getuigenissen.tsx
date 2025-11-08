import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const testimonials = [
  { name: "Sofie V.", text: "Transparant, snel en proactief. Aanrader!" },
  { name: "David P.", text: "We besparen elk kwartaal tijd én geld." },
  { name: "Jonas D.", text: "Ons dashboard geeft eindelijk grip op cash." },
];

export default function GetuigenissenPage() {
  return (
    <>
      <Head><title>Getuigenissen – ACUFIN</title></Head>
      <Header />
      <PageHero title="Getuigenissen" subtitle="Wat klanten over ons zeggen." />
      <main className="max-w-3xl mx-auto px-6 py-12 grid gap-4">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-2xl border p-6 bg-white">
            <blockquote className="text-gray-800">“{t.text}”</blockquote>
            <figcaption className="mt-3 text-sm text-gray-500">— {t.name}</figcaption>
          </figure>
        ))}
      </main>
      <Footer />
    </>
  );
}
