import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";

export default function LibraryIntro() {
  return (
    <FadeIn duration={1.6}>
      <p className="text-md text-muted-foreground text-monospace w-full mt-4 text-justify">
        Like many kids, I loved reading in school but drifted away from it
        during high school and college. Around the same time, I developed
        persistent insomnia that lingered for years. Working in tech only made
        it worse—I spent all day in front of a screen, then carried the habit
        into late nights. To break the cycle, I began reading again before bed.
        While sleep is still a struggle, this helped me reset my routine and
        build a steady habit of finishing at least one book a month.
        <br />
        <br />
        These are my bite sized book reviews
      </p>
      <Separator className="w-full" />
      <p className="text-md text-muted-foreground text-monospace w-full mt-4 text-justify">
        Select a book on the side to read my review of it.
      </p>
    </FadeIn>
  );
}
