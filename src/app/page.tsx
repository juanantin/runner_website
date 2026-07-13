import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CreditsSection from "@/components/CreditsSection";
import TokenDashboard from "@/components/TokenDashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CreditsSection />
        <TokenDashboard />
      </main>
      <Footer />
    </>
  );
}
