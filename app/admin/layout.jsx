import "../../admin/styles/tokens.css";

export const metadata = {
  title: "Admin Login | Ayushman Solutions",
  description: "Ayushman Solutions admin panel.",
  robots: "noindex, nofollow",
};

export default function AdminRootLayout({ children }) {
  return (
    <>
      {/* Same self-hosted Kanit/DM Sans files the public site uses (see
          public/assets/css/font10.css and fonts5.css) - reused as-is, no
          new font files. Next.js hoists <link> tags found anywhere in the
          tree into <head>, so this works without a literal <head> element
          here (this layout nests inside app/layout.jsx's admin <body>,
          which has no <head> of its own to write into directly). */}
      <link rel="stylesheet" href="/assets/css/fonts6.css" />
      <link rel="stylesheet" href="/assets/css/fonts5.css" />
      {children}
    </>
  );
}
