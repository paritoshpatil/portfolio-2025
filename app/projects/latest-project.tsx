import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import { Mouse, SquareArrowUpRight } from "lucide-react";

export default function LatestProject(props: {id?: string}) {
    return (
        <div className='info-pane flex flex-col justify-start w-full gap-8 pr-4' id={props.id}>
            <FadeIn delay={0}>
                <h1 className="text-5xl">Projects</h1>
            </FadeIn>
            <div>
                <FadeIn delay={0.2}>
                    <p className="text-md text-foreground/70 text-monospace w-full mt-4 text-justify">
                        At any given time, I am working on 2-3 projects, at least one of which is always a software project.
                        Currently, my efforts are being put towards <a href="https://possession-5pqm59385-paritosh-patils-projects.vercel.app/" target="_blank">Possession</a>,
                        a home inventory management application I am building with the purpose of reducing the time and complexity of your usual
                        inventory systems. Possession is being built using <a href="https://nextjs.org/" target="_blank">NextJS</a>,
                        &nbsp;<a href="https://ui.shadcn.com/" target="_blank">ShadCN UI</a> & <a href="https://supabase.com/" target="_blank">Supabase</a>

                        <br />
                        <br />
                        I Build Stuff for the Internet, on the Internet.
                    </p>
                    <Separator className="w-full" />
                </FadeIn>
            </div>
            <div>
                <FadeIn delay={0.4}>
                    <div className='flex flex-row gap-4'>
                        <div className="flex flex-row gap-2 justify-center items-center w-full text-foreground/70">
                            <Mouse />
                            <p>Scroll with Momentum to see more</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}