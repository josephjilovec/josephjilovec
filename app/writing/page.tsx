import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata("Writing", "Selected writing by Joseph Jilovec on systems, work, technology, business, and personal development.", "/writing");

const selected = [
  { year: "2026", title: "The Skill Set You Need for 2026 and Beyond", topic: "Work · AI · systems", url: "https://medium.com/@jilovecjoseph/the-skill-set-you-need-for-2026-and-beyond-not-last-years-skills-a55aed41a00a" },
  { year: "2026", title: "The Systems Thinking Approach to Advancing Your Corporate Career", topic: "Systems thinking · careers", url: "https://medium.com/@jilovecjoseph/the-systems-thinking-approach-to-advancing-your-corporate-career-5cba18d3c6b1" },
  { year: "2023", title: "Business Firms and Innovations that Shape Growth", topic: "Business · entrepreneurship · innovation", url: "https://medium.com/@jilovecjoseph/business-firms-and-innovation-that-shape-growth-3e83eb2a7952" },
  { year: "2023", title: "Can Geoengineering Curb Climate Change?", topic: "Climate · technology", url: "https://medium.com/@jilovecjoseph/manipulating-earths-climate-geo-engineering-f1bc44732208" },
];

export default function WritingPage() {
  return (
    <>
      <section className="page-hero writing-hero"><div><p className="hero-kicker">Writing / public notebook</p><h1>Ideas become more useful when they can be <span>examined in public.</span></h1></div><p>Selected essays span work, systems thinking, business, technology, science, and personal development. The archive is intentionally broader than the venture studio.</p></section>
      <section className="section writing-list-section">
        <div className="writing-list">
          {selected.map((item, index) => <a href={item.url} target="_blank" rel="noreferrer" key={item.url}><span>{String(index + 1).padStart(2, "0")} / {item.year}</span><div><h2>{item.title}</h2><p>{item.topic}</p></div><i>Read on Medium ↗</i></a>)}
        </div>
      </section>
      <section className="link-band"><div><span>Full archive</span><h2>Browse the broader Medium publication history.</h2></div><a className="button" href={site.medium} target="_blank" rel="noreferrer">Open Medium ↗</a></section>
    </>
  );
}
