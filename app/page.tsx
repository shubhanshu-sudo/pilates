"use client";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

      {/* Design Showcase - Architectural Sanctuary */}
      <section className="py-[120px] bg-[#F6F2EC]">
        <div className="container">
          <div className="text-center mb-28 fade-in-reveal">
            <h2 className="text-5xl md:text-6xl text-[#2F2F2F] font-serif mb-6">An Architectural Sanctuary</h2>
            <div className="w-12 h-[2px] bg-[#A89F92] mx-auto opacity-30"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-20 max-w-[1200px] mx-auto">
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
        </div>
      </section>

      {/* Classes - Primary Layer */}
      <section className="section bg-primary-white">
        <div className="container">
          <div className="fade-in-reveal text-center mb-24">
            <h2 className="text-4xl md:text-5xl mb-6">Refined Practice</h2>
            <p className="text-taupe uppercase tracking-[0.3em] text-xs font-semibold">Elevate Your Movement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="fade-in-reveal group text-center">
              <div className="aspect-[4/5] mb-10 overflow-hidden rounded-img bg-extra-light">
                <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800" alt="Boutique Reformer Machine" className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <h3 className="text-2xl mb-4">Reformer</h3>
              <p className="text-sm text-brown-grey mb-8 px-4 leading-relaxed line-clamp-2">Controlled resistance for deep stability and elongated strength.</p>
              <a href="/classes#reformer" className="text-[10px] uppercase tracking-[0.25em] text-taupe font-bold border-b border-taupe/30 pb-2 hover:border-taupe transition-colors">DISCOVER</a>
            </div>

            <div className="fade-in-reveal group text-center" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-[4/5] mb-10 overflow-hidden rounded-img bg-extra-light">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" alt="Mat Pilates Practice" className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <h3 className="text-2xl mb-4">Mat</h3>
              <p className="text-sm text-brown-grey mb-8 px-4 leading-relaxed line-clamp-2">Core-centric movement focusing on breath and precision flow.</p>
              <a href="/classes#mat" className="text-[10px] uppercase tracking-[0.25em] text-taupe font-bold border-b border-taupe/30 pb-2 hover:border-taupe transition-colors">DISCOVER</a>
            </div>

            <div className="fade-in-reveal group text-center" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-[4/5] mb-10 overflow-hidden rounded-img bg-extra-light">
                <img
                  src="/pilates-class-at-hi-pilates-artarmon-australia_1600x.webp"
                  alt="Private Pilates Session"
                  className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105 shadow-sm"
                />
              </div>
              <h3 className="text-2xl mb-4">Private</h3>
              <p className="text-sm text-brown-grey mb-8 px-4 leading-relaxed line-clamp-2">Tailored sessions designed for your specific anatomical needs.</p>
              <a href="/classes#private" className="text-[10px] uppercase tracking-[0.25em] text-taupe font-bold border-b border-taupe/30 pb-2 hover:border-taupe transition-colors">DISCOVER</a>
            </div>
          </div>
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

      {/* Testimonials - Multi-Voice Editorial */}
      <section className="section bg-alt-beige">
        <div className="container">
          <div className="fade-in-reveal text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 serif text-dark-charcoal">Client Experiences</h2>
            <div className="w-12 h-px bg-taupe mx-auto opacity-30"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="fade-in-reveal premium-card text-center">
              <div className="mb-8">
                <span className="text-4xl serif italic text-taupe/20">"</span>
              </div>
              <p className="text-lg italic serif mb-8 text-dark-charcoal leading-relaxed">
                Stepping into The Palms feels like a meditative exhale. The space itself inspires a different kind of movement—precise, intentional, and grounded.
              </p>
              <div className="w-8 h-px bg-taupe/20 mx-auto mb-6"></div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-taupe font-bold">Elena V.</h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-brown-grey mt-2 opacity-60">Studio Member</p>
            </div>

            {/* Testimonial 2 */}
            <div className="fade-in-reveal premium-card text-center" style={{ animationDelay: '0.2s' }}>
              <div className="mb-8">
                <span className="text-4xl serif italic text-taupe/20">"</span>
              </div>
              <p className="text-lg italic serif mb-8 text-dark-charcoal leading-relaxed">
                The attention to form and the architectural beauty of the studio create an environment where I can truly focus on my practice. It's transformative.
              </p>
              <div className="w-8 h-px bg-taupe/20 mx-auto mb-6"></div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-taupe font-bold">Marcus T.</h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-brown-grey mt-2 opacity-60">Private Client</p>
            </div>

            {/* Testimonial 3 */}
            <div className="fade-in-reveal premium-card text-center" style={{ animationDelay: '0.4s' }}>
              <div className="mb-8">
                <span className="text-4xl serif italic text-taupe/20">"</span>
              </div>
              <p className="text-lg italic serif mb-8 text-dark-charcoal leading-relaxed">
                Every session feels like a reset. The instructors are exceptional, and the space is unlike any other studio I've experienced—calm, refined, intentional.
              </p>
              <div className="w-8 h-px bg-taupe/20 mx-auto mb-6"></div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-taupe font-bold">Sophia L.</h4>
              <p className="text-[9px] uppercase tracking-[0.3em] text-brown-grey mt-2 opacity-60">Reformer Regular</p>
            </div>
          </div>
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
