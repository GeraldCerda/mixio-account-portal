"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { articles, resourceCategories, type ResourceCategory } from "@/lib/mixio/resources";

export function ResourceBrowser() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ResourceCategory | "All">("All");
  const visible = useMemo(() => articles.filter(article => {
    const matchesCategory = category === "All" || article.category === category;
    const haystack = `${article.title} ${article.summary} ${article.category} ${article.sections.map(section => `${section.heading} ${section.body}`).join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(search.trim().toLowerCase());
  }), [category, search]);
  return <div className="mx-resource-tools"><label htmlFor="mx-resource-search" className="mx-section-label">Search documentation</label><input id="mx-resource-search" type="search" className="mx-resource-search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search guides and topics" /><div className="mx-resource-filters" role="group" aria-label="Filter resources by category">{(["All", ...resourceCategories] as const).map(value => <button key={value} type="button" aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}</div><p aria-live="polite" className="mx-visual-caption">{visible.length} {visible.length === 1 ? "article" : "articles"}</p><div className="mx-resource-list">{visible.map(article => <Link key={article.slug} className="mx-resource-card" href={`/resources/${article.slug}`}><small>{article.category}</small><strong>{article.title}</strong><span>{article.summary}</span></Link>)}</div>{visible.length === 0 ? <p>No articles match that search. Try another term or category.</p> : null}</div>;
}
