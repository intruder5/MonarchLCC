'use client'
import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LoanCards() {
    const cards = [
        {
            title: "Personal Loan",
            description: "Fixed rates, flexible terms, fast funds for emergencies, debt consolidation & more.",
            buttonText: "Apply Now",
        },
        {
            title: "File Taxes",
            description: "Expert tax preparation • Maximum refunds • Fast, accurate & stress-free filing.",
            buttonText: "Get Started",
        },
        {
            title: "Auto Club",
            description: "24/7 roadside assistance, towing, battery service & emergency support.",
            buttonText: "Learn More",
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-12">
            {cards.map((card, i) => (
                <Card
                    key={card.title}
                    className={`
            group relative
            overflow-hidden
            border border-gray-200/80
            bg-white
            shadow-sm hover:shadow-xl
            hover:border-orange-200/70
            hover:-translate-y-1.5
            transition-all duration-300 ease-out
            rounded-xl
            gap-14
          `}
                >
                    <CardHeader className="pb-3 pt-6 px-6">
                        <CardTitle className="text-xl font-bold text-gray-900 tracking-tight">
                            {card.title} <DollarSign />
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-6 px-6 text-gray-600">
                        <p className="text-[15px] leading-relaxed">
                            {card.description}
                        </p>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 pt-2">
                        <Button
                            variant="default"
                            size="default"
                            className={`
                w-full
                bg-orange-600 hover:bg-orange-700
                text-white font-medium
                rounded-full
                transition-all duration-200
                group-hover:shadow-md group-hover:shadow-orange-600/20
                cursor-pointer
                font-mono
              `}
                        >
                            {card.buttonText}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}