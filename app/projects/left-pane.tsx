"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";
import LatestProject from "./latest-project";
import Possession from "./possession";
import NextBlog from "./nextblog";
import LeadHeart from "./leadheart";
import PRSummary from "./pr-summaries";
import Artmix from "./artmix";

export default function LeftPane({
  onSectionChange,
}: {
  onSectionChange: (id: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Create Lenis instance for smooth scrolling
    const lenis = new Lenis({
      wrapper: scrollRef.current,
      content: scrollRef.current,
      smoothWheel: true,
      lerp: 0.1,
      autoRaf: false,
    });

    // Animation loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Create Snap instance
    const snap = new Snap(lenis, {
      type: "mandatory", // always snap
      duration: 0.6, // snap animation duration (seconds)
    });

    const sectionsX = Array.from(
      scrollRef.current.querySelectorAll<HTMLElement>("section"),
    );

    // compute top offsets relative to the scroll wrapper
    const sectionYCoords = sectionsX.map((section) => {
      const rect = section.getBoundingClientRect();
      const wrapperRect = scrollRef.current!.getBoundingClientRect();
      const offsetY = rect.top - wrapperRect.top;
      return offsetY;
    });

    // Add snap points based on measured coordinates
    sectionYCoords.forEach((pos) => snap.add(pos));

    // Intersection Observer to detect visible section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id);
          }
        });
      },
      {
        root: scrollRef.current, // our scroll container
        threshold: 0.5, // 50% of section must be visible
      },
    );

    // Observe all sections
    const sections = scrollRef.current.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="w-1/2 max-h-1/2 overflow-hidden">
      <section className="mb-24" id="latest">
        <LatestProject id="latest" />
      </section>
      <section className="mb-24" id="possession">
        <Possession id="possession" />
      </section>
      <section className="mb-24" id="nextblog">
        <NextBlog id="nextblog" />
      </section>
      <section className="mb-24" id="leadheart">
        <LeadHeart id="leadheart" />
      </section>
      <section className="mb-24" id="prsummary">
        <PRSummary id="prsummary" />
      </section>
      <section className="mb-24" id="artmix">
        <Artmix id="artmix" />
      </section>
    </div>
  );
}
