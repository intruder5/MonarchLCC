import {Button} from "@/components/ui/button"


export default function Third() {
    return (
        <div className="flex flex-col items-center mt-52 w-10/12 mx-auto">
            <img className="rounded-full size-2xl mb-6" src="fam.jpg" alt="family"/>
            <T/>
        </div>
    )
}

export function T() {
    return (
        <div className="font-bold font-mono mt-10 text-orange-600 text-4xl text-center">
            <p className="mb-4">Affordable personal loans</p>
            <Ad/>
        </div>
    )
}

export function Ad() {
    return (
        <div>
            <p className="text-base text-gray-700 max-w-2xl">
                A personal installment loan with World gets you the money you need now while you build your financial
                future. We know that you are more than your credit score. That's why we make our loans affordable,
                accessible, and easy to manage—so you can start growing your credit from where you are right now,
                unlocking more financial possibilities along the way.
            </p>
            <Sd/>
        </div>
    )
}


export function Sd() {
    return (
        <div className="mt-6">
            <Button
                variant="default"
                size="lg"
                className="hover:bg-orange-700 rounded-full mb-5 bg-orange-600 cursor-pointer hover:text-white transition-colors"
            >
                Explore
            </Button>
        </div>
    )
}