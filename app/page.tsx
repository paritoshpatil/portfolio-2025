'use client'
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import {useCursorTooltip} from "@/components/ui/tooltip";
import pari from "../public/pari.jpeg"

export default function Home() {
    const {triggerRef, tooltip} = useCursorTooltip({
        content: (
            <div className="space-y-2 w-[300px]">
                <Image
                    src={pari}
                    alt="Preview"
                    width={300}
                    height={300}
                    className="rounded-md aspect-square"
                />
                <div className="flex items-end justify-end">
                <p className="text-sm text-muted-foreground align-right">
                    circa 2019 -- nasik, MH
                </p>
                </div>
            </div>
        ),
        maxWidth: 500,
        offset: {x: 20, y: -20}
    })

    return (
        <main className="flex flex-col items-start justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
            <div className="border border-dashed border-foreground/20 rounded-md p-4 text-center cursor-pointer">
                <h1 ref={triggerRef} className="text-5xl">Hello, I'm Pari.</h1>
                {tooltip}
            </div>
            <Separator className="w-1/2 max-w-1/2"/>
            <p className="text-md text-foreground/70 text-monospace max-w-1/2">
                Welcome to my portfolio. I'm a developer, musician and a bunch of other things.
                <br/>
                This is a place where I showcase my work, skills & other interests.</p>
        </main>
    );
}
