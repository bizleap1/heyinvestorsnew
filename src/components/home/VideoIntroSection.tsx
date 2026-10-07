import React from 'react';
import { Users, ShieldCheck, UserCheck } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import ScrollTextReveal from '@/components/ui/ScrollTextReveal';

export default function VideoIntroSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-12 pt-16 lg:pt-24 lg:pb-12 overflow-hidden relative">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Video & Decorations */}
          <FadeIn direction="right" className="w-full">
            <div className="relative w-full aspect-video rounded-[24px] z-10">
              {/* Decorative Background Shape */}
              <div className="absolute -top-6 -left-6 w-2/3 h-full bg-[#139D46] rounded-tl-[40px] rounded-br-[40px] -z-10 hidden sm:block"></div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-full bg-[#E7E3DA] rounded-tl-[40px] rounded-br-[40px] -z-10 hidden sm:block"></div>
              
              {/* Dot Pattern Decoration */}
              <div className="absolute -top-8 right-8 w-24 h-24 hidden lg:block opacity-50" style={{ backgroundImage: 'radial-gradient(#139D46 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>

              {/* Video Container */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden border-8 border-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <video 
                  src="/newVideo.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-[#139D46] text-white p-4 sm:px-6 sm:py-4 rounded-[12px] shadow-[0_8px_24px_rgba(19,157,70,0.3)] flex items-center gap-3 sm:gap-4 z-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[13px] sm:text-[15px] leading-tight">Trusted by 1000+</span>
                  <span className="text-[11px] sm:text-[12px] text-white/80 font-medium">Happy Clients</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn direction="left" delay={0.2} className="w-full">
            <div className="flex flex-col pt-8 lg:pt-0">
              <div className="mb-4">
                <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
                  WHY CHOOSE US
                </span>
              </div>
              
              <h2 className="font-display text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.1] text-[#111714] mb-6">
                The Right Place <br />
                for Your Next Move
              </h2>

              <div className="space-y-4 text-[14px] sm:text-[15px] text-[#56605A] font-sans leading-relaxed mb-10">
                <ScrollTextReveal text="Finding the perfect property can be challenging, but we're here to make it simple, smooth, and rewarding." />
                <ScrollTextReveal text="At Hey Investor Pvt. Ltd., our expert team understands your unique needs and connects you with the best opportunities in the market. From residential plots to commercial spaces, we offer premium properties in prime locations like Wardha Road, Hingna, and Amravati Road." />
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#E7E3DA] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#139D46]/10 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-[#139D46]" />
                  </div>
                  <h3 className="font-display font-semibold text-[18px] text-[#111714] mb-2">Expert Guidance</h3>
                  <p className="text-[13px] text-[#56605A] leading-relaxed">
                    Knowledgeable agents with in-depth market insights to help you make the best decisions.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#E7E3DA] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#139D46]/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#139D46]" />
                  </div>
                  <h3 className="font-display font-semibold text-[18px] text-[#111714] mb-2">Commitment to Excellence</h3>
                  <p className="text-[13px] text-[#56605A] leading-relaxed">
                    Ethics, transparency, and quality service are at the heart of everything we do.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
