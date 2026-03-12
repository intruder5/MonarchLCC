'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navLinks = [
    { label: 'Why Monarch?', href: '/Why' },
    {
        label: 'Loans',
        sublinks: [
            { label: 'About Personal Installment Loans', href: '/loan/Installment' },
            { label: 'Auto Club', href: '/loan/AutoClub' },
        ],
    },
    { label: 'Find a Branch', href: '/Discover' },
    { label: 'Taxes', href: '/loan/Tax' },
]

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)

    const closeMobile = () => {
        setMobileMenuOpen(false)
        setOpenDropdownIndex(null)
    }

    return (
        <header className="bg-white w-full border-b sticky top-0 z-50 border-gray-200">
            <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" onClick={closeMobile} className="flex-shrink-0 size-25 rounded-full mt-9">
                        <img src="mon.jpg" alt="Monarch" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                {navLinks.map((item) =>
                                    item.sublinks ? (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger className="bg-transparent text-gray-900 text-base font-medium hover:text-orange-600 data-[state=open]:text-orange-600 data-[state=open]:bg-orange-50 rounded-full cursor-pointer px-5 py-2.5 transition-colors duration-200">
                                                {item.label}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid gap-2 p-4 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100">
                                                    {item.sublinks.map((sublink) => (
                                                        <li key={sublink.href}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={sublink.href}
                                                                    className="block select-none rounded-xl px-4 py-3 text-base text-gray-800 font-medium hover:bg-orange-50 hover:text-orange-700 transition-colors duration-200"
                                                                >
                                                                    {sublink.label}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={item.href!}
                                                    className="text-gray-900 text-base font-medium px-5 py-2.5 rounded-full hover:text-orange-600 hover:bg-orange-50/50 transition-colors duration-200 inline-block"
                                                >
                                                    {item.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Link
                            href="/apply"
                            className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-2.5 rounded-full text-base font-semibold shadow-md shadow-orange-600/20 transition-all duration-200 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5"
                        >
                            Start Now
                        </Link>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white shadow-xl rounded-b-3xl">
                    <div className="px-6 pt-5 pb-8 space-y-1">
                        {navLinks.map((item, idx) => (
                            <div key={item.label}>
                                {item.sublinks ? (
                                    <>
                                        <button
                                            onClick={() => setOpenDropdownIndex(openDropdownIndex === idx ? null : idx)}
                                            className="w-full text-left text-base font-medium text-gray-900 py-3.5 px-5 rounded-2xl hover:bg-orange-50 hover:text-orange-700 transition-colors duration-200 flex justify-between items-center"
                                        >
                                            {item.label}
                                            <svg
                                                className={`w-5 h-5 transition-transform duration-200 ${openDropdownIndex === idx ? 'rotate-180' : ''}`}
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {openDropdownIndex === idx && (
                                            <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-orange-100 pl-4">
                                                {item.sublinks.map((sublink) => (
                                                    <Link
                                                        key={sublink.href}
                                                        href={sublink.href}
                                                        onClick={closeMobile}
                                                        className="block text-base text-gray-600 py-3 px-4 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-colors duration-200"
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        onClick={closeMobile}
                                        className="block text-base font-medium text-gray-900 py-3.5 px-5 rounded-2xl hover:bg-orange-50 hover:text-orange-700 transition-colors duration-200"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="pt-4 px-1">
                            <Link
                                href="/apply"
                                onClick={closeMobile}
                                className="block text-center w-full bg-orange-600 hover:bg-orange-700 text-white text-base font-semibold py-3.5 rounded-full transition-all duration-200 shadow-md shadow-orange-600/20"
                            >
                                Start Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}