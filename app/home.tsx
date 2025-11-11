"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useCursorTooltip } from "@/components/ui/tooltip";
import pari from "../public/pari.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/fadein";
import { Links } from "./links";
import MagnetLines from "@/components/ui/MagnetLines";
import UnicornScene from "unicornstudio-react/next";

export default function Home() {
  const { triggerRef, tooltip } = useCursorTooltip<HTMLDivElement>({
    content: (
      <div className="rounded-full">
        <Image
          src={pari}
          alt="Preview"
          width={300}
          height={300}
          className="rounded-full aspect-square border-4 border-foreground/20 shadow-xl"
        />
      </div>
    ),
    maxWidth: 500,
    offset: { x: 20, y: -280 },
    className:
      "rounded-full flex items-center justify-center p-0 bg-transparent border-none",
  });

  return (
    <main className="flex flex-row w-full items-center sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-center w-full">
        <FadeIn delay={0.1}>
          <div
            className="border border-dashed border-foreground/20 rounded-md p-4 text-center cursor-pointer hover:bg-accent"
            ref={triggerRef}
          >
            <h1 className="text-5xl">Hello, I'm Pari.</h1>
          </div>
          {tooltip}
        </FadeIn>

        <FadeIn delay={0.2} className="w-full">
          <Separator className="w-full" />
          <p className="text-md text-foreground/70 text-monospace w-full">
            Welcome to my portfolio. I'm a developer, musician and a bunch of
            other things.
            <br />
            This is a place where I showcase my work, skills & other interests.
          </p>
        </FadeIn>

        <div className="mt-16">
          <Links />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <FadeIn
          delay={1.7}
          className="w-full h-full flex flex-row items-center justify-center rounded-lg"
        >
          {/*<MagnetLines
            rows={10}
            columns={10}
            containerSize="50vmin"
            lineColor="white"
            lineWidth="0.2vmin"
            lineHeight="3vmin"
            baseAngle={0}
            style={{ margin: "2rem" }}
          />*/}
          <UnicornScene
            className="unicorn-scene ml-16 "
            projectId="8wvgb2QptnF0sKD8ChgI"
            width={640}
            height={800}
          />
        </FadeIn>
      </div>
    </main>
  );
}
