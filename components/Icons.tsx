import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const Phone = (p: P) => (
  <svg {...base(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" /></svg>
);
export const Pin = (p: P) => (
  <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Clock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
);
export const Wifi = (p: P) => (
  <svg {...base(p)}><path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0" /><circle cx="12" cy="20" r="1" /></svg>
);
export const Car = (p: P) => (
  <svg {...base(p)}><path d="M5 17h14v-5l-2-5H7l-2 5v5Z" /><path d="M3 12h18" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /></svg>
);
export const Kids = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="5" r="2.5" /><path d="M12 8v7M8 11l4-2 4 2M9 21l3-6 3 6" /></svg>
);
export const Crown = (p: P) => (
  <svg {...base(p)}><path d="M3 7l4 4 5-6 5 6 4-4-2 11H5L3 7Z" /><path d="M5 21h14" /></svg>
);
export const Tree = (p: P) => (
  <svg {...base(p)}><path d="M12 22v-6M7 16h10l-3-4h2l-4-5-4 5h2l-3 4Z" /><path d="M12 7V2" /></svg>
);
export const Truck = (p: P) => (
  <svg {...base(p)}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
);
export const Leaf = (p: P) => (
  <svg {...base(p)}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" /><path d="M2 21c0-3 1.9-5.4 5.1-6" /></svg>
);
export const Flame = (p: P) => (
  <svg {...base(p)}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1-2.1-.2-4.1 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.6 1.2 2.8 2.5 2.8Z" /></svg>
);
export const Chef = (p: P) => (
  <svg {...base(p)}><path d="M6 13.9A4 4 0 0 1 7.3 6a5 5 0 0 1 9.4 0A4 4 0 0 1 18 13.9V21H6v-7.1Z" /><path d="M6 17h12" /></svg>
);
export const Shield = (p: P) => (
  <svg {...base(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Rings = (p: P) => (
  <svg {...base(p)}><circle cx="9" cy="14" r="6" /><circle cx="15" cy="14" r="6" /><path d="m10 4 2-2 2 2" /></svg>
);
export const Cake = (p: P) => (
  <svg {...base(p)}><path d="M4 21V12h16v9M2 21h20M7 12V9M12 12V9M17 12V9" /><path d="M7 6v.01M12 6v.01M17 6v.01" /></svg>
);
export const Briefcase = (p: P) => (
  <svg {...base(p)}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" /></svg>
);
export const Users = (p: P) => (
  <svg {...base(p)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg>
);
export const Check = (p: P) => (
  <svg {...base(p)}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Arrow = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Up = (p: P) => (
  <svg {...base(p)}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const Close = (p: P) => (
  <svg {...base(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>
);
export const Star = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" /></svg>
);
export const Quote = (p: P) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M9.6 6C6 7.5 4 10.4 4 14.3V18h6v-6H7.3c.2-2 1.3-3.4 3.2-4.3L9.6 6Zm9 0C15 7.5 13 10.4 13 14.3V18h6v-6h-2.7c.2-2 1.3-3.4 3.2-4.3L18.6 6Z" /></svg>
);
export const Instagram = (p: P) => (
  <svg {...base(p)}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
);
export const Telegram = (p: P) => (
  <svg {...base(p)}><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></svg>
);
export const Facebook = (p: P) => (
  <svg {...base(p)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h10" /></svg>
);

/** O'zbek naqshi — 8 qirrali yulduz (girih) */
export const Ornament = (p: P) => (
  <svg viewBox="0 0 100 100" aria-hidden {...p}>
    <g fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="22" y="22" width="56" height="56" />
      <rect x="22" y="22" width="56" height="56" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="12" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </g>
  </svg>
);

export const Divider = ({ className = "" }: { className?: string }) => (
  <div className={`divider ${className}`} aria-hidden>
    <span />
    <Ornament width={22} height={22} />
    <span />
  </div>
);
