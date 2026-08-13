import Image from "next/image";
import { FounderCopy } from "./FounderCopy";
export function BlueprintSection(){return <section id="founder" className="section home-anchor"><div className="founder-intro-layout"><div className="founder-intro-portrait"><Image src="/images/joseph-founder.png" alt="Joseph Jilovec" fill sizes="(max-width:900px) 100vw,42vw"/><div className="founder-portrait-caption"><span>Phoenix, Arizona</span><span>Joseph Jilovec</span></div></div><div className="founder-intro-copy"><FounderCopy/></div></div></section>}
