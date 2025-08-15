'use client'
import { FadeIn } from "@/components/ui/fadein";
import LatestProject from "./latest-project";
import Possession from "./possession";
import { useEffect } from "react";
import Lenis from "lenis";
import LeftPane from "./left-pane";


export default function Projects() {
    

    return (
        <main className="flex flex-row items-center justify-center h-remaining sm:px-6 lg:px-8">
            <LeftPane />
            <div className="w-1/2 h-full px-16 flex flex-col items-center justify-center">
                    <FadeIn delay={0.4}>
                        <video autoPlay muted loop>
                            <source src="/NextBlog Hero.mp4" />
                        </video>
                    </FadeIn>
                </div>
        </main>
    )
}