import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Rules and regulations of the Cybersecurity Club of Softwarica — covering membership, code of conduct, governance, disciplinary process, and dispute resolution.",
  openGraph: {
    title: "Terms of Service | Cybersecurity Club of Softwarica",
    description:
      "Rules and regulations governing membership, conduct, governance, and discipline within the Cybersecurity Club at Softwarica College.",
    url: "/terms-of-service",
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
