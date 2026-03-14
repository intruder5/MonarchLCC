import Hero from '@/components/Hero/hero';
import Nav from "@/components/Hero/nav";
import Crd from "@/components/Hero/card";
import Third from "@/components/Hero/third";
import Footer from "@/components/Hero/footer";
import { Analytics } from "@vercel/analytics/next"

export default function App() {
    return (
        <div>
            <Analytics />
            <Nav/>
            <Hero/>
            <Crd />
            <Third/>
            <Footer />
        </div>
    )
}