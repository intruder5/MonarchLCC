export default function PrivacyPage() {
    const sections = [
        {
            title: "Introduction",
            content: `Monarch Finance ("Company" or "We") respect your privacy and are committed to protecting it through our compliance with this policy.

This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.

"You" and "Your" refer to you as an individual person. If You are accessing the Site as an employee or representative of any other person or entity including any automated service or program, "You" includes that person or entity and automated service or program.

This Privacy Policy supplements our Privacy Notice. Please also review the Terms of Use. The Terms of Use govern Your use of the Site. By using the Site, You agree to this Privacy Policy and the Terms of Use.`
        },
        {
            title: "This Policy Applies To Information We Collect",
            content: null,
            bullets: [
                "On this Website.",
                "In email, text, and other electronic messages between You and this Website.",
            ],
            note: "It does not apply to information collected offline, through any other means, or by any third party including through any application or content that may link to or be accessible from the Website."
        },
        {
            title: "Children Under the Age of 18",
            content: `Our Website is not intended for children under 18 years of age. No one under age 18 may provide any information to or on the Website. We do not knowingly collect personal information from children under 18. If You are under 18, do not use or provide any information on this Website. If we learn we have collected or received personal information from a child under 18, we will delete that information.`
        },
        {
            title: "Information We Collect About You",
            content: "We collect several types of information from and about users of our Website, including:",
            bullets: [
                "Personal information such as full name, date of birth, postal address, e-mail address, telephone number, social security number, driver's license number, employment information, and bank account or payment card information.",
                "Information about You that individually does not identify You, such as device type, internet connection, and usage details.",
            ],
            note: "We collect this information directly from You, automatically as You navigate the site, and from third parties such as our business partners."
        },
        {
            title: "Information You Provide to Us",
            content: "The information we collect on or through our Website may include:",
            bullets: [
                "Information provided by filling in forms on our Website, including loan application documents and supporting documents.",
                "Records and copies of Your correspondence, including email addresses, if You contact us.",
                "Your responses to surveys that we might ask You to complete for research purposes.",
                "Your search queries on the Website.",
            ]
        },
        {
            title: "Automatic Data Collection Technologies",
            content: "As You navigate through and interact with our Website, we may use automatic data collection technologies including:",
            bullets: [
                "Cookies — small files placed on your device to recognize you when you return.",
                "Web Beacons — small electronic files that permit us to count users who have visited pages or opened emails.",
                "JavaScript — used to capture device type and IP address for usage statistics and to optimize user experience.",
            ]
        },
        {
            title: "How We Use Your Information",
            content: "We use information we collect about You to:",
            bullets: [
                "Present our Website and its contents to You.",
                "Process Your loan inquiry, application, underwriting, funding, and servicing.",
                "Verify Your identity and prevent fraud.",
                "Notify You about changes to our Website or any products or services we offer.",
                "Carry out our obligations and enforce our rights arising from any loan contracts.",
                "Contact You about goods and services that may be of interest to You if You opt-in.",
            ]
        },
        {
            title: "Disclosure of Your Information",
            content: "We may disclose personal information that we collect or You provide:",
            bullets: [
                "To our subsidiaries and affiliates.",
                "To contractors and service providers bound by confidentiality obligations.",
                "To a buyer or successor in the event of a merger, sale, or similar proceeding.",
                "To comply with any court order, law, or legal process.",
                "To enforce our agreements, including for collection purposes.",
            ],
            note: "Sun Loan does not sell or share Your personal information with third parties for advertising purposes."
        },
        {
            title: "Choices About Your Information",
            content: "You can set Your browser to refuse all or some browser cookies, or to alert You when cookies are being sent. If You disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly."
        },
        {
            title: "Accessing and Correcting Your Information",
            content: "It is very important that Your personal information is accurate and up to date. You can review and change Your personal information by logging into the Website and visiting Your account profile page."
        },
        {
            title: "Changes to Our Privacy Policy",
            content: "We reserve the right to change or modify this Privacy Policy at our sole discretion at any time. If we make material changes to how we treat your personal information, we will update you through a notice on the Website home page. Your continued use of the site following the posting of changes means You accept those changes."
        },
        {
            title: "Contact Information",
            content: null,
            contact: true,
        },
    ]

    return (
        <main className="bg-white">

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
                    <p className="text-orange-200 uppercase tracking-widest text-sm font-semibold mb-4">Legal</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">Privacy Policy</h1>
                    <p className="text-orange-100 text-lg">Last modified: January 1, 2026</p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-3xl mx-auto px-6 py-16 space-y-12">
                {sections.map((section) => (
                    <div key={section.title} className="border-b border-gray-100 pb-10 last:border-0">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>

                        {section.content && (
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-4">{section.content}</p>
                        )}

                        {section.bullets && (
                            <ul className="space-y-2 mb-4">
                                {section.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <span className="text-orange-500 mt-1 shrink-0">•</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {section.note && (
                            <p className="text-gray-500 text-sm leading-relaxed italic border-l-2 border-orange-200 pl-4">
                                {section.note}
                            </p>
                        )}

                        {section.contact && (
                            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 text-gray-600 space-y-1">
                                <p className="font-bold text-gray-900 mb-2">Monarch Finance</p>
                                <p>123 Monarch Lane</p>
                                <p>Abilene, TX 79601</p>
                                <a href="mailto:compliance@monarchfinance.com" className="text-orange-600 hover:underline block mt-2">
                                    compliance@monarchfinance.com
                                </a>
                                <a href="tel:8006662742" className="text-orange-600 hover:underline block">
                                    (800) MON-ARCH
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </section>

        </main>
    )
}