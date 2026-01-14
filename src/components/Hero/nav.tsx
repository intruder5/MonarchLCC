'use client'
import React, {useState} from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navLinks = [
    {label: 'Why Monarch?', href: '/Why'},
    {
        label: 'Loans',
        sublinks: [
            {label: 'Online Loans in Alabama', href: '/loan/Alabama'},
            {label: 'Online Loans in Illinois', href: '/loan/Illinois'},
            {label: 'Online Loans in Missouri', href: '/loan/Missouri'},
            {label: 'Online Loans in New Mexico', href: '/loan/NewMexico'},
            {label: 'Online Loans in Oklahoma', href: '/loan/Oklahoma'},
            {label: 'Online Loans in Tennessee', href: '/loan/Tennessee'},
            {label: 'Online Loans in Texas', href: '/loan/Texas'},
            {label: 'Get a Loan In Person', href: '/loan/inperson'},
            {label: 'About Personal Installment Loans', href: '/loan/Installment'},
            {label: 'Auto Club', href: '/loan/AutoClub'},
        ],
    },
    {
        label: 'Resources',
        sublinks: [
            {label: 'Resources Home', href: '/resources/Home'},
            {label: 'Tax Questions & Advice', href: '/resources/advice'},
            {label: 'Education on Personal Loans', href: '/resources/Education'},
            {label: 'Personal Finance Basics', href: '/resources/Basics'},
            {label: 'Industry News', href: '/resources/News'},
            {label: 'MoneySKILL Personal Finance Courses', href: '/resources/Courses'},
        ],
    },
    {label: 'Find a Branch', href: '/Discover'},
]

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)

    return (
        <header className="bg-white max-w-8xl mx-auto border border-gray-300">
            <div className="px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-16 md:h-18">
                    {/* Logo - slightly bigger & bolder */}
                    <div className="flex-shrink-0 size-25 rounded-full mt-9 cursor-pointer">
                        <img src="mon.jpg" alt="Monarch"/>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10 lg:gap-12">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-3">
                                {navLinks.map((item, idx) =>
                                    item.sublinks ? (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger className="
                        bg-transparent
                        text-gray-900 text-base md:text-[15.5px] lg:text-base
                        font-medium
                        hover:text-orange-600
                        data-[state=open]:text-orange-600
                        data-[state=open]:bg-gray-200
                        rounded-md
                        cursor-pointer
                        px-5 py-2.5
                        transition-colors duration-200
                      ">
                                                {item.label}
                                            </NavigationMenuTrigger>

                                            <NavigationMenuContent>
                                                <ul className="grid gap-2.5 p-6 w-[340px] lg:w-[400px] bg-white rounded-3xl shadow-2xl">
                                                    {item.sublinks.map((sublink) => (
                                                        <li key={sublink.href}>
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={sublink.href}
                                                                    className="
                                    block select-none
                                    rounded-2xl px-5 py-3.5
                                    text-[15px] leading-tight
                                    text-gray-800 font-medium
                                    hover:bg-orange-50 hover:text-orange-700
                                    transition-colors duration-200
                                  "
                                                                >
                                                                    {sublink.label}
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
                                                    className="
                            text-gray-900 text-base md:text-[15.5px] lg:text-base
                            font-medium
                            px-5 py-2.5 rounded-full
                            hover:text-orange-600 hover:bg-orange-50/50
                            transition-colors duration-200
                          "
                                                >
                                                    {item.label}
                                                </a>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* CTA Button - slightly larger & more premium */}
                        <button className="
              bg-orange-600 hover:bg-orange-700
              text-white
              cursor-pointer
              px-8 py-3
              rounded-md
              text-base font-semibold
              shadow-md shadow-orange-600/20
              transition-all duration-200
              hover:shadow-lg hover:shadow-orange-600/30
              hover:-translate-y-0.5
            ">
                            Start Now
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 strokeWidth={2.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 strokeWidth={2.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - improved readability */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white rounded-b-3xl shadow-xl">
                    <div className="px-6 pt-6 pb-10 space-y-3">
                        {navLinks.map((item, idx) =>
                            item.sublinks ? (
                                <div key={item.label}>
                                    <button
                                        onClick={() => setOpenDropdownIndex(openDropdownIndex === idx ? null : idx)}
                                        className="
                      w-full text-left
                      text-lg font-medium text-gray-900
                      py-4 px-6 rounded-2xl
                      hover:bg-orange-50 hover:text-orange-700
                      transition-colors duration-200
                      flex justify-between items-center
                    "
                                        aria-expanded={openDropdownIndex === idx}
                                    >
                                        {item.label}
                                        <svg
                                            className={`w-6 h-6 transition-transform ${openDropdownIndex === idx ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </button>

                                    {openDropdownIndex === idx && (
                                        <div className="mt-2 mb-4 pl-5 space-y-2">
                                            {item.sublinks.map((sublink) => (
                                                <a
                                                    key={sublink.href}
                                                    href={sublink.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="
                            block text-base text-gray-700
                            py-3.5 px-5 rounded-xl
                            hover:bg-orange-50 hover:text-orange-700
                            transition-colors duration-200
                          "
                                                >
                                                    {sublink.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="
                    block text-lg font-medium text-gray-900
                    py-4 px-6 rounded-2xl
                    hover:bg-orange-50 hover:text-orange-700
                    transition-colors duration-200
                  "
                                >
                                    {item.label}
                                </a>
                            )
                        )}

                        <div className="pt-6 px-2">
                            <button className="
                w-full bg-orange-600 hover:bg-orange-700
                text-white text-lg font-semibold
                py-4 rounded-full
                transition-all duration-200
                shadow-md shadow-orange-600/20
                hover:shadow-lg
              ">
                                Start Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}