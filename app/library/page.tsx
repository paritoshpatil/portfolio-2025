"use client"
import Book, { BookProps } from "@/components/ui/book";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import ReactLenis from "lenis/react";
import { useState } from "react";
import LibraryIntro from "./library-intro";
import Stars from "@/components/ui/stars";

export default function Library() {
    const [selected, setSelected] = useState(-1);
    return <ReactLenis className='h-full mb-16 pb-16 overflow-hidden'>
            <div className="flex flex-row items-center justify-center h-remaining sm:px-6 lg:px-8">
                <div className='info-pane flex flex-col justify-start w-1/2 gap-8'>
                    <FadeIn delay={0} key={`review-${selected}`} duration={2}>
                        <h1 className="text-5xl">
                            { selected < 0 ? "Library" : books[selected].title }
                        </h1>
                    </FadeIn>
                    <div className="h-full">
                        <FadeIn delay={0.2}>
                            {
                                selected < 0 &&
                                <LibraryIntro />
                            }

                            {
                                selected >= 0 &&
                                <div className="h-full flex flex-col">
                                    <FadeIn key={`review-${selected}`} delay={0.2} duration={1.6}>
                                        <p className="text-sm text-monospace text-justify whitespace-pre-wrap mb-8">
                                            {books[selected].review}
                                        </p>
                                    </FadeIn>

                                    <FadeIn key={`rating-${selected}`} delay={0.4} duration={1.6}>
                                        <Stars rating={books[selected].rating ?? 0} />
                                    </FadeIn>
                                </div>
                            }
                        </FadeIn>
                    </div>

                    <div>
                       
                    </div>
                </div>
                <div className='w-1/2 h-2/3 pl-8'>
                     <FadeIn delay={0.4} className="w-full h-full px-8 flex flex-col items-start justify-center">
                            <div className='h-full flex flex-row gap-4 justify-between'>
                                {/* home selector */}
                                <div className="h-full w-14 flex flex-col items-center justify-start bg-transparent border border-foreground rounded-sm cursor-pointer"
                                    onClick={() => setSelected(-1)}
                                >
                                    <p className="[writing-mode:vertical-rl] m-4 text-xl text-foreground">Home</p>
                                </div>

                                {/* actual books */}
                                {
                                    books.map((book, index) => (
                                        <Book key={index} {...book} onClick={() => setSelected(index)} />
                                    ))
                                }
                             </div>
                        </FadeIn>
                </div>
            </div>
        </ReactLenis>

}

export const books: BookProps[] = [
    {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        image: "/books/kafka.jpg",
        color: "bg-slate-900",
        textColor: "text-foreground",
        rating: 5,
        review: `Kafka on the Shore was my first Murakami novel, and I’m glad I finally took the plunge. I’d long hesitated, worried that the English translations might dilute his ideas, but this quickly became one of my deserted-island books.

The story alternates between two narrators: Kafka, a teenage runaway fleeing an Oedipus prophecy, and Nakata, an elderly man who can talk to cats. The shifting perspectives stack up like Jenga blocks, drawing you deeper until the surreal pieces begin to fit—though, as with most Murakami works, the ending resists neat explanation and invites interpretation.

What makes the book shine is its blend of tension, humor, absurdity, and fantasy, all wrapped in serene, dreamlike settings. The characters are unforgettable, the atmosphere immersive, and even the soundtrack recommendations are a treat.

Kafka may be on the shore, but this book swept me completely off the deep end.`
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        image: "/books/white-tiger.jpg",
        color: "text-background",
        textColor: "text-foreground",
        rating: 4,
        review: `I first read The White Tiger back in circa 2013 grade when I borrowed a copy from my friend Ajinkya. The striking cover art and the bold description — “Meet Balram Halwai, the White Tiger: Servant, Philosopher, Entrepreneur, Murderer ...” — immediately hooked me. Up to that point, my reading world had been limited to Enid Blyton, Goosebumps and NCERT textbooks, so this novel felt like a whole new universe.

The story follows Balram, a young man born into poverty in a nameless village, who becomes a driver for the son of a wealthy landlord. Moving to Delhi exposes him to a world of opportunity, corruption, and moral decay. When his master kills a homeless girl in a drunken accident, Balram is coerced into taking the blame — an act he accepts as his duty. But that moment sets him on a path of awakening, freedom, and ultimately a shocking climax that left me stunned.

What stood out most was how vividly Aravind Adiga painted India—the grime, the chaos, the absurdity, and the ambition — so much so that the novel felt like a movie playing in my head. It’s no surprise it was eventually adapted into one. A sharp, thrilling read, it was the first book that truly changed how I looked at storytelling. I even bought myself a copy after losing Ajinkya’s (sorry, bro).
                `
    },
    {
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        image: "/books/norwegian-wood.jpg",
        color: "bg-red-500",
        textColor: "text-foreground",
        rating: 4,
        review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas iste saepe dolores earum. Ipsam tempore perferendis fugit labore veritatis, quas modi, illo quibusdam quidem expedita vitae? Tempore dicta vero aut.
            `
    },
    {
        title: "After Dark",
        author: "Haruki Murakami",
        image: "/books/after-dark.jpg",
        color: "bg-stone-800",
        textColor: "text-foreground",
        rating: 3,
        review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas iste saepe dolores earum. Ipsam tempore perferendis fugit labore veritatis, quas modi, illo quibusdam quidem expedita vitae? Tempore dicta vero aut.
                `
    },
]