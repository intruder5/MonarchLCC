'use client'
import { useState } from 'react'
import { MapPin, Search, Phone, Clock, ArrowRight } from 'lucide-react'

const branches = [
    { id: 1, name: "Monarch – Downtown Abilene", address: "123 Pine St, Abilene, TX 79601", phone: "(325) 555-0101", hours: "Mon–Fri 9am–6pm", lat: 32.4487, lng: -99.7331 },
    { id: 2, name: "Monarch – North Abilene", address: "456 Treadaway Blvd, Abilene, TX 79602", phone: "(325) 555-0182", hours: "Mon–Fri 9am–6pm", lat: 32.4712, lng: -99.7185 },
    { id: 3, name: "Monarch – South Side", address: "789 S Clack St, Abilene, TX 79605", phone: "(325) 555-0173", hours: "Mon–Sat 9am–5pm", lat: 32.4201, lng: -99.7512 },
    { id: 4, name: "Monarch – Lubbock", address: "321 34th St, Lubbock, TX 79410", phone: "(806) 555-0144", hours: "Mon–Fri 9am–6pm", lat: 33.5779, lng: -101.8552 },
    { id: 5, name: "Monarch – Midland", address: "654 Wall St, Midland, TX 79701", phone: "(432) 555-0165", hours: "Mon–Fri 9am–5pm", lat: 31.9973, lng: -102.0779 },
    { id: 6, name: "Monarch – Odessa", address: "987 E 8th St, Odessa, TX 79761", phone: "(432) 555-0196", hours: "Mon–Sat 9am–5pm", lat: 31.8457, lng: -102.3676 },
]

export default function FindBranchPage() {
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState<number | null>(null)

    const filtered = branches.filter(b =>
        b.name.toLowerCase().includes(query.toLowerCase()) ||
        b.address.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Locations</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Find a Branch
                    </h1>
                    <p className="text-orange-100 text-lg md:text-xl max-w-2xl mx-auto">
                        With branches across Texas and beyond, opportunity is closer than you think. Not near a branch? Apply online anytime.
                    </p>
                </div>
            </section>

            {/* Search + Map + List */}
            <section className="max-w-7xl mx-auto px-6 py-16">

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mb-12">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search by city, address, or branch name..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="w-full pl-12 pr-5 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-800 text-[15px] transition-all"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Branch List */}
                    <div className="lg:col-span-2 space-y-4 max-h-[620px] overflow-y-auto pr-1">
                        {filtered.length === 0 && (
                            <div className="text-center text-gray-400 py-16">
                                <MapPin className="w-10 h-10 mx-auto mb-3 opacity-30" />
                                <p>No branches found for "{query}"</p>
                            </div>
                        )}
                        {filtered.map(branch => (
                            <div
                                key={branch.id}
                                onClick={() => setSelected(branch.id === selected ? null : branch.id)}
                                className={`
                                    group cursor-pointer rounded-2xl border p-5 transition-all duration-200
                                    ${selected === branch.id
                                    ? 'border-orange-400 bg-orange-50 shadow-md'
                                    : 'border-gray-200 hover:border-orange-200 hover:shadow-md'}
                                `}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`mt-0.5 rounded-lg p-2 transition-colors duration-200 ${selected === branch.id ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'}`}>
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900 text-[15px] mb-1">{branch.name}</p>
                                        <p className="text-gray-500 text-sm mb-2">{branch.address}</p>
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{branch.phone}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{branch.hours}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map Embed */}
                    <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: '620px' }}>
                        <iframe
                            title="Branch Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://maps.google.com/maps?q=Abilene+TX&t=m&z=10&output=embed&iwloc=near`}
                        />
                    </div>

                </div>
            </section>

            {/* Online Option Banner */}
            <section className="bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-orange-600 uppercase tracking-widest text-sm font-semibold mb-2">Can't make it in?</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Apply online, anytime</h2>
                        <p className="text-gray-500 max-w-md">
                            Not near a branch? No problem. Monarch offers fully online loans — apply from anywhere and get the funds you need quickly.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="shrink-0 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
                    >
                        Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            {/* Ready to Apply */}
            <section className="bg-gray-950 text-white">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">Ready to apply?</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Start your loan today</h2>
                    <p className="text-gray-400 text-lg mb-8">In-branch or online — we make it easy to get the funds you need.</p>
                    <a
                        href="#"
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Start Now
                    </a>
                </div>
            </section>

        </main>
    )
}