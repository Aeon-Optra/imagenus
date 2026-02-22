import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Imagenus | South Africa's AI-Enhanced Video Production House",
  description:
    "Award-winning cinematography meets cutting-edge AI innovation. Premium video content for Barbie, Woolworths, Amazon. 20+ years experience in Cape Town.",
  keywords:
    "video production, cinematography, AI video, Cape Town, South Africa, Luke Tannous, brand films, commercial production",
  authors: [{ name: "Imagenus" }],
  openGraph: {
    title: "Imagenus | South Africa's AI-Enhanced Video Production House",
    description:
      "Where award-winning cinematography meets cutting-edge AI innovation. Creating premium video content that captivates and performs.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
