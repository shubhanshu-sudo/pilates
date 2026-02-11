"use client";

export default function ArchSlider() {
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
                {/* CSS to hide scrollbar (extra layer) */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .scrollbar-hide::-webkit-scrollbar { display: none; }
                ` }} />

                {/* Spacer Start */}
                <div className="flex-shrink-0 w-8" />

                {/* Card 1 - Soft Curves */}
                <div className="arch-card flex-shrink-0 w-[85%] max-w-[300px] snap-center">
                    <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-sm overflow-hidden relative">
                        <img
                            src="/wPz2O4vjnmdroCw-NjvUJoV3d65vfJ5YIMeMoOHJ6V-l76tYn2APl9vVW3_ZfYVayTZUkgElpbolBu3lOxl17z0AZDPhys1AMb24dvtay9U.jpg"
                            alt="Minimalist studio architecture"
                            className="w-full h-full object-cover saturate-[0.8] contrast-[0.95]"
                        />
                    </div>
                    <h3 className="arch-card-title text-2xl mt-6">Soft Curves</h3>
                    <p className="arch-card-desc text-[#6E665E] px-4">
                        The gentle flow of form designed to support intentional movement.
                    </p>
                </div>

                {/* Gap Spacer (optional if gap is used) */}
                <div className="flex-shrink-0 w-4" />

                {/* Card 2 - Natural Textures */}
                <div className="arch-card flex-shrink-0 w-[85%] max-w-[300px] snap-center">
                    <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-sm overflow-hidden relative">
                        <img
                            src="/_evg6wvn4p-ELEc4NooioDxaJxaa7aW7LaWE5FVeeYHP6qAzkuS0Uyglvy2ZdfswYlowA5DRWrXapqLvy_hsQnDb64jtLG58Av9pX5U4EK8.jpg"
                            alt="Natural wood and stone textures"
                            className="w-full h-full object-cover saturate-[0.8] contrast-[0.95]"
                        />
                    </div>
                    <h3 className="arch-card-title text-2xl mt-6">Natural Textures</h3>
                    <p className="arch-card-desc text-[#6E665E] px-4">
                        Earth, stone, and wood in harmony with the body and space.
                    </p>
                </div>

                {/* Gap Spacer */}
                <div className="flex-shrink-0 w-4" />

                {/* Card 3 - Grounded Light */}
                <div className="arch-card flex-shrink-0 w-[85%] max-w-[300px] snap-center">
                    <div className="aspect-[4/5] rounded-2xl bg-[#F9F6F1] shadow-sm overflow-hidden relative">
                        <img
                            src="/sNGB4GptOInR8i65sV-yUKpUNZBnWOu0XJBw1j67MzmHO9PP7UY7BHneyGxJjE2VMwKQxuJhEF-zZYuH8uq6z8pzguzA8liszhqZ1krqGLA.jpg"
                            alt="Grounded studio lighting"
                            className="w-full h-full object-cover saturate-[0.8] contrast-[0.95]"
                        />
                    </div>
                    <h3 className="arch-card-title text-2xl mt-6">Grounded Light</h3>
                    <p className="arch-card-desc text-[#6E665E] px-4">
                        Soft daylight shaping a calm, focused atmosphere for every breath.
                    </p>
                </div>

                {/* Spacer End */}
                <div className="flex-shrink-0 w-8" />
            </div>
        </div>
    );
}
