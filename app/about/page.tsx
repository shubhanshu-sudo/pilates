import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <main>
            <Navbar />

            {/* Page Header - Architectural Entry */}
            <section className="pt-40 pb-24 bg-primary-white">
                <div className="container text-center">
                    <div className="fade-in-reveal max-w-2xl mx-auto">
                        <h1 className="text-5xl md:text-7xl mb-8 text-dark-charcoal font-serif">Our Story</h1>
                        <div className="w-12 h-px bg-taupe mx-auto mb-10"></div>
                        <p className="text-taupe uppercase tracking-[0.4em] text-[11px] font-semibold">Where architectural design meets intentional movement.</p>
                    </div>
                </div>
            </section>

            {/* Origin Section - The Vision */}
            <section className="section bg-alt-beige">
                <div className="container">
                    <div className="premium-card grid md:grid-cols-2 gap-20 items-center">
                        <div className="fade-in-reveal">
                            <h2 className="text-4xl mb-10 leading-tight">The Vision</h2>
                            <p className="mb-8 text-brown-grey leading-relaxed">
                                Founded on the belief that the environment we move in profoundly shapes our internal state, THE PILATES PALMS – PULSE was conceived as a boutique sanctuary for the modern practitioner.
                            </p>
                            <p className="mb-8 text-brown-grey leading-relaxed">
                                We stripped away the clinical atmosphere of traditional studios, replacing it with soft architectural curves, natural textures, and a flood of natural light. The result is a space that feels like a quiet exhale—an invitation to slow down and move with precision.
                            </p>
                            <p className="text-brown-grey leading-relaxed italic">
                                Every detail, from the matte surfaces to the intentional spacing between reformers, has been curated to foster a sense of calm and focused strength.
                            </p>
                        </div>
                        <div className="fade-in-reveal h-[600px] rounded-img overflow-hidden shadow-sm">
                            <img
                                src="/03-scaled.webp"
                                alt="Boutique Studio Architecture"
                                className="w-full h-full object-cover saturate-[0.9] contrast-[0.95]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosphy Pillars - Contrast Layer */}
            <section className="section bg-primary-white">
                <div className="container">
                    <div className="fade-in-reveal text-center mb-24">
                        <h2 className="text-4xl md:text-5xl mb-6">Our Pillars</h2>
                        <div className="w-12 h-px bg-taupe mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">
                        <div className="fade-in-reveal group text-center">
                            <span className="text-5xl serif italic mb-8 block text-taupe/40 transition-colors group-hover:text-taupe">01</span>
                            <h3 className="text-xl mb-6 uppercase tracking-[0.25em] font-sans font-bold text-dark-charcoal">Precision</h3>
                            <p className="text-sm text-brown-grey leading-relaxed">We value the small adjustments that lead to profound shifts in alignment and strength.</p>
                        </div>
                        <div className="fade-in-reveal group text-center" style={{ animationDelay: '0.2s' }}>
                            <span className="text-5xl serif italic mb-8 block text-taupe/40 transition-colors group-hover:text-taupe">02</span>
                            <h3 className="text-xl mb-6 uppercase tracking-[0.25em] font-sans font-bold text-dark-charcoal">Intention</h3>
                            <p className="text-sm text-brown-grey leading-relaxed">Every pulse, every breath, and every movement is performed with deliberate focus.</p>
                        </div>
                        <div className="fade-in-reveal group text-center" style={{ animationDelay: '0.4s' }}>
                            <span className="text-5xl serif italic mb-8 block text-taupe/40 transition-colors group-hover:text-taupe">03</span>
                            <h3 className="text-xl mb-6 uppercase tracking-[0.25em] font-sans font-bold text-dark-charcoal">Aesthetic</h3>
                            <p className="text-sm text-brown-grey leading-relaxed">We believe beauty and wellness are inseparable. A serene space creates a serene mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section - Grounded Layer */}
            <section className="section bg-alt-beige">
                <div className="container">
                    <div className="fade-in-reveal mb-24">
                        <h2 className="text-4xl md:text-5xl">Our Instructors</h2>
                        <div className="w-12 h-px bg-taupe mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="fade-in-reveal flex flex-col md:flex-row gap-12 items-center text-left">
                            <div className="w-full md:w-64 h-80 flex-shrink-0 overflow-hidden rounded-img">
                                <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" alt="Sarah Palms" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                            </div>
                            <div>
                                <h3 className="text-3xl mb-2 serif">Sarah Palms</h3>
                                <p className="text-taupe uppercase tracking-[0.25em] text-[10px] mb-6 font-bold">Founder & Master Instructor</p>
                                <p className="text-sm text-brown-grey leading-relaxed">Sarah&apos;s approach blends classical Pilates with modern anatomical biomechanics, focusing on the architectural integrity of the body.</p>
                            </div>
                        </div>

                        <div className="fade-in-reveal flex flex-col md:flex-row gap-12 items-center text-left" style={{ animationDelay: '0.2s' }}>
                            <div className="w-full md:w-64 h-80 flex-shrink-0 overflow-hidden rounded-img">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" alt="Julianne More" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                            </div>
                            <div>
                                <h3 className="text-3xl mb-2 serif">Julianne More</h3>
                                <p className="text-taupe uppercase tracking-[0.25em] text-[10px] mb-6 font-bold">Lead Reformer Specialist</p>
                                <p className="text-sm text-brown-grey leading-relaxed">With a background in contemporary dance, Julianne focuses on the rhythmic flow and fluidity of movement on the reformer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
