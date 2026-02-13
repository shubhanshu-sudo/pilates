import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <main>
            <Navbar />

            <section className="pt-40 pb-20 bg-primary-white">
                <div className="container text-center">
                    <h1 className="text-5xl mb-6">Contact Us</h1>
                    <p className="max-w-xl mx-auto text-muted-brown">Connect with our team to learn more about our practice or to book a studio tour.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl mb-10">Visit Our Sanctuary</h2>
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-taupe mb-4">Location</h4>
                                    <p className="text-lg serif">122 Architectural Way<br />Boutique District, CA 90210</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-taupe mb-4">Hours</h4>
                                    <p className="text-sm">Monday — Friday: 6:00am – 8:00pm</p>
                                    <p className="text-sm">Saturday — Sunday: 8:00am – 4:00pm</p>
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-taupe mb-4">Contact</h4>
                                    <p className="text-sm">hello@pilatespalms.com</p>
                                    <p className="text-sm">+1 (555) 234-5678</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-soft-cream p-12 rounded-img">
                            <h3 className="text-2xl mb-8">Send an Inquiry</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Name</label>
                                    <input type="text" className="w-full bg-primary-white border-b border-light-beige p-3 outline-none focus:border-taupe transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Email</label>
                                    <input type="email" className="w-full bg-primary-white border-b border-light-beige p-3 outline-none focus:border-taupe transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Subject</label>
                                    <select className="w-full bg-primary-white border-b border-light-beige p-3 outline-none focus:border-taupe transition-colors">
                                        <option>General Inquiry</option>
                                        <option>Private Training</option>
                                        <option>Membership</option>
                                        <option>Media & Partnerships</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold">Message</label>
                                    <textarea rows={4} className="w-full bg-primary-white border-b border-light-beige p-3 outline-none focus:border-taupe transition-colors"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary w-full mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[500px] w-full bg-light-beige relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" alt="Map Location" className="w-full h-full object-cover opacity-50 grayscale" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-8 py-4 rounded-full shadow-lg text-sm tracking-widest uppercase font-bold">THE PILATES PALMS AND PULSE</div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
