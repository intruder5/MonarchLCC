'use client'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, ChevronDown, Check, X, Minus } from 'lucide-react'
import Link from 'next/link'

const useCases = [
    { emoji: '🚗', title: 'Auto Repair Loans', desc: 'Repair your vehicle with flexible options that get you back on the road.' },
    { emoji: '🏠', title: 'Home Improvement Loans', desc: 'Handle unexpected repairs, weatherproofing, or a full remodel.' },
    { emoji: '💳', title: 'Debt Consolidation', desc: 'Reduce multiple debts into a single, manageable monthly payment.' },
    { emoji: '🎉', title: 'Parties & Celebrations', desc: 'Whether a Quinceañera or 50th anniversary — celebrate like you deserve.' },
]

const reviews = [
    { name: 'Christian Castillo', text: "I've been coming since 2018 and they've always taken great care of me! Great way to start building credit as a young adult." },
    { name: 'Jovana Lozano', text: "I'm a returning customer and this time around I noticed a much faster and efficient process. They offer instant transfers with approved credit." },
    { name: 'Karen Eisele', text: "I have been getting loans from Monarch for years. It is easy to apply and they are quick." },
    { name: 'Concepcion Rojastoro', text: "Gloria and her staff are amazing — they make you feel comfortable and exceed every expectation. By far the best loan company yet, and it helps your credit too!" },
    { name: 'itsjusttania', text: "Very happy with the service every time. I've been a customer for 5+ years and I've never been disappointed. Will always recommend. 😊" },
    { name: 'Sebrina Dollar', text: "I've done business with Monarch for over twenty years. Always professional and friendly — they go the extra mile for their customers." },
]

const faqs = [
    { q: 'What is a personal Installment loan?', a: 'A personal Installment loan is a fixed amount borrowed and repaid over a set period through scheduled monthly payments. Unlike payday loans, Installment loans give you more time and lower payments.' },
    { q: 'Will applying affect my credit score?', a: 'No — our initial pre-qualification uses a "soft" credit inquiry which does not impact your score. Only if you accept the loan will a hard inquiry be made.' },
    { q: 'How much can I borrow?', a: 'You can borrow up to $10,000 depending on your state and financial profile. Loan amounts vary by state.' },
    { q: 'How fast can I get funds?', a: 'Approved applicants can often receive funds the same day — either in-branch or via instant transfer with approved credit.' },
    { q: 'Does Monarch report to credit bureaus?', a: 'Yes! Monarch reports to all 3 major credit bureaus, helping you establish and build credit over time through consistent repayment.' },
]

const comparison = [
    { feature: 'Loan Term', monarch: '3–36 months', payday: 'Due next payday (~2 wks)', title: '15–30 days' },
    { feature: 'Processing Speed', monarch: 'Same day', payday: 'Same day', title: 'Same day' },
    { feature: 'Affordable Monthly Payment', monarch: true, payday: false, title: false },
    { feature: 'Helps Build Credit', monarch: true, payday: false, title: false },
]

export default function InstallmentPage() {
    const [reviewPage, setReviewPage] = useState(0)
    const [openFaq, setOpenFaq] = useState<number | null>(null)
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
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Personal Loans</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Personal Installment Loans</h1>
                    <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Our friendly loan specialists see you as more than your credit score. Get up to $10,000 with affordable monthly payments built around your budget.
                    </p>
                    <Link
                        href="/apply"
                        className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Start Now
                    </Link>
                </div>
            </section>

            {/* The Monarch Advantage */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold mb-3">The Monarch Advantage</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">A loan built around you</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Whether you apply online or in-branch, our specialists get to know you, explain all your options clearly, and find payments that fit your life. Plus, we report to all 3 major credit bureaus to help you build credit over time.
                        </p>
                        <p className="text-gray-700 font-semibold mb-3">Here are just some of the ways you can use your loan:</p>
                        <ul className="space-y-2 text-gray-600">
                            {['Auto repairs to get back on the road', 'Home improvements & weatherproofing', 'Debt consolidation into one payment', 'Family celebrations like Quinceañeras', 'Unexpected expenses — whatever life throws your way'].map(item => (
                                <li key={item} className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Get up to</p>
                        <p className="text-7xl font-bold text-orange-600 mb-2">$10K</p>
                        <p className="text-gray-400 text-sm mb-6">Loan amounts vary by state</p>
                        <Link
                            href="/apply"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-orange-600/20"
                        >
                            Start Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold text-center mb-2">Your loan can go a long way</p>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Find out what's right for you</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map(({ emoji, title, desc }) => (
                            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
                                <div className="text-4xl mb-4">{emoji}</div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="max-w-4xl mx-auto px-6 py-20">
                <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold text-center mb-2">Not all loans are equal</p>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How we compare</h2>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                    <table className="w-full text-sm">
                        <thead>
                        <tr className="bg-gray-50">
                            <th className="text-left px-6 py-4 text-gray-500 font-semibold">Feature</th>
                            <th className="px-6 py-4 text-orange-600 font-bold bg-orange-50">Monarch</th>
                            <th className="px-6 py-4 text-gray-500 font-semibold">Payday Loans</th>
                            <th className="px-6 py-4 text-gray-500 font-semibold">Title Loans</th>
                        </tr>
                        </thead>
                        <tbody>
                        {comparison.map((row, i) => (
                            <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                <td className="px-6 py-4 font-medium text-gray-700">{row.feature}</td>
                                <td className="px-6 py-4 text-center bg-orange-50/40">
                                    {typeof row.monarch === 'boolean'
                                        ? row.monarch ? <Check className="w-5 h-5 text-orange-600 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                                        : <span className="font-semibold text-orange-600">{row.monarch}</span>}
                                </td>
                                <td className="px-6 py-4 text-center text-gray-500">
                                    {typeof row.payday === 'boolean'
                                        ? row.payday ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                                        : row.payday}
                                </td>
                                <td className="px-6 py-4 text-center text-gray-500">
                                    {typeof row.title === 'boolean'
                                        ? row.title ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                                        : row.title}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Reviews */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Hear from our customers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {visible.map(r => (
                            <div key={r.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-5 text-[15px]">"{r.text}"</p>
                                <p className="text-gray-900 font-semibold text-sm">{r.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-10">
                        <button onClick={() => setReviewPage(p => Math.max(0, p - 1))} disabled={reviewPage === 0}
                                className="p-2 rounded-full border border-gray-200 hover:border-orange-400 disabled:opacity-30 transition-colors">
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <span className="text-sm text-gray-500">{reviewPage + 1} / {totalPages}</span>
                        <button onClick={() => setReviewPage(p => Math.min(totalPages - 1, p + 1))} disabled={reviewPage === totalPages - 1}
                                className="p-2 rounded-full border border-gray-200 hover:border-orange-400 disabled:opacity-30 transition-colors">
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently asked questions</h2>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} />
                            </button>
                            {openFaq === i && (
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Dark */}
            <section className="bg-gray-950 text-white">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">Ready to apply?</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get the money you need today</h2>
                    <p className="text-gray-400 text-lg mb-8">No impact to your credit score when you apply.*</p>
                    <Link
                        href="/apply"
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Apply Online
                    </Link>
                    <p className="text-gray-600 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
                        * For the initial purposes of pre-qualifying you for a loan, we will use credit information from one or more Credit Reporting Agencies using a "soft" credit inquiry, which does not impact your credit score. If you accept the loan, a "hard" inquiry will be made and may impact your credit score.
                    </p>
                </div>
            </section>

        </main>
    )
}