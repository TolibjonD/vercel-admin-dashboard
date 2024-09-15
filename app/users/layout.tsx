import { inter } from "../ui/fonts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saidkodirov Tolibjon",
  description:
    "The official Next.js Course Dashboard, built with App Router. Saidkodirov Tolibjon",
  authors: [{ name: "Saidkodirov Tolibjon", url: "https://t.me/Saidkodirov" }],
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
