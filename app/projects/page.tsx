"use client";
import { FadeIn } from "@/components/ui/fadein";
import LatestProject from "./latest-project";
import Possession from "./possession";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import LeftPane from "./left-pane";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [currentSection, setCurrentSection] = useState("latest");
  let useVideo: boolean = true;

  useEffect(() => {
    if (useVideo && fadeVideoRef.current) {
      fadeVideoRef.current.rerender();
    }

    if (!useVideo && fadePhotoRef.current) {
      fadePhotoRef.current.rerender();
    }
  }, [currentSection]);

  const fadeVideoRef = useRef<{ rerender: () => void }>(null);
  const fadePhotoRef = useRef<{ rerender: () => void }>(null);

  let videoSrc = "";
  let photoSrc = "";
  if (currentSection === "latest" || currentSection === "possession") {
    useVideo = true;
    videoSrc = "/Possession QuickStart.mp4";
  } else if (currentSection === "nextblog") {
    useVideo = true;
    videoSrc = "/NextBlog Hero.mp4";
  } else if (currentSection === "leadheart") {
    useVideo = true;
    videoSrc = "/LeadHeart Hero.mp4";
  } else if (currentSection === "prsummary") {
    useVideo = false;
    photoSrc = "/PR Summary.jpg";
  } else if (currentSection === "artmix") {
    useVideo = false;
    photoSrc = "/Artmix Hero.jpg";
  } else {
    useVideo = true;
    videoSrc = "/Possession Quickstart.mp4";
  }

  return (
    <main className="flex flex-row items-center justify-center h-remaining sm:px-6 lg:px-8">
      <LeftPane onSectionChange={setCurrentSection} />
      <div className="w-1/2 h-full px-16 flex flex-col items-end justify-center">
        {useVideo && (
          <FadeIn delay={0.4} ref={fadeVideoRef}>
            <video key={videoSrc} autoPlay muted loop poster="/PRSummary.jpg">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </FadeIn>
        )}
        {!useVideo && (
          <FadeIn delay={0.4} ref={fadePhotoRef}>
            <img
              key={123}
              src={photoSrc}
              alt={photoSrc}
              className="w-full h-full"
            />
          </FadeIn>
        )}
      </div>
    </main>
  );
}
