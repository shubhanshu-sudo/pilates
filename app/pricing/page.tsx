import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing() {
    const plans = [
        {
            name: 'Single Practice',
            price: '$45',
            features: ['1 Class Credit', 'Valid for 14 Days', 'All Group Classes', 'Access to Amenities'],
            highlight: false
        },
        {
            name: 'The Weekly Pulse',
            price: '$120',
            features: ['3 Class Credits / Week', 'Flexible Booking', 'Full Studio Access', '1 Guest Pass / Month'],
            highlight: true
        },
        {
            name: 'The Monthly Flow',
            price: '$380',
            features: ['Unlimited Group Classes', 'Priority Booking', '10% Off Private Sessions', 'Guest Passes Included'],
            highlight: false
        }
    ];

    const privates = [
        { name: 'Single Private', price: '$120' },
        { name: '5 Private Pack', price: '$550' },
        { name: '10 Private Pack', price: '$1,000' }
    ];

    return (
        <main>
            <Navbar />

            <section className="pt-40 pb-20 bg-soft-cream">
                <div className="container text-center">
                    <h1 className="text-5xl mb-6">Pricing</h1>
                    <p className="max-w-xl mx-auto text-muted-brown">Invest in your longevity. Flexible options for every level of commitment.</p>
                </div>
            </section>

            <section className="section bg-primary-white">
                <div className="container">
                    <h2 className="section-title">Membership & Packs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`p-12 rounded-img border ${plan.highlight ? 'border-taupe bg-white shadow-xl scale-105 z-10' : 'border-light-beige'}`}>
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-center">{plan.name}</h3>
                                <div className="text-4xl serif text-center mb-8">{plan.price}</div>
                                <ul className="space-y-4 mb-10 text-sm">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-3">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-taupe"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="0.5" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/book" className={`btn w-full text-center ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}>Select Plan</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-soft-cream">
                <div className="container max-w-2xl">
                    <h2 className="section-title">Private Sessions</h2>
                    <div className="bg-white p-10 rounded-img divide-y divide-light-beige">
                        {privates.map((item) => (
                            <div key={item.name} className="flex justify-between py-6 items-center">
                                <span className="text-lg font-serif">{item.name}</span>
                                <span className="font-bold tracking-widest">{item.price}</span>
                            </div>
                        ))}
                        <div className="pt-8 text-center">
                            <a href="/contact" className="btn btn-outline">Inquire for Private Training</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
