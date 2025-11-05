'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Technology from '@/components/Technology';
import CTA from '@/components/CTA';
import BrandReveal from '@/components/BrandReveal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="hero-problem-group">
          <Hero />
          <Problem />
        </div>
        <BrandReveal />
        <Solution />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
