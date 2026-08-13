import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataRoomRequest } from "@/components/ventures/DataRoomRequest";
import { getCapitalProfile, capitalProfiles } from "@/lib/capital";
import { getVenture } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return capitalProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profile = getCapitalProfile(slug);
  if (!profile) return {};
  return pageMetadata(`${profile.name} Capital File`, `Three-stage capital progression model for ${profile.name}.`, `/portfolio/${slug}/capital`);
}

export default async function CapitalFilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getCapitalProfile(slug);
  const venture = getVenture(slug);
  if (!profile || !venture) notFound();

  const isNonprofit = profile.stages.every((stage) => stage.valuation.startsWith("N/A"));

  return (
    <>
      <style>{`
        .capital-hero{max-width:1500px;margin:0 auto;padding:86px 28px 52px;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(330px,.65fr);gap:60px;border-bottom:1px solid var(--line)}
        .capital-back{display:inline-flex;color:var(--muted);font-size:11px;letter-spacing:.08em;text-transform:uppercase}
        .capital-kicker{margin:34px 0 0;color:var(--venture-accent);font-size:10px;font-weight:800;letter-spacing:.17em;text-transform:uppercase}
        .capital-hero h1{font-size:clamp(54px,7vw,108px);line-height:.89;letter-spacing:-.065em;margin:18px 0 24px;max-width:1000px}
        .capital-lede{max-width:820px;color:#bbc6cd;font-size:17px;line-height:1.7}
        .capital-hero-actions{display:flex;gap:13px;flex-wrap:wrap;margin-top:30px}
        .capital-context{align-self:end;border:1px solid var(--line);border-radius:24px;padding:28px;background:linear-gradient(145deg,var(--venture-soft),rgba(255,255,255,.018))}
        .capital-context span,.capital-stage-index,.capital-label{display:block;color:var(--muted);font-size:9px;letter-spacing:.16em;text-transform:uppercase}
        .capital-context strong{display:block;font-size:23px;margin:10px 0 19px;letter-spacing:-.035em}
        .capital-context p{color:var(--muted);font-size:12px;line-height:1.7;margin:0}
        .capital-main{max-width:1500px;margin:0 auto;padding:74px 28px 120px}
        .capital-notice{display:grid;grid-template-columns:auto 1fr;gap:24px;padding:22px 24px;border:1px solid color-mix(in srgb,var(--venture-accent) 30%,var(--line));border-radius:18px;background:var(--venture-soft);margin-bottom:24px}
        .capital-notice strong{font-size:11px;text-transform:uppercase;letter-spacing:.1em}.capital-notice p{margin:0;color:#bdc7cd;font-size:12px;line-height:1.7}
        .capital-stage-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .capital-stage{border:1px solid var(--line);border-radius:24px;padding:28px;background:#0a0e11;min-height:560px;display:flex;flex-direction:column}
        .capital-stage:nth-child(2){background:linear-gradient(160deg,var(--venture-soft),#0a0e11 46%)}
        .capital-stage h2{font-size:27px;line-height:1.08;letter-spacing:-.04em;margin:14px 0 28px}
        .capital-money{display:grid;grid-template-columns:1fr;gap:16px;padding:19px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .capital-money strong{display:block;font-size:24px;line-height:1.1;letter-spacing:-.04em;margin-top:7px}
        .capital-detail{padding-top:22px}.capital-detail + .capital-detail{margin-top:4px}.capital-detail p{color:#b8c2c9;font-size:12px;line-height:1.72;margin:8px 0 0}
        .capital-detail.metric{margin-top:auto;padding-top:30px}.capital-detail.metric p{font-size:14px;color:#edf1f2}
        .capital-benchmark{margin-top:14px;border:1px solid var(--line);border-radius:22px;padding:30px;display:grid;grid-template-columns:minmax(220px,.35fr) 1fr;gap:40px;align-items:start}
        .capital-benchmark h3{font-size:25px;margin:8px 0}.capital-benchmark p{margin:0;color:var(--muted);line-height:1.75;font-size:13px}
        .data-room-shell{margin-top:14px;border:1px solid var(--line);border-radius:24px;overflow:hidden;display:grid;grid-template-columns:.74fr 1.26fr;background:linear-gradient(135deg,#0a0f12,#0d1216)}
        .data-room-copy{padding:38px;border-right:1px solid var(--line);background:linear-gradient(150deg,var(--venture-soft),transparent 54%)}.data-room-copy h2{font-size:39px;letter-spacing:-.05em;margin:13px 0 18px}.data-room-copy p{color:var(--muted);font-size:13px;line-height:1.75}
        .data-room-form{padding:38px}.data-room-form .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}.data-room-form label{display:grid;gap:8px;color:#c8d1d6;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px}.data-room-form input,.data-room-form select,.data-room-form textarea{width:100%;border:1px solid var(--line);border-radius:12px;background:#090d10;color:var(--ink);padding:13px 14px;outline:none;text-transform:none;letter-spacing:normal}.data-room-form input:focus,.data-room-form select:focus,.data-room-form textarea:focus{border-color:var(--venture-accent)}
        .data-room-form .consent{display:flex;grid-template-columns:auto 1fr;text-transform:none;letter-spacing:0;line-height:1.55;color:var(--muted);font-size:11px}.data-room-form .consent input{width:auto}.data-room-status{font-size:11px;color:var(--muted);margin-left:12px}.data-room-status.success{color:#8fffb7}.data-room-status.error{color:#ff9b9b}
        @media(max-width:980px){.capital-hero,.data-room-shell{grid-template-columns:1fr}.capital-context{align-self:auto}.capital-stage-grid{grid-template-columns:1fr}.capital-stage{min-height:0}.capital-benchmark{grid-template-columns:1fr}.data-room-copy{border-right:0;border-bottom:1px solid var(--line)}}
        @media(max-width:620px){.capital-hero{padding-top:52px}.capital-main{padding-top:48px}.data-room-form .form-row{grid-template-columns:1fr}.capital-notice{grid-template-columns:1fr}}
      `}</style>

      <section className="capital-hero" style={{ "--venture-accent": venture.accent, "--venture-soft": venture.accentSoft } as CSSProperties}>
        <div>
          <Link className="capital-back" href={`/portfolio/${slug}`}>← {profile.name} project file</Link>
          <p className="capital-kicker">Capital file / three-stage progression</p>
          <h1>{profile.name}</h1>
          <p className="capital-lede">A staged capital model showing what an institutional Seed, Expansion, and Series A path could unlock if the venture reaches the evidence required for each round.</p>
          <div className="capital-hero-actions">
            <a className="button" href="#data-room">Request data room</a>
            {venture.externalUrl && <a className="button button-ghost" href={venture.externalUrl} target="_blank" rel="noreferrer">Visit website ↗</a>}
          </div>
        </div>
        <aside className="capital-context">
          <span>Industry discipline</span>
          <strong>{profile.industry}</strong>
          <p>{isNonprofit ? "Nonprofit capital is shown as grant, philanthropic, operating-budget, or endowment progression rather than equity valuation." : "Valuation figures are founder planning estimates paired with the dilution assumptions in the underlying capital-roadmap specification."}</p>
        </aside>
      </section>

      <section className="capital-main" style={{ "--venture-accent": venture.accent, "--venture-soft": venture.accentSoft } as CSSProperties}>
        <div className="capital-notice">
          <strong>Planning model</strong>
          <p>This capital file is an illustrative founder planning document, not an offering memorandum, appraisal, financing commitment, or independently verified valuation. Competitor references and round figures are benchmark assumptions supplied for planning and should be re-validated during live diligence.</p>
        </div>

        <div className="capital-stage-grid">
          {profile.stages.map((stage, index) => (
            <article className="capital-stage" key={stage.label}>
              <span className="capital-stage-index">0{index + 1} / {stage.label}</span>
              <h2>{stage.label}</h2>
              <div className="capital-money">
                <div><span className="capital-label">Capital ask</span><strong>{stage.ask}</strong></div>
                <div><span className="capital-label">{isNonprofit ? "Capital / endowment context" : "Post-money valuation estimate"}</span><strong>{stage.valuation}</strong></div>
              </div>
              {stage.justification && <div className="capital-detail"><span className="capital-label">Benchmark justification</span><p>{stage.justification}</p></div>}
              <div className="capital-detail"><span className="capital-label">{index === 0 ? "Physical / technical asset" : index === 1 ? "Facility / infrastructure growth" : "Industry stature"}</span><p>{stage.asset}</p></div>
              <div className="capital-detail metric"><span className="capital-label">Target revenue / metric</span><p>{stage.metric}</p></div>
            </article>
          ))}
        </div>

        <div className="capital-benchmark">
          <div><span className="capital-label">Competitor funding benchmark</span><h3>Market-context assumption</h3></div>
          <p>{profile.benchmark}</p>
        </div>

        <div id="data-room" className="data-room-shell">
          <div className="data-room-copy">
            <span className="capital-label">Investor diligence</span>
            <h2>Request the data room.</h2>
            <p>Use this request to identify yourself and the venture you are evaluating. Submission does not automatically disclose confidential material or establish an investment relationship. Access can be reviewed manually before any private documents are shared.</p>
          </div>
          <DataRoomRequest venture={profile.name} />
        </div>
      </section>
    </>
  );
}
