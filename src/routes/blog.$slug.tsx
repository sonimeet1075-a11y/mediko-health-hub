import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Facebook, Twitter, Linkedin, Calendar } from "lucide-react";
import { HeroBanner } from "@/components/ui/Section";
import { BlogCard } from "@/components/sections/Common";
import { blogPosts } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} — Mediko Blog` },
      { name: "description", content: loaderData?.post.excerpt ?? "Mediko blog post." },
      { property: "og:image", content: `https://placehold.co/1200x630/d0e8ff/3d68f5?text=${encodeURIComponent(loaderData?.post.category ?? "Mediko")}` },
    ],
  }),
  component: PostPage,
  notFoundComponent: () => <div className="container-x py-32 text-center"><h2 className="h2">Article not found</h2></div>,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <HeroBanner title={post.title} breadcrumb={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]} />
      <article className="section-y">
        <div className="container-x max-w-3xl">
          <img src={`https://placehold.co/900x500/d0e8ff/3d68f5?text=${encodeURIComponent(post.category)}`} alt={post.title} className="rounded-2xl w-full" />
          <div className="mt-6 flex items-center gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-brand)] font-semibold">{post.category}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
          </div>
          <div className="prose mt-6 space-y-5 text-[17px] leading-relaxed">
            <p>{post.excerpt} This is the kind of practical guidance our doctors share with patients every week — clear, evidence-based and human.</p>
            <p>In this article we cover the most common questions we hear, what the latest research suggests, and how to apply it to your daily life.</p>
            <h3 className="h3">Why this matters</h3>
            <p>Small, consistent decisions compound. Whether it's hydration, sleep or movement, the foundations stay the same — but the details change with your context.</p>
            <h3 className="h3">When to see a specialist</h3>
            <p>If a symptom lasts longer than a week, recurs, or interferes with your routine, book a consultation. Earlier care leads to better outcomes.</p>
          </div>
          <div className="mt-10 flex items-center gap-4 p-5 rounded-2xl bg-[var(--color-section)]">
            <img src="https://placehold.co/80x80/3d68f5/ffffff?text=Dr" className="w-14 h-14 rounded-full" alt="" />
            <div>
              <div className="font-semibold text-[var(--color-ink)]">Dr. Alex Dolmand</div>
              <div className="text-sm">Author · Mediko Editorial</div>
            </div>
            <div className="ml-auto flex gap-2">
              {[Facebook, Twitter, Linkedin].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-[var(--color-card-border)] flex items-center justify-center hover:bg-[var(--color-brand)] hover:text-white transition"><I className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
        </div>
      </article>
      <section className="bg-[var(--color-section)] section-y">
        <div className="container-x">
          <h2 className="h2 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
