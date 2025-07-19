'use client'

import { FadeIn } from "@/components/ui/fadein"
import { useCursorTooltip } from "@/components/ui/tooltip"
import { Tooltip } from "@radix-ui/react-tooltip"
import Rive, { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas"
import Link from "next/link"
import { ReactPortal, RefObject } from "react"

export function Links() {
    const photoTooltip = useCursorTooltip<HTMLDivElement>({
        content: (
            <div className="rounded-full">
                <video
                    width="300"
                    className="rounded-full width-16 overflow-hidden border-4 border-foreground/20"
                    autoPlay muted
                    >
                        <source src="/yashica.mp4" type="video/mp4"/>
                </video>       
            </div>
        ),
        maxWidth: 300,
        offset: { x: 20, y: -280 },
        className: "rounded-full flex items-center justify-center p-0 bg-transparent border-none"
    })

    const projectsTooltip = useCursorTooltip<HTMLDivElement>({
        content: (
                <Rive src="possession.riv" animations="Animation1" className="w-[400px] h-[100px]"/>
        ),
        maxWidth: 400,
        offset: { x: 20, y: -180 },
        className: "bg-background rounded-xl flex items-center justify-center px-4 py-0 border-4 border-foreground/20 "

    })
    
    const links: SectionLink[] = [
        {
            title: "Info",
            url: "/about",
            tooltip: null
        },
        {
            title: "Projects",
            url: "/projects",
            tooltip: projectsTooltip
        },
        {
            title: "Design",
            url: "/about",
            tooltip: null
        },
        {
            title: "Photography",
            url: "/photography",
            tooltip: photoTooltip
        },
        {
            title: "Music",
            url: "/about",
            tooltip: null
        },

    ]



    return (
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
            {links.map((link, index) => (
                <div key={index} className="  mr-8
            px-4
            py-2
            flex
            flex-row
            text-xl
            border
            border-dashed
            border-transparent
            hover:border-foreground/20 
            rounded-md
            transition-colors 
            duration-300
            ease-in-out
          ">
                    <FadeIn key={index} delay={0.5 + index * 0.2}>
                        <div ref={link.tooltip?.triggerRef}>
                            <Link key={index} href={link.url}>
                                {link.title}
                            </Link>
                            {link.tooltip?.tooltip}
                        </div>
                    </FadeIn>
                </div>
            ))}
        </div>
    )
}

export type SectionLink = {
    title: string,
    url: string,
    tooltip?: null | TooltipObject
}

export type TooltipObject = {
    triggerRef: RefObject<HTMLDivElement | null>
    tooltip: ReactPortal | null
}