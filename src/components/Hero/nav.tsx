'use client'
import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface SubLink {
    label: string
    href: string
}

interface NavItem {
    label: string
    href?: string
    sublinks?: SubLink[]
}

const navLinks: NavItem[] = [
    { label: 'Why Monarch?', href: '/Why' },
    {
        label: 'Loans',
        sublinks: [
            { label: 'Online Loans in Alabama', href: '/tax/Alabama' },
            { label: 'Online Loans in Illinois', href: '/tax/Illinois' },
            { label: 'Online Loans in Missouri', href: '/tax/Missouri' },
            { label: 'Online Loans in New Mexico', href: '/tax/NewMexico' },
            { label: 'Online Loans in Oklahoma', href: '/tax/Oklahoma' },
            { label: 'Online Loans in Tennessee', href: '/tax/Tennessee' },
            { label: 'Online Loans in Texas', href: '/tax/Texas' },
            { label: 'Get a Loan In Person', href: '/tax/inperson' },
            { label: 'About Personal Installment Loans', href: '/tax/Installment' },
            { label: 'Auto Club', href: '/tax/AutoClub' },
        ],
    },
    {
        label: 'Resources',
        sublinks: [
            { label: 'Resources Home', href: '/resources/Home' },
            { label: 'Tax Questions & Advice', href: '/resources/advice' },
            { label: 'Education on Personal Loans', href: '/resources/Education' },
            { label: 'Personal Finance Basics', href: '/resources/Basics' },
            { label: 'Industry News', href: '/resources/News' },
            { label: 'MoneySKILL Personal Finance Courses', href: '/resources/Courses' },
        ],
    },
    { label: 'Find a Branch', href: '/Discover' },
]

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)

    return (
        <header className="mt-2 bg-white max-w-7xl mx-auto rounded-full border border-gray-300 shadow-2xl">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 font-extrabold text-orange-700 flex items-center gap-1.5">
                        <span className="font-mono tracking-tight">Monarch</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navLinks.map((item, idx) =>
                                    item.sublinks ? (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger className="bg-transparent text-black hover:text-orange-600 data-[state=open]:text-orange-600 rounded-full px-4 text-sm font-medium">
                                                {item.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid gap-2 p-5 w-[320px] lg:w-[380px] bg-white rounded-3xl shadow-xl">
                                                    {item.sublinks.map((sublink) => (
                                                        <li key={sublink.href}>
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={sublink.href}
                                                                    className="block select-none rounded-2xl p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 hover:text-orange-700 focus:bg-orange-50 focus:text-orange-700"
                                                                >
                                                                    <div className="text-sm font-medium leading-none">
                                                                        {sublink.label}
                                                                    </div>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuLink asChild>
                                                <a
                                                    href={item.href}
                                                    className="text-black hover:text-orange-600 transition-colors text-sm font-medium px-4 py-2 rounded-full"
                                                >
                                                    {item.label}
                                                </a>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <button className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-colors">
                            Start Now
                        </button>
                    </nav>

                    {/* Mobile button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white rounded-b-3xl pb-6">
                    <div className="px-5 pt-5 space-y-2">
                        {navLinks.map((item, idx) =>
                            item.sublinks ? (
                                <div key={item.label}>
                                    <button
                                        onClick={() => {
                                            setOpenDropdownIndex(openDropdownIndex === idx ? null : idx)
                                        }}
                                        className="w-full text-left text-black hover:text-orange-600 font-medium text-sm py-3 px-5 rounded-2xl hover:bg-orange-50 transition-colors flex justify-between items-center"
                                        aria-expanded={openDropdownIndex === idx}
                                    >
                                        {item.label}
                                        <svg
                                            className={`w-5 h-5 transition-transform ${openDropdownIndex === idx ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {openDropdownIndex === idx && (
                                        <div className="ml-4 mt-1 mb-3 space-y-1.5">
                                            {item.sublinks.map((sublink) => (
                                                <a
                                                    key={sublink.href}
                                                    href={sublink.href}
                                                    className="block text-gray-700 hover:text-orange-600 text-sm py-2.5 px-5 rounded-xl hover:bg-orange-50 transition-colors"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sublink.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block text-black hover:text-orange-600 font-medium text-sm py-3 px-5 rounded-2xl hover:bg-orange-50 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )
                        )}

                        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-colors mt-6">
                            Start Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}