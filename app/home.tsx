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
import BubbleMenu from "@/components/ui/bubble-nav";
import {
  CircleFadingPlus,
  CircleSlash2,
  CircleSlash2Icon,
  DotIcon,
  LineSquiggle,
  Signature,
  SmileIcon,
} from "lucide-react";

export default function Home() {
  const { triggerRef, tooltip } = useCursorTooltip<HTMLDivElement>({
    content: (
      <div className="rounded-full">
        {/*<Image
          src={pari}
          alt="Preview"
          width={300}
          height={300}
          className="rounded-full aspect-square border-4 border-foreground/20 shadow-xl"
        />*/}
        <span className="text-9xl">👋</span>
      </div>
    ),
    maxWidth: 500,
    offset: { x: -100, y: -100 },
    className:
      "rounded-full flex items-center justify-center p-0 bg-transparent border-none shadow-none",
  });

  return (
    <main className="flex flex-row w-full items-center sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-center w-full">
        <FadeIn delay={0.1}>
          <div
            className="border border-dashed border-foreground/20 rounded-md p-4 text-center cursor-pointer hover:cursor-none hover:border-solid"
            ref={triggerRef}
          >
            <h1 className="text-4xl text-foreground/70 text-left">
              Hello, my name is{" "}
              <span className="italic text-foreground">Pari.</span>
            </h1>
          </div>
          {tooltip}
        </FadeIn>

        <FadeIn delay={0.2} className="w-full mt-8">
          <p className="text-6xl text-foreground w-full">
            <span className="italic">I Make Stuff on the Internet.</span>
            <br />
            <span className="italic">For the Internet.</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="w-full mt-32">
          <div className="text-monospace text-lg text-muted-foreground">
            <p className="flex flex-row items-center gap-4 mb-4">
              <CircleFadingPlus /> The only muscle I exercise is my creative
              muscle.
            </p>
            <p className="flex flex-row items-center gap-4 mb-4">
              <CircleSlash2Icon /> No half measures.
            </p>
            <p className="flex flex-row items-center gap-4 mb-4">
              <SmileIcon /> Whatever happens, happens.
            </p>
          </div>
        </FadeIn>
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
            className="unicorn-scene ml-16"
            projectId="8wvgb2QptnF0sKD8ChgI"
            width={512}
            height={640}
          />
        </FadeIn>
      </div>
    </main>
  );
}
