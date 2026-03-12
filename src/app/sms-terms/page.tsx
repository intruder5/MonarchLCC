import Link from 'next/link'
import { MessageSquare, Megaphone } from 'lucide-react'

const informational = [
    `Monarch Finance ("Monarch") sends text messages related to your requests for information, the application process, loan documentation, loan status, payment reminders, and other services such as tax form completion, filing, and submission. By Opting-In you agree to receive account related text messages sent by an autodialer or other automated platform from Monarch.`,
    'You can cancel the SMS service at any time. Just text "STOP" to the number from which you received the text. After you send "STOP" we will confirm your unsubscription via SMS. If you want to join again, just sign up as you did the first time.',
    'If you are experiencing issues with the messaging program you can reply with the keyword "HELP" for more assistance, or contact Monarch at (800) MON-ARCH or compliance@monarchfinance.com.',
    "You agree to provide us with a valid mobile number. Neither Monarch nor carriers supporting SMS services are liable for delayed or undelivered messages.",
    "Monarch does not charge for SMS messages; however, message and data rates may apply. You may receive a text update about your account up to five (5) times per month. Contact your wireless provider for questions about your text or data plan.",
    "If you have any questions regarding privacy, please read our Privacy Policy.",
]

const advertising = [
    `Monarch Finance ("Monarch") sends text messages related to loan opportunities, promotional offers, new services, and financial education information. By Opting-In you agree to receive text information sent by an autodialer or other automated platform about loan products, opportunities, and other related information.`,
    'You can cancel the SMS service at any time. Just text "STOP" to the short code. After you send "STOP" we will confirm your unsubscription via SMS. If you want to join again, just sign up as you did the first time.',
    'If you are experiencing issues with the messaging program you can reply with the keyword "HELP" for more assistance, or contact Monarch at (800) MON-ARCH or compliance@monarchfinance.com.',
    "You agree to provide us with a valid mobile number. Neither Monarch nor carriers supporting SMS services are liable for delayed or undelivered messages.",
    "Monarch does not charge for SMS messages; however, message and data rates may apply. You may receive text messages about our loan products and opportunities up to three (3) times per month. Contact your wireless provider for questions about your text or data plan.",
    "If you have any questions regarding privacy, please read our Privacy Policy.",
]

export default function SmsTermsPage() {
    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">SMS Terms</h1>
                    <p className="text-orange-100 text-lg">Last Modified: January 18, 2023</p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-3xl mx-auto px-6 py-16 space-y-12">

                {/* Informational */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-orange-100 text-orange-600 rounded-xl p-2.5">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Informational & Transactional Communications</h2>
                    </div>
                    <ol className="space-y-4">
                        {informational.map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="shrink-0 w-7 h-7 rounded-full bg-orange-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                                    {i + 1}
                                </span>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    {item.includes("Privacy Policy") ? (
                                        <>
                                            If you have any questions regarding privacy, please read our{' '}
                                            <Link href="/privacy" className="text-orange-600 hover:underline font-medium">Privacy Policy</Link>.
                                        </>
                                    ) : item}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="border-t border-gray-100" />

                {/* Advertising */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-orange-100 text-orange-600 rounded-xl p-2.5">
                            <Megaphone className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Advertising Communications</h2>
                    </div>
                    <ol className="space-y-4">
                        {advertising.map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="shrink-0 w-7 h-7 rounded-full bg-orange-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                                    {i + 1}
                                </span>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    {item.includes("Privacy Policy") ? (
                                        <>
                                            If you have any questions regarding privacy, please read our{' '}
                                            <Link href="/privacy" className="text-orange-600 hover:underline font-medium">Privacy Policy</Link>.
                                        </>
                                    ) : item}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Stop Card */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
                    <p className="font-bold text-gray-900 mb-2">Want to opt out?</p>
                    <p className="text-gray-600 text-sm mb-3">Text <span className="font-mono font-bold text-orange-600">STOP</span> to unsubscribe at any time, or <span className="font-mono font-bold text-orange-600">HELP</span> for assistance.</p>
                    <div className="flex justify-center gap-6 text-sm text-gray-500">
                        <a href="tel:8006662742" className="text-orange-600 hover:underline">(800) MON-ARCH</a>
                        <a href="mailto:compliance@monarchfinance.com" className="text-orange-600 hover:underline">compliance@monarchfinance.com</a>
                    </div>
                </div>

            </section>

        </main>
    )
}