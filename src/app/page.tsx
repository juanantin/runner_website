import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrailerSection from "@/components/TrailerSection";
import CreditsSection from "@/components/CreditsSection";
import TokenDashboard from "@/components/TokenDashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrailerSection />
        <CreditsSection />
        <TokenDashboard />
      </main>
      <Footer />
    </>
  );
}
