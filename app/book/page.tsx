import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Book() {
    return (
        <main>
            <Navbar />

            <section className="pt-40 pb-20 bg-soft-cream">
                <div className="container text-center">
                    <h1 className="text-5xl mb-6">Reserve Your Space</h1>
                    <p className="max-w-xl mx-auto text-muted-brown">Select a class or private session to begin your practice.</p>
                </div>
            </section>

            <section className="section bg-primary-white min-h-[600px] flex items-center">
                <div className="container max-w-lg text-center">
                    <div className="mb-12">
                        <svg className="mx-auto text-taupe mb-8" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        <h2 className="text-3xl mb-4 italic">The Booking Portal is opening soon.</h2>
                        <p className="text-muted-brown text-sm">We are currently migrating to our new architectural booking system. In the meantime, please contact our studio directly to reserve your session.</p>
                    </div>

                    <div className="space-y-4">
                        <a href="mailto:hello@pilatespalms.com" className="btn btn-primary w-full">Email studio</a>
                        <a href="tel:+15552345678" className="btn btn-outline w-full">Call studio</a>
                    </div>

                    <p className="mt-12 text-[10px] uppercase tracking-widest text-taupe">Experience the Pulse — Opening March 2026</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
