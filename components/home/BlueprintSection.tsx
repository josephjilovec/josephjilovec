import Image from "next/image";
import { FounderCopy } from "./FounderCopy";
import { WorkingDisciplines } from "./WorkingDisciplines";
import { site } from "@/lib/site";
export function BlueprintSection(){return <section id="founder" className="section home-anchor"><div className="founder-intro-layout"><div className="founder-intro-portrait"><Image src="/images/joseph-founder.png" alt="Joseph Jilovec" fill sizes="(max-width:900px) 100vw,42vw"/><div className="founder-portrait-caption"><span>Phoenix, Arizona</span><span>Joseph Jilovec</span></div></div><div className="founder-intro-copy"><FounderCopy/><div className="hero-actions"><a className="button" href={site.booking} target="_blank" rel="noreferrer">Book a founder call</a></div></div></div><WorkingDisciplines/></section>}
