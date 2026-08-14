import type { ReactNode } from "react";

export default function CapitalFileLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`@media (min-width: 721px){.capital-file-scale{zoom:1.5;width:66.6667%;margin:0 auto}}`}</style>
      <div className="capital-file-scale">{children}</div>
    </>
  );
}
