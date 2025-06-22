"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl md:text-5xl font-extrabold leading-tight md:leading-[1.1] 
           bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 bg-clip-text text-transparent">
            Your AI Assistant for 
            <br />
            <span className="block text-5xl md:text-7xl">
              Professional Success
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Navigate your job search confidently with expert support,
            smart interview prep, and powerful AI tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Link href="/onboarding">
              <Button size="lg" className="px-8 text-lg font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={imageRef}>
            <Image
              src="/banner.jpeg"
              width={1600}
              height={900}
              alt="Banner Sensai"
              className="rounded-2xl shadow-2xl border mx-auto object-cover max-w-4xl md:max-w-6xl"
              priority
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;