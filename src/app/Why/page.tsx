'use client'
import { Shield, TrendingUp, Users, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const features = [
    {
        icon: Shield,
        title: "Helpful & Informative",
        subtitle: "We'll help you understand your options",
        description:
            "Our team is trained to assist you with financial decisions by providing a monthly budgeting overview and helping you understand your credit score.",
    },
    {
        icon: TrendingUp,
        title: "Future Focused",
        subtitle: "We provide opportunities to establish your credit",
        description:
            "Monarch reports to all 3 major credit bureaus, allowing you to establish credit over time through consistent loan repayment.",
    },
    {
        icon: Users,
        title: "Community First",
        subtitle: "We invest in our communities",
        description:
            "We don't just work in your community — we live there too, and make our commitment known through local volunteer efforts, fundraisers, and drives.",
    },
    {
        icon: Heart,
        title: "Personal",
        subtitle: "We take the personal loan business personally",
        description:
            "Whether you opt for online, phone, or in-branch assistance, we'll go out of our way to ensure clear information and loan terms that fit your needs.",
    },
]

const reviews = [
    {
        name: "Meagan Nettles",
        text: "Both the ladies were very sweet and went out of their way to help me — even offered a service for free when another place turned me away.",
    },
    {
        name: "Janett Guerrero",
        text: "Great service. Everything was quick and easy. Questions were asked through the phone and I was approved immediately with no problem!",
    },
    {
        name: "Barbara Ware",
        text: "The staff are friendly, courteous and very professional. It's great to have a business around when you need a little extra to get you through.",
    },
    {
        name: "Starla Mitchell",
        text: "I was in and out in less than 30 minutes. Amy was such a pleasure to work with. I will definitely refer people — thank you for a pleasant experience!",
    },
    {
        name: "DeVione Branscumb",
        text: "They are patient and they have your best interest in mind. Truly felt like they cared about my situation.",
    },
    {
        name: "Tatiana Smith",
        text: "I was hesitant at first, but the awesome team was able to help me out especially when I really needed it. I give them 5 stars.",
    },
]

const timeline = [
    { year: "1988", event: "First branch opens" },
    { year: "1994", event: "Services expand statewide" },
    { year: "2003", event: "Tax prep services launch" },
    { year: "2026", event: "Online loan approval & tax prep go live" },
]

export default function WhyPage() {
    const [reviewPage, setReviewPage] = useState(0)
    const perPage = 3
    const totalPages = Math.ceil(reviews.length / perPage)
    const visible = reviews.slice(reviewPage * perPage, reviewPage * perPage + perPage)

    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Why Monarch?</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Helping you achieve<br />financial peace of mind
                    </h1>
                    <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Throughout our history, we've been helping people with personal installment loans — with friendly specialists who build payment plans around <em>you</em>.
                    </p>
                    <a
                        href="/apply"
                        className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Start Now
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map(({ icon: Icon, title, subtitle, description }) => (
                        <div key={title} className="group border border-gray-200 rounded-2xl p-8 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-orange-50 text-orange-600 rounded-xl p-3 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                                    <p className="text-orange-600 text-sm font-medium">{subtitle}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-gray-950 text-white">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">It's all about you</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get the money you need today</h2>
                    <p className="text-gray-400 text-lg mb-8">Up to $10,000 — loan amounts vary by state</p>
                </div>
            </section>

            {/* Timeline */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">Decades of growth & innovation</h2>
                <div className="relative">
                    <div className="absolute top-5 left-0 right-0 h-0.5 bg-orange-100 hidden md:block" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {timeline.map(({ year, event }) => (
                            <div key={year} className="relative text-center">
                                <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10">
                                    ✓
                                </div>
                                <p className="text-orange-600 font-bold text-xl mb-1">{year}</p>
                                <p className="text-gray-600 text-sm">{event}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Hear from our customers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {visible.map((r) => (
                            <div key={r.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-5 text-[15px]">"{r.text}"</p>
                                <p className="text-gray-900 font-semibold text-sm">{r.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-10">
                        <button
                            onClick={() => setReviewPage(p => Math.max(0, p - 1))}
                            disabled={reviewPage === 0}
                            className="p-2 rounded-full border border-gray-200 hover:border-orange-400 disabled:opacity-30 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <span className="text-sm text-gray-500">{reviewPage + 1} / {totalPages}</span>
                        <button
                            onClick={() => setReviewPage(p => Math.min(totalPages - 1, p + 1))}
                            disabled={reviewPage === totalPages - 1}
                            className="p-2 rounded-full border border-gray-200 hover:border-orange-400 disabled:opacity-30 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}