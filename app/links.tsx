import { FadeIn } from "@/components/ui/fadein"
import { useCursorTooltip } from "@/components/ui/tooltip"
import Link from "next/link"

export function Links() {
    const links: SectionLink[] = [
        {
            title: "Info",
            url: "/about"
        },
        {
            title: "Projects",
            url: "/about"
        },
        {
            title: "Design",
            url: "/about"
        },
        {
            title: "Photography",
            url: "/photography"
        },
        {
            title: "Music",
            url: "/about"
        },

    ]

    const { triggerRef, tooltip } = useCursorTooltip<HTMLDivElement>({
        content: (
            <div className="rounded-full">
                <video
                    width="400"
                    className="rounded-full width-16 overflow-hidden border-4 border-foreground/20"
                    autoPlay muted
                    >
                        <source src="/yashica.mp4" type="video/mp4"/>
                </video>       
            </div>
        ),
        maxWidth: 500,
        offset: { x: 20, y: -20 },
        className: "rounded-full flex items-center justify-center p-0 bg-transparent border-none"
    })

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
                        <div ref={triggerRef}>
                            <Link key={index} href={link.url}>
                                {link.title}
                            </Link>
                            {tooltip}
                        </div>
                    </FadeIn>
                </div>
            ))}
        </div>
    )
}

export type SectionLink = {
    title: string,
    url: string
}