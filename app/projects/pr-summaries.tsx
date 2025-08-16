import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import { SquareArrowUpRight } from "lucide-react";

export default function PRSummary(props: { id?: string }) {
    return (
        <div className='info-pane flex flex-col justify-start w-full gap-8 pr-4 pl-4' id={props.id}>
            <FadeIn delay={0}>
                <h1 className="text-5xl">AI Powered PR Summaries</h1>
            </FadeIn>
            <div>
                <FadeIn delay={0.2}>
                    <p className="text-md text-foreground/70 text-monospace w-full mt-4 text-justify">
                        This project was created at an internal Hackathon at my workplace, Arctera. The prompt 
                        was to create AI Powered tools that improved the DX of our teams. We ended up using the OpenAI 
                        API along with some custom GitHub Actions that provide a summary of every PR in a comment. This includes 
                        the files changed, what changes were made and a general summary, that can give a birds eye view of the 
                        PR, so developers can more efficiently review them. 

                        <br /> <br />
                    </p>

                    <div className="flex flex-row gap-2 items-center">
                        <p>Tech-Stack: </p>
                        <Badge className="text-monospace text-background">GitHub Actions</Badge>
                        <Badge className="text-monospace text-background">Python</Badge>
                        <Badge className="text-monospace text-background">OpenAI</Badge>
                        <Badge className="text-monospace text-background">ChatGPT 4o mini</Badge>
                    </div>
                    <Separator className="w-full" />
                </FadeIn>
            </div>
            <div>
                <FadeIn delay={0.4}>
                    <div className='flex flex-row gap-4'>
                        <Button variant="ghost" size="xl" className='w-1/2 cursor-pointer'>
                            <SquareArrowUpRight className='large-icon' />
                            <a href="https://github.com/paritoshpatil/possession-frontend/blob/main/.github/workflows/pr-summary.yml" target="_blank" className="no-underline">
                                <span className='text-lg'>View Source Code on GitHub</span>
                            </a>
                        </Button>
                        <Button variant="default" size="xl" className='w-1/2 cursor-pointer'>
                            <SquareArrowUpRight className='large-icon' />
                            <a href="https://github.com/paritoshpatil/possession-frontend/pull/12" target="_blank" className="no-underline">
                                <span className='text-lg'>Random PR for Testing</span>
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}