import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import { SquareArrowUpRight } from "lucide-react";

export default function NextBlog(props: { id?: string }) {
  return (
    <div
      className="info-pane flex flex-col justify-start w-full gap-8 pr-4 pl-4"
      id={props.id}
    >
      <FadeIn delay={0}>
        <h1 className="text-5xl italic">Next-Blog</h1>
      </FadeIn>
      <div>
        <FadeIn delay={0.2}>
          <p className="text-md text-muted-foreground text-monospace w-full mt-4 text-justify">
            NextBlog is a hobby project I made to learn NextJS. It is a markdown
            enabled bloggin platform with a simple and clean UI. It uses
            Supabase for the Postgres backend and also the user Authentication,
            along with NextJS for the front-end and APIs, TailwindCSS for
            styling, Zod for schema validation, and a custom Markdown to HTML
            converter.
            <br /> <br />
          </p>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl">Tech-Stack: </p>
            <Badge className="text-monospace text-background">NextJS</Badge>
            <Badge className="text-monospace text-background">Supabase</Badge>
            <Badge className="text-monospace text-background">
              TailwindCSS
            </Badge>
            <Badge className="text-monospace text-background">Zod</Badge>
            <Badge className="text-monospace text-background">Markdown</Badge>
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
                href="https://github.com/paritoshpatil/next-blog"
                target="_blank"
                className="no-underline"
              >
                <span className="text-lg">View NextBlog on Github</span>
              </a>
            </Button>
            <Button
              variant="default"
              size="xl"
              className="w-1/2 cursor-pointer"
            >
              <SquareArrowUpRight className="large-icon" />
              <a
                href="https://next-blog-two-nu.vercel.app/"
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
