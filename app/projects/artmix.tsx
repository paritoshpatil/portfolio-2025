import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import { SquareArrowUpRight } from "lucide-react";

export default function Artmix(props: { id?: string }) {
  return (
    <div
      className="info-pane flex flex-col justify-start w-full gap-8 pr-4 pl-4"
      id={props.id}
    >
      <FadeIn delay={0}>
        <h1 className="text-5xl italic">ArtMix</h1>
      </FadeIn>
      <div>
        <FadeIn delay={0.2}>
          <p className="text-md text-muted-foreground text-monospace w-full mt-4 text-justify">
            ArtMix is a hobby project I made in 2021 when the AI uprise was
            afoot. It uses DallE2 by OpenAI to generate famous artworks as if
            they were painted by a different artist. It currently has 10 artists
            and 10 paintings and each prompt has some randomness to it, so it is
            not deterministic. It is built with React and Vite and the images
            are served by OpenAI with the full project deployed on Vercel.
            <br /> <br />
          </p>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl">Tech-Stack: </p>
            <Badge className="text-monospace text-background">React</Badge>
            <Badge className="text-monospace text-background">Vite</Badge>
            <Badge className="text-monospace text-background">DallE2</Badge>
            <Badge className="text-monospace text-background">OpenAI</Badge>
            <Badge className="text-monospace text-background">
              TailwindCSS
            </Badge>
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
                href="https://github.com/paritoshpatil/artmix"
                target="_blank"
                className="no-underline"
              >
                <span className="text-lg">View Artmix on Github</span>
              </a>
            </Button>
            <Button
              variant="default"
              size="xl"
              className="w-1/2 cursor-pointer"
            >
              <SquareArrowUpRight className="large-icon" />
              <a
                href="https://artmix.vercel.app/"
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
