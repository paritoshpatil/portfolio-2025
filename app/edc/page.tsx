"use client";

import StickerPeel from "@/components/StickerPeel";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import ReactLenis from "lenis/react";

export default function Edc() {
  return (
    <div className="w-full pt-32 pb-16 overflow-hidden h-remaining flex flex-row items-center justify-between">
      <div className="min-w-1/3 flex flex-row items-center justify-center h-full sm:px-6 lg:px-8">
        <div className="lex flex-col justify-start h-full gap-8">
          <FadeIn delay={0}>
            <h1 className="text-5xl">Everyday Carry</h1>
          </FadeIn>
          <FadeIn delay={0.2} className="h-full">
            <p className="text-md text-foreground/70 text-monospace w-full mt-4 text-justify mb-4">
              things I carry on and around me in 2025
            </p>
            <Separator className="w-full" />
            <ReactLenis className="h-full max-h-[80%] overflow-hidden">
              <div className="mb-8">
                <p className="mb-2 text-3xl">Out and About</p>
                <ul className="text-monospace text-sm text-foreground/60">
                  <li>iPhone 14 (128 gigs)</li>
                  <li>MacBook Air M4 (256 gigs)</li>
                  <li>Daily Objects Keychain (x2)</li>
                  <li>Metal Card Holder</li>
                  <li>Apple Lightning EarPods</li>
                  <li>Prescription Glasses</li>
                  <li>Black Lenskart Wayfarers</li>
                  <li>
                    Novel (currently reading Men without Women by Murakami)
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <p className="mb-2 text-3xl">Work Gear</p>
                <ul className="text-monospace text-sm text-foreground/60">
                  <li>MacBook Air M4</li>
                  <li>Notebook</li>
                  <li>Lamy Safari Fountain Pen</li>
                  <li>Generic Backpack</li>
                  <li>Logitech K580 Bluetooth Keyboard</li>
                  <li>Cheap Wireless Mouse</li>
                  <li>Zebronics 28000mAh Powerbank</li>
                </ul>
              </div>

              <div className="mb-8">
                <p className="mb-2 text-3xl">Music Gear</p>
                <ul className="text-monospace text-sm text-foreground/60">
                  <li>MSI GL65 Laptop (main personal computer)</li>
                  <li>Ableton Live DAW</li>
                  <li>Nektar MIDI Keyboard</li>
                  <li>Audio Technica ATH-M20X</li>
                  <li>Mackie CRX-3 BT Studio Speakers</li>
                  <li>Blue Snowball USB Mic</li>
                  <li>Kreo Hive Mechanical Keyboard (Brown Switches)</li>
                  <li>Razer Viper Mouse</li>
                  <li>Hercules Impulse 200 DJ Deck</li>
                </ul>
              </div>

              <div className="mb-8">
                <p className="mb-2 text-3xl">Skincare</p>
                <ul className="text-monospace text-sm text-foreground/60">
                  <li>Cetaphil Moisturizer</li>
                  <li>Dot&Key Watermelon Toner</li>
                  <li>DermaCo Sunscreen</li>
                  <li>Khadi Natural Hand Cream</li>
                  <li>Nivea Men's Creme</li>
                  <li>Nivea Roll-on Deo</li>
                  <li>Bella Vita C.E.O. Eau De Parfum</li>
                </ul>
              </div>
            </ReactLenis>
          </FadeIn>
        </div>
      </div>
      <div className="w-full h-full flex flex-col px-8 items-center justify-center border-2 border-dashed border-foreground/20 rounded-2xl">
        <StickerPeel
          imageSrc={
            "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Cases%20and%20Covers/Images/262166_0_dpigga.png?tr=w-640"
          }
          width={300}
          rotate={0}
          peelBackHoverPct={10}
          peelBackActivePct={20}
          initialPosition={{ x: 480, y: -220 }}
        />

        <StickerPeel
          imageSrc={"/edc/house keys.png"}
          width={250}
          rotate={0}
          peelBackHoverPct={10}
          peelBackActivePct={20}
          initialPosition={{ x: -440, y: -320 }}
        />

        <StickerPeel
          imageSrc={"/edc/yellow journal.png"}
          width={140}
          rotate={0}
          peelBackHoverPct={3}
          peelBackActivePct={8}
          initialPosition={{ x: -240, y: 220 }}
        />

        <StickerPeel
          imageSrc={"/edc/black notebook.png"}
          width={140}
          rotate={0}
          peelBackHoverPct={5}
          peelBackActivePct={10}
          initialPosition={{ x: -400, y: 220 }}
        />

        <StickerPeel
          imageSrc={"/edc/card holder.png"}
          width={100}
          rotate={0}
          peelBackHoverPct={10}
          peelBackActivePct={20}
          initialPosition={{ x: 220, y: -220 }}
        />
      </div>
    </div>
  );
}
