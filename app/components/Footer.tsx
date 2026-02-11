import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="section bg-soft-cream">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="logo mb-6 inline-block">
                            <span className="font-serif text-2xl font-bold uppercase tracking-widest">The Pilates Palms</span>
                            <span className="text-[12px] tracking-[0.4em] font-sans text-taupe font-normal uppercase">Pulse</span>
                        </Link>
                        <p className="max-w-md text-muted-brown">
                            A boutique architectural wellness space dedicated to intentional movement and refined strength. Experience Pilates in its most elevated form.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-bold">Studio</h4>
                        <ul className="space-y-4 text-sm tracking-wide">
                            <li><Link href="/about" className="hover:text-taupe transition-colors">Our Story</Link></li>
                            <li><Link href="/classes" className="hover:text-taupe transition-colors">Classes</Link></li>
                            <li><Link href="/pricing" className="hover:text-taupe transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-taupe transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 font-bold">Connect</h4>
                        <ul className="space-y-4 text-sm tracking-wide">
                            <li><a href="#" className="hover:text-taupe transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-taupe transition-colors">Pinterest</a></li>
                            <li><a href="#" className="hover:text-taupe transition-colors">Newsletter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-light-beige flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-taupe">
                    <p>© 2026 THE PILATES PALMS – PULSE. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-text-charcoal transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-text-charcoal transition-colors">Terms</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
