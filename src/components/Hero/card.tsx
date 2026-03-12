'use client'
import { DollarSign, FileText, Car, ArrowRight } from 'lucide-react';
import Link from 'next/link'

export default function LoanCards() {
    const cards = [
        {
            title: "Personal Loan",
            description: "Fixed rates, flexible terms, fast funds for emergencies, debt consolidation & more.",
            buttonText: "Apply Now",
            href: "/apply",
            icon: DollarSign,
        },
        {
            title: "File Taxes",
            description: "Easy tax preparation with no up-front fees — we handle the hard part for you.",
            buttonText: "Get Started",
            href: "/loan/Tax",
            icon: FileText,
        },
        {
            title: "Auto Club",
            description: "24/7 roadside assistance, towing, battery service & emergency support.",
            buttonText: "Learn More",
            href: "/loan/AutoClub",
            icon: Car,
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group relative overflow-hidden rounded-2xl bg-orange-600 p-8 flex flex-col gap-6 hover:bg-orange-700 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-600/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="text-white text-xl font-bold mb-2">{card.title}</h3>
                                <p className="text-orange-100 text-[15px] leading-relaxed">{card.description}</p>
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-white font-semibold font-mono text-sm">
                                {card.buttonText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </div>

                            {/* Decorative circle */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300" />
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}