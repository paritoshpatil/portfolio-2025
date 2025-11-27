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
import { TextReveal } from "@/components/ui/text-reveal";
import TiltedCard from "@/components/ui/tilted-card";

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
    <main className="flex flex-row w-full items-center sm:px-6 lg:px-8 mt-16">
      <div className="flex flex-col items-center justify-center w-full">
        <FadeIn delay={0.4}>
          <div
            className="border border-dashed border-muted-foreground rounded-md p-4 text-center cursor-pointer hover:cursor-none hover:border-solid"
            ref={triggerRef}
          >
            <h1 className="text-3xl text-muted-foreground text-left">
              Hello, my name is{" "}
              <span className="italic text-foreground">Pari.</span>
            </h1>
          </div>
          {tooltip}
        </FadeIn>

        <FadeIn delay={0.8} className="w-full mt-16 text-center">
          <div className="text-8xl text-foreground w-full">
            <TextReveal
              variant="blur"
              className="italic"
              delay={1}
              staggerDelay={0.04}
            >
              I Make Stuff on the Internet.
            </TextReveal>
            <br />
            <TextReveal
              variant="blur"
              className="italic"
              delay={2}
              staggerDelay={0.04}
            >
              For the Internet.
            </TextReveal>
          </div>
        </FadeIn>

        {/*  Virtues  */}
        <FadeIn delay={3.2} className="w-full mt-48 text-center">
          <div className="text-md text-muted-foreground text-center">
            <p className="text-4xl text-foreground mb-8">Virtues</p>
            <div className="w-full flex flex-row justify-between items-center gap-8">
              <p className="min-w-60 flex flex-row items-center gap-4 mb-4 text-monospace">
                {/*<CircleFadingPlus /> */}
                find creative solutions
              </p>
              <div className="w-full border border-muted-foreground/50 mb-2"></div>
              <p className="min-w-40 flex flex-row items-center gap-4 mb-4 text-monospace">
                {/*<CircleSlash2Icon /> */}
                no half measures
              </p>
              <div className="w-full border border-muted-foreground/50 mb-2"></div>

              <p className="min-w-60 flex flex-row items-center gap-4 mb-4 text-monospace">
                {/*<SmileIcon /> */}
                whatever happens, happens
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
      {/*<div className="flex flex-row items-center justify-center w-full">
        <FadeIn
          delay={1.8}
          className="w-full h-full flex flex-row items-center justify-end rounded-lg"
        >
          <TiltedCard
            imageSrc="/pari 2.jpeg"
            altText="Pari Photo"
            captionText="😁"
            containerHeight="600px"
            containerWidth="500px"
            imageHeight="600px"
            imageWidth="500px"
            rotateAmplitude={8}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-sm text-monospace">
                me @ pawna lake, pune. circa 2023
              </p>
            }
          />
        </FadeIn>
      </div>*/}
    </main>
  );
}
