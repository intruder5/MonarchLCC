import Link from 'next/link'

export default function Third() {
    return (
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Image */}
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-2 scale-105" />
                    <img
                        src="fam.jpg"
                        alt="Happy family"
                        className="relative z-10 w-full h-[420px] object-cover rounded-3xl shadow-xl"
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-6">
                    <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold">Personal Loans</p>
                    <h2 className="font-mono font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
                        Affordable loans built around <span className="text-orange-600">you</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        A personal installment loan with Monarch gets you the money you need now while you build your financial future. We know you're more than your credit score — that's why we make our loans affordable, accessible, and easy to manage.
                    </p>
                    <Link
                        href="/apply"
                        className="self-start bg-orange-600 hover:bg-orange-700 text-white font-bold font-mono px-8 py-4 rounded-full shadow-md shadow-orange-600/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Apply Now
                    </Link>
                </div>

            </div>
        </section>
    )
}