"use client";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArchSlider from './components/ArchSlider';
import ClassesSlider from './components/ClassesSlider';
import TestimonialsSlider from './components/TestimonialsSlider';

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section - Responsive Premium Video */}
      <section className="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1920"
          className="hero-video"
          onCanPlay={(e) => (e.currentTarget.playbackRate = 0.8)}
        >
          <source src="https://cdn.builder.io/o/assets%2F7ae91e2100c441348821b5902d6e5194%2Fd65db46793704c8ba1817f0258b9af23?alt=media&token=2eec015d-9f50-4ed4-87ab-249b27e5d1b7&apiKey=7ae91e2100c441348821b5902d6e5194" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Move With Intention</h1>
            <p className="hero-subtitle">Refined Pilates in a boutique architectural sanctuary designed for the modern practitioner.</p>
            <a href="/book" className="btn hero-btn">BOOK A SESSION</a>
          </div>
        </div>
      </section>

      {/* About Section - Architectural Layer */}
      <section className="section bg-primary-white">
        <div className="container">
          <div className="premium-card grid md:grid-cols-2 gap-20 items-center">
            <div className="fade-in-reveal relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200"
                alt="Architectural Studio Space"
                className="rounded-img w-full h-full object-cover"
              />
            </div>
            <div className="fade-in-reveal">
              <h2 className="text-4xl md:text-5xl mb-10 leading-tight">The Pulse of Wellness</h2>
              <p className="mb-8 text-brown-grey max-w-body">
                THE PILATES PALMS – PULSE is an architectural breathing space designed to elevate your movement practice through refined methodology.
              </p>
              <p className="mb-12 text-brown-grey max-w-body">
                We focus on the intersection of form, flow, and focus, providing an environment that honors the body’s natural intelligence.
              </p>
              <a href="/about" className="btn btn-outline">READ OUR STORY</a>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Sanctuary - Responsive Grid + Mobile Slider */}
      <section className="py-16 md:py-20 lg:py-28 bg-[#F6F2EC]">
        <div className="container">
          <div className="text-center mb-20 md:mb-24 lg:mb-28 fade-in-reveal">
            <h2 className="text-5xl md:text-6xl text-[#2F2F2F] font-serif mb-6">An Architectural Sanctuary</h2>
            <div className="w-12 h-[2px] bg-[#A89F92] mx-auto opacity-30"></div>
          </div>

          {/* Desktop: 3-col grid | Tablet: 2-col grid | Mobile: Horizontal slider */}
          <div className="
            hidden md:grid md:grid-cols-2 lg:grid-cols-3 
            gap-10 lg:gap-12 
            max-w-6xl mx-auto px-8
          ">
            {/* Card 1 - Soft Curves */}
            <div className="arch-card fade-in-reveal">
              <div className="aspect-[4/5] rounded-img bg-[#F9F6F1] shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden relative group">
                <img
                  src="/wPz2O4vjnmdroCw-NjvUJoV3d65vfJ5YIMeMoOHJ6V-l76tYn2APl9vVW3_ZfYVayTZUkgElpbolBu3lOxl17z0AZDPhys1AMb24dvtay9U.jpg"
                  alt="Minimalist studio architecture"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] contrast-[0.95]"
                />
              </div>
              <h3 className="arch-card-title">Soft Curves</h3>
              <p className="arch-card-desc text-[#6E665E]">
                The gentle flow of form designed to support intentional movement.
              </p>
            </div>

            {/* Card 2 - Natural Textures */}
            <div className="arch-card fade-in-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-[4/5] rounded-img bg-[#F9F6F1] shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden relative group">
                <img
                  src="/_evg6wvn4p-ELEc4NooioDxaJxaa7aW7LaWE5FVeeYHP6qAzkuS0Uyglvy2ZdfswYlowA5DRWrXapqLvy_hsQnDb64jtLG58Av9pX5U4EK8.jpg"
                  alt="Natural wood and stone textures"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] contrast-[0.95]"
                />
              </div>
              <h3 className="arch-card-title">Natural Textures</h3>
              <p className="arch-card-desc text-[#6E665E]">
                Earth, stone, and wood in harmony with the body and space.
              </p>
            </div>

            {/* Card 3 - Grounded Light */}
            <div className="arch-card fade-in-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-[4/5] rounded-img bg-[#F9F6F1] shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden relative group">
                <img
                  src="/sNGB4GptOInR8i65sV-yUKpUNZBnWOu0XJBw1j67MzmHO9PP7UY7BHneyGxJjE2VMwKQxuJhEF-zZYuH8uq6z8pzguzA8liszhqZ1krqGLA.jpg"
                  alt="Grounded studio lighting"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] contrast-[0.95]"
                />
              </div>
              <h3 className="arch-card-title">Grounded Light</h3>
              <p className="arch-card-desc text-[#6E665E]">
                Soft daylight shaping a calm, focused atmosphere for every breath.
              </p>
            </div>
          </div>

          <ArchSlider />
        </div>
      </section>

      {/* Classes - Refined Practice */}
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="container">
          <div className="fade-in-reveal text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-[#2F2F2F] mb-6">Refined Practice</h2>
            <p className="text-[#A89F92] uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold">Elevate Your Movement</p>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-12 lg:gap-16 max-w-[1200px] mx-auto">
            {/* Card 1 - Reformer */}
            <div className="fade-in-reveal group text-center">
              <div className="aspect-[4/5] mb-10 overflow-hidden rounded-2xl bg-[#F9F6F1] shadow-sm relative">
                <img
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800"
                  alt="Boutique Reformer Machine"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8]"
                />
              </div>
              <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">Reformer</h3>
              <div className="flex items-start justify-center gap-4 px-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-[10px] font-bold">N</span>
                </div>
                <p className="text-sm text-[#6E665E] leading-relaxed">Controlled resistance for deep stability and elongated strength.</p>
              </div>
              <div className="mt-8">
                <a href="/classes#reformer" className="text-[10px] uppercase tracking-[0.25em] text-[#A89F92] font-bold border-b border-[#A89F92]/30 pb-2 hover:border-[#A89F92] transition-colors">DISCOVER</a>
              </div>
            </div>

            {/* Card 2 - Mat */}
            <div className="fade-in-reveal group text-center" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-[4/5] mb-10 overflow-hidden rounded-2xl bg-[#F9F6F1] shadow-sm relative">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                  alt="Mat Pilates Practice"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8]"
                />
              </div>
              <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">Mat</h3>
              <div className="flex items-start justify-center gap-4 px-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-[10px] font-bold">N</span>
                </div>
                <p className="text-sm text-[#6E665E] leading-relaxed">Core-centric movement focusing on breath and precision flow.</p>
              </div>
              <div className="mt-8">
                <a href="/classes#mat" className="text-[10px] uppercase tracking-[0.25em] text-[#A89F92] font-bold border-b border-[#A89F92]/30 pb-2 hover:border-[#A89F92] transition-colors">DISCOVER</a>
              </div>
            </div>

            {/* Card 3 - Private */}
            <div className="fade-in-reveal group text-center" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-[4/5] mb-10 overflow-hidden rounded-2xl bg-[#F9F6F1] shadow-sm relative">
                <img
                  src="/pilates-class-at-hi-pilates-artarmon-australia_1600x.webp"
                  alt="Private Pilates Session"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8]"
                />
              </div>
              <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">Private</h3>
              <div className="flex items-start justify-center gap-4 px-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-[10px] font-bold">N</span>
                </div>
                <p className="text-sm text-[#6E665E] leading-relaxed">Tailored sessions designed for your specific anatomical needs.</p>
              </div>
              <div className="mt-8">
                <a href="/classes#private" className="text-[10px] uppercase tracking-[0.25em] text-[#A89F92] font-bold border-b border-[#A89F92]/30 pb-2 hover:border-[#A89F92] transition-colors">DISCOVER</a>
              </div>
            </div>
          </div>

          <ClassesSlider />
        </div>
      </section>

      {/* Philosophy - Split Architectural Dialogue */}
      <section className="philosophy-split">
        <div className="philosophy-content">
          <div className="fade-in-reveal">
            <h2 className="text-3xl uppercase tracking-[0.4em] mb-12 opacity-40 font-sans font-bold">The Philosophy</h2>
            <div className="text-4xl md:text-5xl leading-tight serif mb-10">
              "Movement is an architectural dialogue between the body and space."
            </div>
            <p className="text-lg opacity-80 max-w-lg mb-12 serif italic">
              We believe in every breath as the structure of your strength, and every pulse as a foundation for longevity.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-12 h-px bg-primary-white/30"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-60">Grounded • Elevated • Intentional</span>
            </div>
          </div>
        </div>
        <div className="fade-in-reveal overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
            alt="Studio Architectural Detail"
            className="philosophy-image hover:scale-105 transition-transform duration-[3000ms]"
          />
        </div>
      </section>

      {/* Testimonials - Client Experiences */}
      <section className="py-24 md:py-32 bg-[#F6F2EC]">
        <div className="container">
          <div className="fade-in-reveal text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-[#2F2F2F] mb-8">Client Experiences</h2>
            <div className="w-16 h-px bg-[#A89F92] mx-auto opacity-40"></div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="fade-in-reveal premium-card text-center hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-10">
                <span className="text-6xl font-serif italic text-[#A89F92]/20">"</span>
              </div>
              <p className="text-xl italic font-serif text-[#2F2F2F] leading-[1.8] mb-12 min-h-[160px]">
                Stepping into The Palms feels like a meditative exhale. The space itself inspires a different kind of movement—precise, intentional, and grounded.
              </p>
              <div className="w-10 h-px bg-[#A89F92]/30 mx-auto mb-8"></div>
              <h4 className="text-[11px] uppercase tracking-[0.5em] text-[#A89F92] font-semibold">Elena V.</h4>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6E665E] mt-3 opacity-60">Studio Member</p>
            </div>

            {/* Testimonial 2 */}
            <div className="fade-in-reveal premium-card text-center hover:-translate-y-2 transition-transform duration-500" style={{ animationDelay: '0.2s' }}>
              <div className="mb-10">
                <span className="text-6xl font-serif italic text-[#A89F92]/20">"</span>
              </div>
              <p className="text-xl italic font-serif text-[#2F2F2F] leading-[1.8] mb-12 min-h-[160px]">
                The attention to form and the architectural beauty of the studio create an environment where I can truly focus on my practice. It's transformative.
              </p>
              <div className="w-10 h-px bg-[#A89F92]/30 mx-auto mb-8"></div>
              <h4 className="text-[11px] uppercase tracking-[0.5em] text-[#A89F92] font-semibold">Marcus T.</h4>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6E665E] mt-3 opacity-60">Private Client</p>
            </div>

            {/* Testimonial 3 */}
            <div className="fade-in-reveal premium-card text-center hover:-translate-y-2 transition-transform duration-500" style={{ animationDelay: '0.4s' }}>
              <div className="mb-10">
                <span className="text-6xl font-serif italic text-[#A89F92]/20">"</span>
              </div>
              <p className="text-xl italic font-serif text-[#2F2F2F] leading-[1.8] mb-12 min-h-[160px]">
                Every session feels like a reset. The instructors are exceptional, and the space is unlike any other studio I've experienced—calm, refined, intentional.
              </p>
              <div className="w-10 h-px bg-[#A89F92]/30 mx-auto mb-8"></div>
              <h4 className="text-[11px] uppercase tracking-[0.5em] text-[#A89F92] font-semibold">Sophia L.</h4>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#6E665E] mt-3 opacity-60">Reformer Regular</p>
            </div>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* Final CTA - Visual Splendor Section */}
      <section className="final-cta-visual">
        <img
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=2000"
          alt="Boutique Studio Environment"
          className="final-cta-bg"
        />
        <div className="container">
          <div className="final-cta-card fade-in-reveal">
            <h2 className="text-4xl md:text-6xl mb-6 serif text-dark-charcoal leading-tight">Begin Your Practice</h2>
            <p className="mb-10 text-brown-grey text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Join our boutique wellness community and discover the transformative power of architectural, intentional Pilates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href="/book" className="btn cta-btn-dark w-full sm:w-auto">BOOK A SESSION</a>
              <a href="/classes" className="btn btn-outline nav-btn w-full sm:w-auto">VIEW CLASSES</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
