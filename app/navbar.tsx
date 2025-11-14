"use client";

import BubbleMenu from "@/components/ui/bubble-nav";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fadein";
import { TextReveal } from "@/components/ui/text-reveal";
import { ArrowLeft, Signature } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const items = [
    {
      label: "home",
      href: "/",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "/about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "projects",
      href: "/projects",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "photos",
      href: "/photography",
      ariaLabel: "photos",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "everyday carry",
      href: "/edc",
      ariaLabel: "everyday carry",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
    {
      label: "library",
      href: "/library",
      ariaLabel: "library",
      rotation: 2,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
  ];

  return (
    // <nav className="w-full h-navbar flex flex-row justify-between items-center px-32">
    //   <Button
    //     variant={"secondary"}
    //     size={"icon"}
    //     onClick={() => router.back()}
    //     className="cursor-pointer"
    //   >
    //     <ArrowLeft />
    //   </Button>
    //   {/* <div className="text-sm text-monospace p-2 bg-red-500/40 text-red-200 rounded-md">this site is under construction by @leadheartx on x.com</div> */}
    //   <Signature />
    // </nav>
    //

    <FadeIn delay={2}>
      <BubbleMenu
        logo={
          <Link href="/" className="text-xl text-background no-underline">
            Pari
          </Link>
        }
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        className="px-32"
      />
    </FadeIn>
  );
}
