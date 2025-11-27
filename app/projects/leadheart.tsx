import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import { SquareArrowUpRight } from "lucide-react";

export default function LeadHeart(props: { id?: string }) {
  return (
    <div
      className="info-pane flex flex-col justify-start w-full gap-8 pr-4 pl-4"
      id={props.id}
    >
      <FadeIn delay={0}>
        <h1 className="text-5xl italic">LeadHeart</h1>
      </FadeIn>
      <div>
        <FadeIn delay={0.2}>
          <p className="text-md text-muted-foreground text-monospace w-full mt-4 text-justify">
            I make music under the pseudonym LeadHeart, and I made this website
            to showcase it. It is a static website made with Angular and
            connects to my Spotify page using the Spotify API. The stand-out
            feature is the iPadOS style cursor that snaps to target components,
            which is completely custom built using CSS and TypeScript.
            <br /> <br />
          </p>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl">Tech-Stack: </p>
            <Badge className="text-monospace text-background">Angular</Badge>
            <Badge className="text-monospace text-background">
              Spotify API
            </Badge>
            <Badge className="text-monospace text-background">Vercel</Badge>
          </div>
          <Separator className="w-full" />
        </FadeIn>
      </div>
      <div>
        <FadeIn delay={0.4}>
          <div className="flex flex-row gap-4">
            <Button variant="ghost" size="xl" className="w-1/2 cursor-pointer">
              <SquareArrowUpRight className="large-icon" />
              <a
                href="https://github.com/paritoshpatil/leadheart"
                target="_blank"
                className="no-underline"
              >
                <span className="text-lg">View LeadHeart on Github</span>
              </a>
            </Button>
            <Button
              variant="default"
              size="xl"
              className="w-1/2 cursor-pointer"
            >
              <SquareArrowUpRight className="large-icon" />
              <a
                href="https://leadheart.vercel.app/"
                target="_blank"
                className="no-underline"
              >
                <span className="text-lg">Visit the Site</span>
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
