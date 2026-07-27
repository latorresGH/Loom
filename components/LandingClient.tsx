'use client';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import ManifestoSection from '@/components/ManifestoSection';
import FullBleedSection from '@/components/FullBleedSection';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import SplitEditorialSection from '@/components/SplitEditorialSection';
import MarqueeSection from '@/components/MarqueeSection';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function LandingClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  const openModal = () => {
    setSent(false);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const handleSuccess = () => setSent(true);

  return (
    <>
      <Loader />
      <Nav onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <ManifestoSection />
      <FullBleedSection />
      <ServicesSection />
      <HowWeWorkSection />
      <SplitEditorialSection />
      <MarqueeSection />
      <Footer onOpenModal={openModal} />
      <ContactModal isOpen={modalOpen} sent={sent} onClose={closeModal} onSuccess={handleSuccess} />
    </>
  );
}
