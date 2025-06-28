import { FadeIn } from "@/components/ui/fadein"
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
            url: "/about"
        },
        {
            title: "Music",
            url: "/about"
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
                        <Link key={index} href={link.url}>
                            {link.title}
                        </Link>
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