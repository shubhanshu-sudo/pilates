import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Classes() {
    const classTypes = [
        {
            id: 'reformer',
            title: 'Structural Reformer',
            description: 'Our signature session focusing on skeletal alignment and deep muscular engagement using the high-performance reformer. Ideal for building lean strength and skeletal integrity.',
            level: 'All Levels',
            duration: '50 Minutes',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: 'mat',
            title: 'Precision Mat',
            description: 'A contemporary approach to traditional mat-work. Focuses on the "powerhouse" with an emphasis on breath-work and controlled concentric movements.',
            level: 'All Levels',
            duration: '50 Minutes',
            image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200'
        },
        {
            id: 'flow',
            title: 'Pulse Flow',
            description: 'A dynamic, high-intensity Pilates flow that increases the heart rate while maintaining the integrity of form. Expect a continuous rhythmic sequence.',
            level: 'Intermediate',
            duration: '45 Minutes',
            image: '/pilates-class-at-hi-pilates-artarmon-australia_1600x.webp'
        },
        {
            id: 'private',
            title: 'Private Mastery',
            description: 'One-on-one sessions tailored to your specific goals, injuries, or athletic requirements. The most efficient way to master the Pilates method.',
            level: 'Personalized',
            duration: '60 Minutes',
            image: '/IMG_1304.webp'
        }
    ];

    return (
        <main>
            <Navbar />

            <section className="pt-40 pb-24 bg-primary-white">
                <div className="container text-center">
                    <div className="fade-in-reveal max-w-2xl mx-auto">
                        <h1 className="text-5xl md:text-7xl mb-8 font-serif text-dark-charcoal">Our Classes</h1>
                        <div className="w-12 h-px bg-taupe mx-auto mb-10"></div>
                        <p className="max-w-xl mx-auto text-brown-grey">Each class is a curated experience designed to challenge your body and calm your mind.</p>
                    </div>
                </div>
            </section>

            <section className="section bg-alt-beige">
                <div className="container">
                    <div className="grid gap-32">
                        {classTypes.map((item, index) => (
                            <div key={item.id} className={`flex flex-col md:flex-row gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} id={item.id}>
                                <div className="md:w-1/2 aspect-[16/10] w-full fade-in-reveal">
                                    <div className="w-full h-full overflow-hidden rounded-img shadow-sm border border-black/5">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 saturate-[0.85] contrast-[0.95]" />
                                    </div>
                                </div>
                                <div className="md:w-1/2 fade-in-reveal">
                                    <div className="flex gap-4 mb-6">
                                        <span className="text-[10px] uppercase tracking-[0.25em] bg-primary-white px-4 py-1 rounded-full text-taupe font-bold border border-taupe/10">{item.level}</span>
                                        <span className="text-[10px] uppercase tracking-[0.25em] bg-primary-white px-4 py-1 rounded-full text-taupe font-bold border border-taupe/10">{item.duration}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl mb-8 serif text-dark-charcoal">{item.title}</h2>
                                    <p className="mb-10 text-brown-grey leading-relaxed text-lg">{item.description}</p>
                                    <a href="/book" className="btn btn-primary nav-btn !px-10">Book This Class</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
