'use client';

import AnimatedCanvas from "@/components/AnimatedCanvas";
import { BlogListing } from "@/components/BlogListing";
import { Brand } from "@/components/Brand";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { SupplyChainSection } from "@/components/SupplyChainSection";
import { SupplyChainWidgets } from "@/components/SupplyChainWidgets";

const Home = () => {
  return (
    <>
      <Header />
      <AnimatedCanvas />
      <SupplyChainSection />
      <Brand />
      <SupplyChainWidgets />
      <BlogListing />
      <Footer />
    </>
  );
};

export default Home;
