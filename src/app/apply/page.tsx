'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const steps = ['Get Started', 'Information', 'Finances', 'Funding', 'Submit']

export default function ApplyPage() {
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '', zip: '', amount: '',
    })

    const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

    const ready = form.firstName && form.lastName && form.email && form.phone && form.zip && form.amount

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">

            {/* Progress Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-3xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500 font-medium">Step 1 of 5 (20%)</span>
                        <span className="text-sm font-semibold text-orange-600">Get Started</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full transition-all duration-500" style={{ width: '20%' }} />
                    </div>
                    <div className="hidden md:flex justify-between mt-3">
                        {steps.map((s, i) => (
                            <div key={s} className="flex flex-col items-center gap-1">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors
                                    ${i === 0 ? 'bg-orange-600 border-orange-600 text-white' : 'bg-white border-gray-300 text-gray-400'}`}>
                                    {i + 1}
                                </div>
                                <span className={`text-xs ${i === 0 ? 'text-orange-600 font-semibold' : 'text-gray-400'}`}>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Card */}
            <div className="flex-1 flex items-start justify-center px-6 py-12">
                <div className="w-full max-w-2xl">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="">
                            <span className="text-2xl"></span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Welcome to Monarch!</h1>
                        <p className="text-gray-500 text-[15px] max-w-lg mx-auto leading-relaxed">
                            Apply for a loan online quickly and conveniently. Get started below with{' '}
                            <span className="font-semibold text-gray-700">no impact to your credit score</span> when you apply.*
                        </p>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-10 space-y-6">

                        {/* Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                                <input
                                    type="text"
                                    value={form.firstName}
                                    onChange={e => set('firstName', e.target.value)}
                                    placeholder="Jane"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                                <input
                                    type="text"
                                    value={form.lastName}
                                    onChange={e => set('lastName', e.target.value)}
                                    placeholder="Doe"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={e => set('email', e.target.value)}
                                placeholder="jane@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all"
                            />
                            <p className="text-xs text-gray-400 mt-1.5">This email address will be your account username. We will also use it to contact you.</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mobile Phone Number</label>
                            <input
                                type="tel"
                                value={form.phone}
                                onChange={e => set('phone', e.target.value)}
                                placeholder="(555) 000-0000"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all"
                            />
                            <p className="text-xs text-gray-400 mt-1.5">We may call or text you at this number with important information about your application.</p>
                        </div>

                        {/* ZIP + Amount Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">ZIP Code</label>
                                <input
                                    type="text"
                                    value={form.zip}
                                    onChange={e => set('zip', e.target.value)}
                                    placeholder="79601"
                                    maxLength={5}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Requested Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                                    <input
                                        type="number"
                                        value={form.amount}
                                        onChange={e => set('amount', e.target.value)}
                                        placeholder="1,000"
                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            disabled={!ready}
                            className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-lg transition-all duration-200 shadow-md shadow-orange-600/20 hover:shadow-lg hover:-translate-y-0.5 disabled:shadow-none disabled:translate-y-0"
                        >
                            Continue <ArrowRight className="w-5 h-5" />
                        </button>

                        {/* Disclaimer */}
                        <p className="text-xs text-gray-400 leading-relaxed">
                            * For the initial purposes of pre-qualifying you for a loan, we will use credit information from one or more Credit Reporting Agencies. This is pulled using a "soft" credit inquiry, which does not impact your credit score. If you are approved for and accept the loan, we will obtain a complete Consumer Credit Report; this will result in a "hard" credit inquiry and may impact your credit score.
                        </p>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white mt-4">
                <div className="max-w-3xl mx-auto px-6 py-6 text-center space-y-2">
                    <div className="flex justify-center gap-4 text-xs text-orange-600 font-medium">
                        <a href="/licenses" className="hover:underline">Licenses/Disclosures</a>
                        <span className="text-gray-300">|</span>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <span className="text-gray-300">|</span>
                        <a href="/sms-terms" className="hover:underline">SMS Terms</a>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed max-w-xl mx-auto">
                        TO REPORT A PROBLEM OR COMPLAINT, WRITE OR CALL: Compliance Department, 123 Monarch Lane, Abilene, TX 79601 · (800) MON-ARCH · compliance@monarchloan.com
                    </p>
                    <p className="text-[11px] text-gray-400">© Copyright 2026 Monarch Loan Company. All rights reserved.</p>
                </div>
            </footer>

        </main>
    )
}