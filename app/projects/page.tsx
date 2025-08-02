import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@radix-ui/react-separator";
import { Github, SquareArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <main className="flex flex-row items-center justify-center h-remaining sm:px-6 lg:px-8">
            <div className='info-pane flex flex-col justify-start w-1/2 gap-8'>
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
                                <Button variant="default" size="xl" className='w-1/2 cursor-pointer'>
                                    <SquareArrowUpRight className='large-icon'/>
                                    <a href="https://github.com/paritoshpatil/possession-frontend" target="_blank" className="no-underline">                            
                                        <span className='text-lg'>View Possession on Github</span>
                                    </a>
                                </Button>
                            <Button variant="outline" size="xl" className='w-1/2 cursor-pointer'>
                                <span className='text-lg'>Other Projects</span>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <div className="w-1/2 h-full px-16 flex flex-col items-center justify-center">
                    <FadeIn delay={0.4}>
                        <video autoPlay muted>
                            <source src="/Possession QuickStart.mp4" />
                        </video>
                    </FadeIn>
                </div>
        </main>
    )
}