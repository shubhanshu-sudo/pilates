"use client";

export default function TestimonialsSlider() {
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

                {/* Testimonial 1 */}
                <div className="flex-shrink-0 w-[85%] max-w-[320px] snap-center">
                    <div className="bg-[#FAF7F2] p-10 rounded-3xl shadow-sm text-center border border-[#A89F92]/5 h-full flex flex-col justify-between">
                        <div>
                            <div className="mb-6">
                                <span className="text-5xl font-serif italic text-[#A89F92]/20">"</span>
                            </div>
                            <p className="text-lg italic font-serif text-[#2F2F2F] leading-[1.8] mb-10">
                                Stepping into The Palms feels like a meditative exhale. The space itself inspires a different kind of movement—precise, intentional, and grounded.
                            </p>
                        </div>
                        <div>
                            <div className="w-8 h-px bg-[#A89F92]/30 mx-auto mb-6"></div>
                            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#A89F92] font-bold">Elena V.</h4>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-[#6E665E] mt-2 opacity-60">Studio Member</p>
                        </div>
                    </div>
                </div>

                {/* Gap Spacer */}
                <div className="flex-shrink-0 w-6" />

                {/* Testimonial 2 */}
                <div className="flex-shrink-0 w-[85%] max-w-[320px] snap-center">
                    <div className="bg-[#FAF7F2] p-10 rounded-3xl shadow-sm text-center border border-[#A89F92]/5 h-full flex flex-col justify-between">
                        <div>
                            <div className="mb-6">
                                <span className="text-5xl font-serif italic text-[#A89F92]/20">"</span>
                            </div>
                            <p className="text-lg italic font-serif text-[#2F2F2F] leading-[1.8] mb-10">
                                The attention to form and the architectural beauty of the studio create an environment where I can truly focus on my practice. It's transformative.
                            </p>
                        </div>
                        <div>
                            <div className="w-8 h-px bg-[#A89F92]/30 mx-auto mb-6"></div>
                            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#A89F92] font-bold">Marcus T.</h4>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-[#6E665E] mt-2 opacity-60">Private Client</p>
                        </div>
                    </div>
                </div>

                {/* Gap Spacer */}
                <div className="flex-shrink-0 w-6" />

                {/* Testimonial 3 */}
                <div className="flex-shrink-0 w-[85%] max-w-[320px] snap-center">
                    <div className="bg-[#FAF7F2] p-10 rounded-3xl shadow-sm text-center border border-[#A89F92]/5 h-full flex flex-col justify-between">
                        <div>
                            <div className="mb-6">
                                <span className="text-5xl font-serif italic text-[#A89F92]/20">"</span>
                            </div>
                            <p className="text-lg italic font-serif text-[#2F2F2F] leading-[1.8] mb-10">
                                Every session feels like a reset. The instructors are exceptional, and the space is unlike any other studio I've experienced—calm, refined, intentional.
                            </p>
                        </div>
                        <div>
                            <div className="w-8 h-px bg-[#A89F92]/30 mx-auto mb-6"></div>
                            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#A89F92] font-bold">Sophia L.</h4>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-[#6E665E] mt-2 opacity-60">Reformer Regular</p>
                        </div>
                    </div>
                </div>

                {/* Spacer End */}
                <div className="flex-shrink-0 w-8" />
            </div>
        </div>
    );
}
