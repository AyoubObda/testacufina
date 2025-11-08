import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import ButtonLink from "../../components/ButtonLink";
import { posts } from "../../lib/content";

export default function BlogPost() {
  const { query } = useRouter();
  const post = posts.find((p) => p.slug === query.slug);
  if (!post) return null;
  return (
    <>
      <Head><title>{post.title} – ACUFIN</title></Head>
      <Header />
      <PageHero title={post.title} subtitle={post.excerpt} actions={<ButtonLink href="/blog">Alle artikels</ButtonLink>} />
      <main className="max-w-3xl mx-auto px-6 py-12 prose prose-gray">
        <p className="text-sm text-gray-500">Gepubliceerd op {new Date(post.date).toLocaleDateString("nl-BE")}</p>
        <article className="mt-4">{post.body}</article>
      </main>
      <Footer />
    </>
  );
}
