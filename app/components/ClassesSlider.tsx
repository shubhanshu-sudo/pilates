"use client";

export default function ClassesSlider() {
    return (
        <div className="md:hidden">
            {/* Slider Container - Clean, Touch-Driven, Snap Snapping */}
            <div
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12 scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                {/* CSS to hide scrollbar */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .scrollbar-hide::-webkit-scrollbar { display: none; }
                ` }} />

                {/* Spacer Start */}
                <div className="flex-shrink-0 w-8" />

                {/* Card 1 - Reformer */}
                <div className="flex-shrink-0 w-[85%] max-w-[300px] snap-center text-center">
                    <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-sm overflow-hidden mb-10">
                        <img
                            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800"
                            alt="Reformer Practice"
                            className="w-full h-full object-cover grayscale-[20%]"
                        />
                    </div>
                    <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">Reformer</h3>
                    <div className="flex items-start justify-center gap-4 px-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-[10px] font-bold">N</span>
                        </div>
                        <p className="text-sm text-[#6E665E] leading-relaxed">
                            Controlled resistance for deep stability and elongated strength.
                        </p>
                    </div>
                </div>

                {/* Gap Spacer */}
                <div className="flex-shrink-0 w-6" />

                {/* Card 2 - Mat */}
                <div className="flex-shrink-0 w-[85%] max-w-[300px] snap-center text-center">
                    <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-sm overflow-hidden mb-10">
                        <img
                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                            alt="Mat Pilates"
                            className="w-full h-full object-cover grayscale-[20%]"
                        />
                    </div>
                    <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">Mat</h3>
                    <div className="flex items-start justify-center gap-4 px-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-[10px] font-bold">N</span>
                        </div>
                        <p className="text-sm text-[#6E665E] leading-relaxed">
                            Core-centric movement focusing on breath and precision flow.
                        </p>
                    </div>
                </div>

                {/* Gap Spacer */}
                <div className="flex-shrink-0 w-6" />

                {/* Card 3 - Private */}
                <div className="flex-shrink-0 w-[85%] max-w-[300px] snap-center text-center">
                    <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-sm overflow-hidden mb-10">
                        <img
                            src="/pilates-class-at-hi-pilates-artarmon-australia_1600x.webp"
                            alt="Private Session"
                            className="w-full h-full object-cover grayscale-[20%]"
                        />
                    </div>
                    <h3 className="text-3xl font-serif text-[#2F2F2F] mb-6">Private</h3>
                    <div className="flex items-start justify-center gap-4 px-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-[#2F2F2F] flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-[10px] font-bold">N</span>
                        </div>
                        <p className="text-sm text-[#6E665E] leading-relaxed">
                            Tailored sessions designed for your specific anatomical needs.
                        </p>
                    </div>
                </div>

                {/* Spacer End */}
                <div className="flex-shrink-0 w-8" />
            </div>
        </div>
    );
}
