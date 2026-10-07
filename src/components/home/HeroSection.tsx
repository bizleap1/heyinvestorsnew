'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Landmark, 
  Users, 
  ArrowRight,
  Calendar,
  MapPin,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/company-data';
import TextReveal from '@/components/ui/TextReveal';

const heroImages = [
  '/hero_slider/slider1-v2.jpg',
  '/hero_slider/slider2-v2.jpg',
  '/hero_slider/slider3.jpg',
  '/hero_slider/slider4.jpg',
  '/hero_slider/slider5.jpg'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I would like a free consultation. My name is ${formData.name} and my phone number is ${formData.phone}.`;
    const waUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen lg:h-[100svh] bg-[#FAF9F6] pt-[74px] flex flex-col lg:flex-row overflow-hidden">
      
      {/* Left Content Column */}
      <div className="w-full lg:w-[45%] xl:w-[45%] order-2 lg:order-1 flex flex-col justify-center px-6 lg:pl-8 xl:pl-12 lg:pr-10 py-12 lg:py-0 z-10">
        <div className="max-w-[700px] w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#139D46]"></div>
            <span className="text-[#111714] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
              NAGPUR & VIDARBHA'S TRUSTED PLOT SPECIALIST
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[42px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[68px] leading-[0.98] mb-4">
            <span className="shine-text-black block font-medium">Lands You Can Trust.</span>
            <span className="shine-text-green block font-medium">Growth You Can See.</span>
          </h1>

          {/* Supporting Text */}
          <TextReveal 
            text="NMRDA and RL-approved residential and commercial plots in Nagpur's fastest growing corridors — Wardha Road, Hingna and Amravati Road."
            className="font-sans text-[15px] md:text-[16px] xl:text-[18px] text-[#56605A] leading-relaxed max-w-[600px] mb-6"
            delay={0.2}
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Link 
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#139D46] text-white px-8 h-[56px] rounded-[10px] font-sans font-semibold text-[16px] hover:bg-[#10853B] transition-colors shimmer-btn"
            >
              View Properties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-y-6 md:gap-y-0 text-[#111714] mb-8">
            <div className="flex items-center gap-3 w-1/2 md:w-auto md:pr-6 md:border-r border-[#E7E3DA]">
              <CheckCircle2 className="w-5 h-5 text-[#139D46] shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[13px] xl:text-[14px] leading-tight text-[#56605A]"><span className="font-semibold text-[#111714]">NMRDA</span><br/>Approved</span>
            </div>
            <div className="flex items-center gap-3 w-1/2 md:w-auto md:px-6 md:border-r border-[#E7E3DA]">
              <ShieldCheck className="w-5 h-5 text-[#139D46] shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[13px] xl:text-[14px] leading-tight text-[#56605A]"><span className="font-semibold text-[#111714]">RL</span><br/>Approved</span>
            </div>
            <div className="flex items-center gap-3 w-1/2 md:w-auto md:px-6 md:border-r border-[#E7E3DA]">
              <Landmark className="w-5 h-5 text-[#139D46] shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[13px] xl:text-[14px] leading-tight text-[#56605A]"><span className="font-semibold text-[#111714]">90%</span><br/>Loan Available</span>
            </div>
            <div className="flex items-center gap-3 w-1/2 md:w-auto md:pl-6">
              <Users className="w-5 h-5 text-[#139D46] shrink-0" strokeWidth={1.5} />
              <span className="font-sans text-[13px] xl:text-[14px] leading-tight text-[#56605A]"><span className="font-semibold text-[#111714]">1000+</span><br/>Happy Clients</span>
            </div>
          </div>



        </div>
      </div>

      {/* Right Image Column (Diagonal Cut on Desktop) */}
      <div 
        className="w-full lg:w-[55%] order-1 lg:order-2 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:h-full relative min-h-[400px] sm:min-h-[500px] lg:min-h-0 bg-[#1F1F1F] lg:[clip-path:polygon(7%_0,100%_0,100%_100%,0_100%)]"
      >
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Nagpur Aerial Plotted Development ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover ${
              src.includes('slider1') || src.includes('slider2') || src.includes('slider4') || src.includes('slider5') ? 'object-[85%_center] sm:object-right' : 'object-center'
            } transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          />
        ))}

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 lg:left-[calc(50%+3.5%)] -translate-x-1/2 flex items-center gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentImageIndex 
                  ? 'w-8 bg-[#139D46]' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>





      </div>

    </section>
  );
}
