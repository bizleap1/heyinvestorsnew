'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, MapPin, CheckCircle2, Landmark } from '@/components/ui/icons';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import { COMPANY_INFO, TEAM_MEMBERS } from '@/lib/company-data';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function AboutClient() {
  return (
    <div className="bg-white text-[#111714] min-h-screen selection:bg-[#139D46] selection:text-white font-sans overflow-hidden">
      
      {/* HERO SECTION: WHY CHOOSE HEY INVESTORS */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#139D46]/30 bg-[#139D46]/5 text-[#139D46] text-sm font-medium tracking-wide mb-8">
              ABOUT US
            </div>
            <h1 className="font-display text-[48px] md:text-[72px] leading-[1.1] text-[#111714] mb-8 tracking-tight">
              Why Choose <br className="md:hidden" />
              <span className="text-[#139D46]">Hey Investors?</span>
            </h1>
            <p className="text-[18px] md:text-[22px] text-[#56605A] font-light leading-relaxed max-w-3xl mx-auto">
              We take the guesswork out of land acquisition. Every layout we represent undergoes exhaustive due diligence, ensuring 100% clear titles, seamless bank financing, and strategic locations in Vidarbha's fastest-growing corridors. We act as your dedicated partner in building generational wealth securely.
            </p>
          </motion.div>
        </div>
        
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#139D46]/[0.03] blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#139D46]/[0.02] blur-[120px]" />
        </div>
      </section>


      {/* LEADERSHIP TEAM */}
      <section className="pt-8 pb-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
             <span className="text-[#139D46] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our People</span>
             <h2 className="font-display text-[40px] md:text-[56px] leading-tight">
               Guided by veterans.
             </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div key={member.name} variants={fadeInUp} className="bg-white rounded-[32px] p-8 border border-[#E7E3DA] hover:border-[#139D46]/50 transition-all duration-500 group shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2">
                <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden mb-8 border border-[#E7E3DA] bg-[#FAF9F6]">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <span className="text-[#139D46] text-[10px] font-bold uppercase tracking-[0.2em] bg-[#139D46]/10 px-4 py-2 rounded-full mb-4 inline-block">
                    {member.role}
                  </span>
                  <h3 className="font-display text-[28px] mb-3 text-[#111714]">{member.name}</h3>
                  <p className="text-[#56605A] leading-relaxed font-light text-[15px]">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <HowItWorksSection />

      {/* 3. IMPACT NUMBERS (DARK SECTION) */}
      <section className="py-16 relative overflow-hidden bg-[#111714] text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111714] via-transparent to-[#139D46]/10" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x divide-white/10"
          >
            {[
              { value: "15", suffix: "+", label: "Years Experience" },
              { value: "200", suffix: "+", label: "Investors Advised" },
              { value: "100", suffix: "%", label: "NMRDA Sanctioned" },
              { value: "90", suffix: "%", label: "Bank Loan Facility" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center relative">
                <div className="font-display text-[56px] lg:text-[80px] leading-none mb-4 tracking-tighter">
                  {stat.value}<span className="text-[#139D46]">{stat.suffix}</span>
                </div>
                <div className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 5. CONTACT / OFFICE */}
      <section className="py-16 border-t border-[#E7E3DA] bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] bg-[#139D46]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-[#111714] text-white rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl">
            <div className="p-10 md:p-16 lg:w-1/2 space-y-8">
              <h2 className="font-display text-[40px] md:text-[56px] leading-tight">
                Ready to secure <br/><span className="text-[#139D46]">your legacy?</span>
              </h2>
              <p className="text-white/60 leading-relaxed font-light text-[18px]">
                Our advisory offices are situated near Law College Square on West High Court (WHC) Road. Schedule a private consultation to review title dossiers, layout maps, and bank documentation.
              </p>
              
              <div className="pt-4 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#139D46]" />
                  </div>
                  <p className="text-white/90 font-light mt-2">{COMPANY_INFO.address.full}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#139D46]/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2.5 h-2.5 bg-[#139D46] rounded-full animate-pulse"></span>
                  </div>
                  <p className="text-white/90 font-light">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              
              <div className="pt-8">
                <Link href="/contact" className="group inline-flex items-center gap-3 bg-[#139D46] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#10853B] transition-colors">
                  Schedule Office Visit
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[700px] relative">
               <Image src="/hero-plotted.jpg" alt="Our Office" fill className="object-cover" />
               <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#111714] via-[#111714]/10 to-transparent w-full lg:w-1/3 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
