import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="mt-32 md:mt-48 py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center bg-zinc-50 rounded-3xl shadow-xl overflow-hidden">
                <div className="max-w-2xl px-10 py-10 md:px-14 lg:px-20">
                    <h1 className="font-mono text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-orange-600 leading-tight mb-12">
                        Worry-free loans & taxes.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
                        When it comes to money goals, we're the best loan company for the job. We're here to help unlock your financial good with quick personal loans and easy tax preparation services – no matter your credit score.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Button
                            className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white rounded-full font-mono font-bold px-8 py-6 text-lg"
                            size="lg"
                        >
                            Apply Now
                        </Button>
                        <Button
                            className="bg-white cursor-pointer hover:bg-zinc-100 text-black rounded-full border border-gray-300 font-mono font-bold px-8 py-6 text-lg"
                            variant="outline"
                        >
                            Make Payment
                        </Button>
                    </div>
                </div>
                <div className="relative h-96 md:h-full">
                    <div className="absolute inset-0 bg-orange-600 rounded-3xl transform rotate-3 scale-105"></div>
                    <img
                        src="herodude.jpg"
                        alt="Financial services representative"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10"
                    />
                </div>
            </div>
        </section>
    );
}