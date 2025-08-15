'use client'
import { FadeIn } from "@/components/ui/fadein";
import LatestProject from "./latest-project";
import Possession from "./possession";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import LeftPane from "./left-pane";


export default function Projects() {
    const [currentSection, setCurrentSection] = useState('latest')

    let videoSrc = '' 
    if (currentSection === 'latest' || currentSection === 'possession') { 
        videoSrc = '/Possession QuickStart.mp4' 
    } 
    else if (currentSection === 'nextblog') { 
        videoSrc = '/NextBlog Hero.mp4' 
    } 
    else if (currentSection === 'leadheart') { 
        videoSrc = '/LeadHeart Hero.mp4' 
    }
    else { 
        videoSrc = '/Possession Quickstart.mp4' 
    }

    return (
        <main className="flex flex-row items-center justify-center h-remaining sm:px-6 lg:px-8">
            <LeftPane onSectionChange={setCurrentSection}/>
            <div className="w-1/2 h-full px-16 flex flex-col items-center justify-center">
                    <FadeIn delay={0.4}>
                        <video key={videoSrc} autoPlay muted loop>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </FadeIn>
                </div>
        </main>
    )
}

