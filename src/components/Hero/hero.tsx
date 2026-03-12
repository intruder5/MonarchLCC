'use client'
import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import gsap from 'gsap'

export default function Hero() {
    const labelRef = useRef(null)
    const headingRef = useRef(null)
    const paraRef = useRef(null)
    const buttonsRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            [labelRef.current, headingRef.current, paraRef.current, buttonsRef.current],
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            }
        )
    }, [])

    return (
        <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[65vh]">

                    <div className="py-16 md:py-0 flex flex-col gap-6">
                        <p ref={labelRef} className="text-orange-200 uppercase tracking-widest text-sm font-semibold">
                            Personal Loans & Tax Services
                        </p>
                        <h1 ref={headingRef} className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Worry-free loans & taxes.
                        </h1>
                        <p ref={paraRef} className="text-orange-100 text-lg leading-relaxed max-w-lg">
                            Quick personal loans and easy tax preparation — no matter your credit score. We're here to help unlock your financial goals.
                        </p>
                        <div ref={buttonsRef} className="flex flex-wrap gap-4 pt-2">
                            <Button asChild size="lg"
                                    className="bg-white text-orange-600 hover:bg-orange-50 font-bold font-mono rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                <Link href="/apply">Apply Now</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline"
                                    className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-bold font-mono rounded-full px-8 py-6 text-lg transition-all duration-200 cursor-pointer">
                                <Link href="/Discover">Find a Branch</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="hidden md:flex items-end justify-center h-full pt-8">
                        <img
                            src="ren.jpg"
                            alt="Monarch loan specialist"
                            className="w-full max-w-sm lg:max-w-md object-cover object-top rounded-t-3xl"
                            style={{ maxHeight: '65vh' }}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}