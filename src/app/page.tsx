import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VisualizedLearning from "@/components/VisualizedLearning";
import StudioPlus from "@/components/StudioPlus";
import VstdyApp from "@/components/VstdyApp";
import ThinkingLab from "@/components/ThinkingLab";
import SevenAgents from "@/components/SevenAgents";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VStdy",
  url: "https://vstdy.com",
  logo: "https://vstdy.com/figma/logo-gradient.svg",
  email: "info@vstdy.com",
  telephone: "+1-321-888-7277",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2210 N Orange Blossom Trail, #348",
    addressLocality: "Orlando",
    addressRegion: "FL",
    postalCode: "32804",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/vstdystudio",
    "https://www.youtube.com/@VstdyStudio",
    "https://www.snapchat.com/@vstdyed",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <Header />
      <main>
        <Hero />
        <VisualizedLearning />
        <StudioPlus />
        <VstdyApp />
        <ThinkingLab />
        <SevenAgents />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
