'use client'
import { useState } from 'react'
import { ArrowRight, Shield, Clock, FileText, Users } from 'lucide-react'

const products = [
    {
        id: 'refund_advance',
        icon: Clock,
        title: 'Refund Advance',
        desc: 'Get up to $7,500 of your tax refund in as little as 24 hours!',
    },
    {
        id: 'no_upfront',
        icon: Shield,
        title: 'No Up-Front Fees',
        desc: 'Hassle-free filing with no up-front costs — fees deducted from your refund.',
    },
    {
        id: 'audit_protection',
        icon: FileText,
        title: 'Audit Protection',
        desc: 'Extra peace of mind with our optional audit protection service.',
    },
    {
        id: 'dependents_free',
        icon: Users,
        title: 'Dependents File Free',
        desc: 'Dependents claimed on a qualifying return are eligible to file for free.',
    },
]

const states = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
    'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
    'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
    'VA','WA','WV','WI','WY',
]

export default function TaxFilingPage() {
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', state: '', zip: '',
    })
    const [selected, setSelected] = useState<string[]>([])

    const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

    const toggleProduct = (id: string) =>
        setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])

    const ready = form.firstName && form.lastName && form.email && form.phone &&
        form.address && form.city && form.state && form.zip

    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Tax Services</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Your First Step Toward a<br />Stress-Free Tax Season
                    </h1>
                    <p className="text-orange-100 text-lg">Fill out this quick form and we'll handle the rest.</p>
                </div>
            </section>

            {/* Form */}
            <section className="max-w-2xl mx-auto px-6 py-16">
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10 space-y-6">

                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name <span className="text-orange-500">*</span></label>
                            <input type="text" value={form.firstName} onChange={e => set('firstName', e.target.value)}
                                   placeholder="Jane"
                                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name <span className="text-orange-500">*</span></label>
                            <input type="text" value={form.lastName} onChange={e => set('lastName', e.target.value)}
                                   placeholder="Doe"
                                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all" />
                        </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-orange-500">*</span></label>
                            <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                                   placeholder="jane@example.com"
                                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number <span className="text-orange-500">*</span></label>
                            <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                                   placeholder="(555) 000-0000"
                                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all" />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Address <span className="text-orange-500">*</span></label>
                        <input type="text" value={form.address} onChange={e => set('address', e.target.value)}
                               placeholder="123 Main St"
                               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all" />
                    </div>

                    {/* City / State / Zip */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                        <div className="col-span-2 sm:col-span-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">City <span className="text-orange-500">*</span></label>
                            <input type="text" value={form.city} onChange={e => set('city', e.target.value)}
                                   placeholder="Abilene"
                                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">State <span className="text-orange-500">*</span></label>
                            <select value={form.state} onChange={e => set('state', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all bg-white">
                                <option value="">—</option>
                                {states.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Zip Code <span className="text-orange-500">*</span></label>
                            <input type="text" value={form.zip} onChange={e => set('zip', e.target.value)}
                                   placeholder="79601" maxLength={5}
                                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all" />
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">What products would you like to hear more about?</label>
                        <p className="text-xs text-gray-400 mb-4">Select all that apply</p>
                        <div className="space-y-3">
                            {products.map(({ id, icon: Icon, title, desc }) => {
                                const checked = selected.includes(id)
                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => toggleProduct(id)}
                                        className={`w-full flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-200
                                            ${checked
                                            ? 'border-orange-400 bg-orange-50'
                                            : 'border-gray-200 hover:border-orange-200 hover:bg-gray-50'}`}
                                    >
                                        <div className={`rounded-xl p-2 shrink-0 transition-colors duration-200 ${checked ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600'}`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className={`font-semibold text-sm ${checked ? 'text-orange-700' : 'text-gray-900'}`}>{title}</p>
                                            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all
                                            ${checked ? 'bg-orange-600 border-orange-600' : 'border-gray-300'}`}>
                                            {checked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        disabled={!ready}
                        className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-lg transition-all duration-200 shadow-md shadow-orange-600/20 hover:shadow-lg hover:-translate-y-0.5 disabled:shadow-none disabled:translate-y-0"
                    >
                        Submit <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Legal */}
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                        This site is protected by reCAPTCHA and the Google{' '}
                        <a href="https://policies.google.com/privacy" className="underline hover:text-orange-500">Privacy Policy</a> and{' '}
                        <a href="https://policies.google.com/terms" className="underline hover:text-orange-500">Terms of Service</a> apply.{' '}
                        <span className="text-orange-500">*</span> Field required
                    </p>
                </div>
            </section>

        </main>
    )
}