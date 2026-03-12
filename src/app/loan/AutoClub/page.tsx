'use client'
import { Car, Shield, Wrench, Key, Zap, Gavel, Star, Phone, Tag, Plane, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const benefits = [
    { icon: Car, label: 'Towing Reimbursement', value: '$85', note: 'per occurrence' },
    { icon: Key, label: 'Lockout Reimbursement', value: '$85', note: 'per occurrence' },
    { icon: Wrench, label: 'Flat Tire Repair', value: '$15', note: 'per occurrence' },
    { icon: Zap, label: 'Battery Charge', value: '$15', note: 'per occurrence' },
    { icon: Gavel, label: 'Traffic Court Defense', value: '$175', note: 'reimbursement' },
    { icon: Shield, label: 'Stolen Auto Reward', value: '$2,500', note: 'reward' },
    { icon: Phone, label: 'AT&T Discount', value: '✓', note: 'member perk' },
    { icon: Car, label: 'Rental Car Discounts', value: '✓', note: 'member perk' },
    { icon: Plane, label: 'Travel Discounts', value: '✓', note: 'member perk' },
]

const plans = [
    { term: '3 Month', individual: '$24', family: '$30', popular: false },
    { term: '6 Month', individual: '$48', family: '$60', popular: false },
    { term: '9 Month', individual: '$72', family: '$90', popular: true },
    { term: '12 Month', individual: '$96', family: '$120', popular: false },
]

export default function AutoClubPage() {
    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Monarch Auto Club</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Stay on the road<br />with confidence</h1>
                    <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        We partner with PTS Auto Club to provide roadside services that go beyond your regular car insurance — starting at just $8/month.
                    </p>
                    <Link
                        href="/Discover"
                        className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Find a Branch
                    </Link>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold text-center mb-2">Simple, flexible pricing</p>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Choose your plan</h2>
                <p className="text-gray-500 text-center mb-12">
                    <span className="font-semibold text-gray-700">$8/mo</span> for individuals &nbsp;·&nbsp; <span className="font-semibold text-gray-700">$10/mo</span> for families &nbsp;·&nbsp; 3, 6, 9, or 12 month terms
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {plans.map(plan => (
                        <div key={plan.term} className={`relative rounded-2xl border p-6 text-center transition-all duration-200
                            ${plan.popular
                            ? 'border-orange-400 shadow-lg shadow-orange-100 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-200 hover:shadow-md bg-white'}`}>
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Popular
                                </span>
                            )}
                            <p className="font-bold text-gray-900 text-lg mb-4">{plan.term}</p>
                            <div className="mb-2">
                                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Individual</p>
                                <p className="text-2xl font-bold text-orange-600">{plan.individual}</p>
                            </div>
                            <div className="border-t border-gray-100 pt-2 mt-2">
                                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Family</p>
                                <p className="text-2xl font-bold text-gray-700">{plan.family}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold text-center mb-2">What's included</p>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All the coverage you need</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map(({ icon: Icon, label, value, note }) => (
                            <div key={label} className="bg-white rounded-2xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-200 p-6 flex items-center gap-4 group">
                                <div className="bg-orange-50 text-orange-600 rounded-xl p-3 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200 shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                                    <p className="text-orange-600 font-bold">{value} <span className="text-gray-400 font-normal text-xs">{note}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-6">& more member perks available!</p>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-950 text-white">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">Ready to join?</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Join Monarch Auto Club today</h2>
                    <p className="text-gray-400 text-lg mb-8">Visit your nearest branch to sign up — available in Texas.</p>
                    <Link
                        href="/Discover"
                        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Find a Branch <ChevronRight className="w-4 h-4" />
                    </Link>
                    <p className="text-gray-600 text-xs mt-10 max-w-2xl mx-auto leading-relaxed">
                        ¹ Auto club available in Texas. Services and products are subject to change at any time for any reason. ² Reimbursement amount per occurrence. Other exclusions may apply.
                    </p>
                </div>
            </section>

        </main>
    )
}