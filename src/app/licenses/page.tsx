import { FileText, ExternalLink } from 'lucide-react'

const states = [
    {
        state: "New Mexico",
        docs: [
            { label: "Mandatory Consumer Information Brochure", href: "#" },
            { label: "Loan Rate and Fees Disclosure", href: "#" },
            { label: "New Mexico Web License", href: "#" },
        ],
        notices: [
            {
                title: "New Mexico Concerns and Complaints",
                content: `TO REPORT A PROBLEM OR COMPLAINT WITH THIS LENDER, YOU MAY WRITE OR CALL:\n\nMonarch Finance / Compliance Dept\n123 Monarch Lane, Abilene, TX 79601\n(800) MON-ARCH\ncompliance@monarchfinance.com`,
            },
            {
                title: "Regulatory Information",
                content: `This lender is licensed and regulated by the New Mexico Regulation and Licensing Department, Financial Institutions Division, P.O. Box 25101, 2550 Cerrillos Road, Santa Fe, New Mexico 87504.`,
                link: {
                    label: "Visit rld.nm.gov/financial-institutions",
                    href: "https://www.rld.nm.gov/financial-institutions",
                },
                phone: "(505) 476-4885",
            },
        ],
    },
    {
        state: "Missouri",
        docs: [
            { label: "Missouri Loan Rate and Fees Disclosure", href: "#" },
            { label: "Missouri Call Center License", href: "#" },
        ],
        notices: [],
    },
    {
        state: "Nevada",
        docs: [
            { label: "Nevada Loan Rate and Fees Disclosure", href: "#" },
        ],
        notices: [
            {
                title: "Regulated by the Nevada Financial Institutions Division",
                content: null,
                nrs: true,
            },
        ],
    },
]

export default function LicensesPage() {
    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">Licenses & Disclosures</h1>
                    <p className="text-orange-100 text-lg max-w-xl mx-auto">
                        Monarch Finance is licensed and regulated in the states we serve. Find your state's disclosures below.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-3xl mx-auto px-6 py-16 space-y-12">
                {states.map((s) => (
                    <div key={s.state} className="border-b border-gray-100 pb-12 last:border-0">

                        {/* State Header */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-orange-600 rounded-full inline-block" />
                            {s.state}
                        </h2>

                        {/* Documents */}
                        {s.docs.length > 0 && (
                            <div className="space-y-3 mb-6">
                                {s.docs.map((doc) => (
                                    <a
                                        key={doc.label}
                                        href={doc.href}
                                        className="flex items-center gap-3 group border border-gray-200 hover:border-orange-200 hover:shadow-md rounded-xl px-5 py-4 transition-all duration-200"
                                    >
                                        <div className="bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white rounded-lg p-2 transition-colors duration-200 shrink-0">
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <span className="text-gray-800 font-medium text-[15px] group-hover:text-orange-600 transition-colors flex-1">
                                            {doc.label}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-orange-400 transition-colors shrink-0" />
                                    </a>
                                ))}
                            </div>
                        )}

                        {/* Notices */}
                        {s.notices.map((notice, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-4">
                                <p className="font-bold text-gray-900 mb-3">{notice.title}</p>

                                {notice.nrs ? (
                                    <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                                        <p className="font-semibold text-gray-700">NRS 604A.583 Required Notices</p>
                                        <p>A licensee who has been issued a license to operate a high-interest loan service shall place the following notices on marketing materials and advertising when space or time reasonably permits:</p>
                                        <ol className="space-y-2 list-decimal list-inside">
                                            <li>High-interest loans should be used for short-term financial needs only and not as a long-term financial solution.</li>
                                            <li>Customers with credit difficulties should seek credit counseling before entering into any high-interest loan transaction.</li>
                                        </ol>
                                    </div>
                                ) : (
                                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{notice.content}</p>
                                )}

                                {notice.link && (
                                    <a href={notice.link.href} target="_blank" rel="noopener noreferrer"
                                       className="inline-flex items-center gap-1 text-orange-600 hover:underline text-sm mt-3 font-medium">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        {notice.link.label}
                                    </a>
                                )}

                                {notice.phone && (
                                    <p className="text-gray-500 text-sm mt-1">
                                        Phone: <a href={`tel:${notice.phone}`} className="text-orange-600 hover:underline">{notice.phone}</a>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                {/* General Complaints */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <p className="font-bold text-gray-900 mb-2">General Complaints & Concerns</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        TO REPORT A PROBLEM OR COMPLAINT WITH THIS LENDER, YOU MAY WRITE OR CALL:
                    </p>
                    <p className="text-gray-700 text-sm font-medium">Monarch Finance / Compliance Dept</p>
                    <p className="text-gray-600 text-sm">123 Monarch Lane, Abilene, TX 79601</p>
                    <a href="tel:8006662742" className="text-orange-600 hover:underline text-sm block mt-1">(800) MON-ARCH</a>
                    <a href="mailto:compliance@monarchfinance.com" className="text-orange-600 hover:underline text-sm">compliance@monarchfinance.com</a>
                </div>
            </section>

        </main>
    )
}