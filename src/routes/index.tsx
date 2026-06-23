import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SweetHomes Realty | Your Trusted Guide To The Right Investment" },
      {
        name: "description",
        content:
          "SweetHomes Realty helps buyers, families, investors, and diaspora clients find, secure, and invest in properties with confidence, structure, and trust.",
      },
      { property: "og:title", content: "SweetHomes Realty | Your Trusted Guide To The Right Investment" },
      {
        property: "og:description",
        content:
          "SweetHomes Realty helps buyers, families, investors, and diaspora clients find, secure, and invest in properties with confidence, structure, and trust.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
