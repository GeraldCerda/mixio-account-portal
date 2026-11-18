import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/mixio/resources";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = articles.find(item => item.slug === slug); return { title: article ? `${article.title} | Mixio Resources` : "Resource not found | Mixio" }; }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return <main id="main"><section className="mx-page-lead"><div className="wrap mx-article"><Link href="/resources" className="mx-article-back">← All resources</Link><p className="mx-eyebrow">{article.category}</p><h1>{article.title}</h1><p>{article.summary}</p></div></section><article className="section"><div className="wrap mx-article">{article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}<p className="mx-reference">Information here comes from the supplied source archive. Features, platform support, pricing, installers and service integrations must be verified against the actual product release before public launch.</p><Link href="/support" className="mx-article-back">Contact support</Link></div></article></main>;
}
