'use client'

import StickerPeel from "@/components/StickerPeel";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import ReactLenis from "lenis/react";

export default function Edc() {
    return (
        <div className='w-full py-16 overflow-hidden h-remaining flex flex-row items-center justify-between'>
            <div className="min-w-1/3 flex flex-row items-center justify-center h-full sm:px-6 lg:px-8">
                <div className='lex flex-col justify-start h-full gap-8'>
                    <FadeIn delay={0}>
                        <h1 className="text-5xl">Everyday Carry</h1>
                    </FadeIn>
                    <FadeIn delay={0.2} className="h-full">
                        <p className="text-md text-foreground/70 text-monospace w-full mt-4 text-justify mb-4">
                            things i carry around on me in 2025
                        </p>
                        <Separator className="w-full" />
                        <ReactLenis className="h-full max-h-[80%] overflow-hidden">
                            <div className='mb-8'>
                                <p className="mb-2">Out and About</p>
                                <ul className="text-monospace text-sm text-foreground/60">
                                    <li>iPhone 14</li>
                                    <li>Daily Objects Keychain (x2)</li>
                                    <li>Metal Card Holder</li>
                                    <li>Apple Lightning EarPods</li>
                                    <li>Prescription Glasses</li>
                                    <li>Black Lenskart Wayfarers</li> 
                                    <li>Novel (currently reading Men without Women by Murakami)</li> 
                                </ul>
                            </div>

                            <div className='mb-8'>
                                <p className="mb-2">Work Gear</p>
                                <ul className="text-monospace text-sm text-foreground/60">
                                    <li>Arctera Notebook</li>
                                    <li>Lamy Safari Fountain Pen</li>
                                    <li>Arctera Backpack</li>
                                    <li>Logitech K580 Bluetooth Keyboard</li>
                                    <li>Cheap Wireless Mouse</li>
                                    <li>Lenovo Thinkpad T14</li>
                                    <li>Zebronics 28000mAh Powerbank</li>
                                </ul>
                            </div>

                            <div className='mb-8'>
                                <p className="mb-2">Skincare</p>
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
            <div className='w-full h-full flex flex-col px-8 items-center justify-center border-2 border-dashed border-foreground/20 rounded-2xl'>
                <StickerPeel
                    imageSrc={"https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Cases%20and%20Covers/Images/262166_0_dpigga.png?tr=w-640"}
                    width={400}
                    rotate={10}
                    peelBackHoverPct={10}
                    peelBackActivePct={20}
                    initialPosition={{ x: 0, y: 0 }}
                />

                <StickerPeel
                    imageSrc={"https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Camper-Keychain-Clip-Brown-VieW.png?tr=cm-pad_resize,v-3,w-960,h-863,dpr-2"}
                    width={300}
                    rotate={10}
                    peelBackHoverPct={10}
                    peelBackActivePct={20}
                    initialPosition={{ x: -520, y: -300 }}
                />

                <StickerPeel
                    imageSrc={"https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Camper-Keychain-Clip-Black-VieW.png?tr=cm-pad_resize,v-3,w-960,h-863,dpr-2"}
                    width={300}
                    rotate={40}
                    peelBackHoverPct={10}
                    peelBackActivePct={20}
                    initialPosition={{ x: -520, y: -140 }}
                />

            </div>
        </div>
    )
}