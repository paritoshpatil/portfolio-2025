import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import { SquareArrowUpRight } from "lucide-react";

export default function Possession(props: {id?: string}) {
    return (
        <div className='info-pane flex flex-col justify-start w-full gap-8 pr-4' id={props.id}>
            <FadeIn delay={0}>
                <h1 className="text-5xl">Possession</h1>
            </FadeIn>
            <div>
                <FadeIn delay={0.2}>
                    <p className="text-md text-foreground/70 text-monospace w-full mt-4 text-justify">
                        Possession is a blazing-fast home inventory management application built with NextJS, ShadCN UI, and Supabase.
                        The headline feature of Possession is the single input on the main page that allows you to add items to your inventory
                        without having to switch between the inputs of a form element. Possession is smart and can update the autocomplete suggestions
                        as you type.

                        <br /> <br />

                        With Possession, your item entries look like this:
                        <br />
                        wallet/leather, brown/everyday carry/1500/0/catch-all tray/master bedroom
                    </p>
                    <Separator className="w-full" />
                </FadeIn>
            </div>
            <div>
                <FadeIn delay={0.4}>
                    <div className='flex flex-row gap-4'>
                        <Button variant="default" size="xl" className='w-1/2 cursor-pointer'>
                            <SquareArrowUpRight className='large-icon' />
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
    )
}