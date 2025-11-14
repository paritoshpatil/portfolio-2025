import { FadeIn } from "@/components/ui/fadein";
import { TextReveal } from "@/components/ui/text-reveal";
import ReactLenis from "lenis/react";

export default function About() {
  return (
    <main className="flex flex-col items-start justify-center h-full w-full px-4 py-12 sm:px-6 lg:px-8">
      <ReactLenis className="h-full max-h-full overflow-hidden">
        <TextReveal variant="blur" className="text-5xl italic mt-32">
          Hello, nice to meet you.
        </TextReveal>
        <FadeIn
          delay={0.4}
          className="font-mono text-muted-foreground text-lg mt-8 max-w-2/3 block break-keep"
        >
          I am Paritosh, you can call me Pari. I am a full-stack web developer
          based out of Pune. I have been working on building and maintaining
          high-scale high-performance web applications for the past 4 years.
        </FadeIn>
        <TextReveal
          variant="blur"
          className="text-5xl mt-16 pb-4 pr-2 italic"
          delay={0.8}
        >
          Right now, I'm
        </TextReveal>
        <ul className="text-monospace text-muted-foreground text-lg">
          <FadeIn delay={0.8} className="mb-2">
            · making music under the pseudonym LeadHeart
          </FadeIn>
          <FadeIn delay={1} className="mb-2">
            · collecting vintage cameras and tape-decks
          </FadeIn>
          <FadeIn delay={1.2} className="mb-2">
            · petting cats wherever I go
          </FadeIn>
          <FadeIn delay={1.4} className="mb-2">
            · making digital-art and designing stuff
          </FadeIn>
          <FadeIn delay={1.6} className="mb-2">
            · failing at keeping my house plants alive
          </FadeIn>
          <FadeIn delay={1.8} className="mb-2">
            · building a collection of sick memes
          </FadeIn>
        </ul>

        <TextReveal
          variant="blur"
          className="text-5xl italic mt-16 pr-2 mb-4"
          delay={1.2}
        >
          Let's Talk
        </TextReveal>

        <FadeIn
          delay={2.4}
          className="font-mono text-muted-foreground text-lg mb-4"
        >
          I'm always open to new opportunities! Here's what I can do for you:
        </FadeIn>
        <ul className="text-monospace text-muted-foreground text-lg">
          <FadeIn delay={2.6} className="mb-2">
            · design &amp; build beautiful and performant front-end interfaces
            in Angular, React or Vue
          </FadeIn>
          <FadeIn delay={2.8} className="mb-2">
            · architect and develop back-ends in .Net with your choice of
            database
          </FadeIn>
          <FadeIn delay={3} className="mb-2">
            · provide consultation for building websites really quick
          </FadeIn>
          <FadeIn delay={3.2} className="mb-2">
            · create clean and usable 2D &amp; 3D animations with Rive, Spline
            and Unicorn
          </FadeIn>
          <FadeIn delay={3.4} className="mb-2">
            · design a digital branding assets for your product
          </FadeIn>
          <FadeIn delay={3.6} className="mb-2">
            · score music for your project (or jam with you, that one's free)
          </FadeIn>
        </ul>
      </ReactLenis>
    </main>
  );
}
