import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { HeroBanner, SectionLabel } from "@/components/ui/Section";
import { BlogCard } from "@/components/sections/Common";
import { blogPosts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Mediko Blog — Health Tips and News" },
      { name: "description", content: "Trending health topics, patient stories, and wellness guides from the Mediko team." },
      { property: "og:title", content: "Mediko Blog" },
      { property: "og:description", content: "Health tips, patient stories and wellness guides." },
    ],
  }),
  component: BlogList,
});

function BlogList() {
  const cats = Array.from(new Set(blogPosts.map((p) => p.category)));
  return (
    <>
      <HeroBanner title="Our Latest Articles" breadcrumb={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1fr_300px] gap-10">
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {blogPosts.map((p) => <BlogCard key={p.slug} post={p} />)}
            </div>
            <div className="mt-12 flex justify-center gap-2">
              {[1,2,3].map((n) => (
                <button key={n} className={`w-11 h-11 rounded-full font-semibold ${n === 1 ? "bg-[var(--color-brand)] text-white" : "border border-[var(--color-card-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"}`}>{n}</button>
              ))}
              <button className="w-11 h-11 rounded-full border border-[var(--color-card-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] flex items-center justify-center"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
          <aside className="space-y-8">
            <div className="card-elev p-5">
              <h4 className="h4 mb-3">Search</h4>
              <div className="flex items-center gap-2 border border-[var(--color-card-border)] rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-[var(--color-brand)]" />
                <input type="search" placeholder="Search articles..." className="flex-1 outline-none text-sm bg-transparent" />
              </div>
            </div>
            <div className="card-elev p-5">
              <h4 className="h4 mb-3">Categories</h4>
              <ul className="space-y-2 text-sm">
                {cats.map((c) => <li key={c}><a href="#" className="flex justify-between hover:text-[var(--color-brand)]"><span>{c}</span><span className="text-xs">({blogPosts.filter(p=>p.category===c).length})</span></a></li>)}
              </ul>
            </div>
            <div className="card-elev p-5">
              <h4 className="h4 mb-3">Recent Posts</h4>
              <ul className="space-y-4">
                {blogPosts.slice(0,3).map((p) => (
                  <li key={p.slug} className="flex gap-3">
                    <img src={`https://placehold.co/80x80/d0e8ff/3d68f5?text=${encodeURIComponent(p.category[0])}`} className="w-16 h-16 rounded-lg" alt="" />
                    <div>
                      <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-brand)] line-clamp-2">{p.title}</Link>
                      <div className="text-xs mt-1">{p.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
