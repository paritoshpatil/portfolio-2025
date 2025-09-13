"use client"
import Book, { BookProps } from "@/components/ui/book";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import ReactLenis from "lenis/react";
import { useRef, useState } from "react";
import LibraryIntro from "./library-intro";
import Stars from "@/components/ui/stars";

export default function Library() {
    
const books: BookProps[] = [
    {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        image: "/books/kafka.jpg",
        color: "bg-slate-900",
        textColor: "text-foreground",
        rating: 5,
        expandDirection: "right",
        review: `Kafka on the Shore was my first Murakami novel, and it completely changed the way I thought about storytelling. I’d always heard about the surreal, pseudo-fantasy worlds he created, but I hesitated to dive in, worried the English translations might flatten his ideas. I’m glad I finally gave it a chance—this quickly became one of my deserted-island books.

The story alternates between Kafka, a teenage boy who runs away from home to escape an Oedipus prophecy, and Nakata, an elderly man who can talk to cats. Each chapter switches perspective, slowly stacking up like Jenga blocks until the surreal picture begins to make sense—though, as with most Murakami novels, the ending resists easy explanation and is left to the reader’s interpretation.

What struck me was the balance: absurdity, humor, tension, and fantasy all woven together in a dreamlike setting. The characters are unforgettable, the atmosphere lingers, and the musical references are a bonus. Murakami doesn’t hand you answers—he makes you live with the questions. Kafka may be on the shore, but this book pulled me deep into his world and left me wanting more.
`
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        image: "/books/white-tiger.jpg",
        color: "text-background",
        textColor: "text-foreground",
        rating: 4,
        expandDirection: "right",
        review: `I first read The White Tiger in middle school after borrowing it from my friend Ajinkya. The cover caught my attention, but the description sealed it: “Meet Balram Halwai, the White Tiger: Servant, Philosopher, Entrepreneur, Murderer …” Up until then, my reading life was Enid Blyton, Goosebumps, and school textbooks. This novel felt dangerous, raw, and exciting in ways I hadn’t encountered before.

Balram is born into poverty in a small Indian village, where powerful men control everything. He manages to find work as a driver for a wealthy family’s youngest son and moves to Delhi. Through his eyes, we see India in all its contradictions: opportunity and corruption, ambition and despair. When his master kills a homeless girl in a drunken accident, Balram is coerced into taking the blame, believing it his duty. That acceptance becomes the catalyst for his awakening, pushing him toward freedom and, eventually, a shocking climax.

Adiga’s prose is sharp and cinematic. The way he paints India—the grime, chaos, absurdity, and hunger for escape—felt so vivid it was no surprise when the book was adapted into a film. This novel left a permanent mark on me. I even bought a copy after losing Ajinkya’s—sorry, bro.
`
    },
    {
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        image: "/books/norwegian-wood.jpg",
        color: "bg-red-500",
        textColor: "text-foreground",
        rating: 4,
        expandDirection: "right",
        review: `After Kafka on the Shore, I became fascinated with Murakami’s work. I soon discovered that while Kafka is often considered his masterpiece, it was Norwegian Wood that made him famous. Naturally, it became the next book I picked up, and though I expected another surreal fantasy, I was pleasantly surprised by how grounded it was.

Named after the Beatles’ song, the novel follows Watanabe, a young college student in Tokyo navigating love, grief, and the confusion of early adulthood. After his best friend’s suicide, he reconnects with Naoko, the girl Kizuki left behind. Their fragile relationship, however, unravels when Naoko disappears into her own struggles. Meanwhile, Watanabe drifts between college life, a job at a record store, nights out with friends, and a growing bond with Midori, whose presence offers a striking contrast.

Though less fantastical than Murakami’s other works, the characters feel intensely real. What stood out most to me was how vividly Murakami captured 1980s Tokyo—the atmosphere, the mood, the music. The novel’s ending is deliberately open, forcing readers to step into Watanabe’s shoes and imagine their own closure. It may not be for everyone, but for me, it was one of the most moving introductions to Murakami’s Japan.            
`
    },
    {
        title: "After Dark",
        author: "Haruki Murakami",
        image: "/books/after-dark.jpg",
        color: "bg-stone-800",
        textColor: "text-foreground",
        rating: 3,
        expandDirection: "right",
        review: `I’d been raving about Murakami for months before my girlfriend surprised me with three more of his novels. She kept Sputnik Sweetheart and handed me After Dark. Like most Murakami works, I’d recommend going in blind—but here’s a glimpse.

Set in 2000s Tokyo, the story unfolds over the course of a single night, with each chapter marked by a timestamp. It alternates between sisters Mari and Eri Asai. Mari, sitting in a Denny’s trying to read, is pulled into an incident at Alphaville, a seedy “love hotel” run by Kaoru. Meanwhile, Eri lies in an unnerving sleep, observed by what feels like an invisible camera. Their stories intersect through Shirakawa, a businessman whose violent act earlier in the evening drags Mari into Alphaville’s underworld.

The novel is steeped in unease and surrealism. What stood out most to me was the world-building—it feels like you’re floating above Tokyo, zooming into lives as a detached spectator. By the end, I realized I cared less about the characters and more about that feeling of voyeurism, which seems intentional.

This isn’t a book for everyone, but for me, it was unforgettable. Murakami made me feel like a camera—and left me wanting to move to Tokyo.
`
    },
    {
        title: "Mr. Two Bomb",
        author: "William Coles",
        image: "/books/mr-two-bomb.jpg",
        color: "bg-rose-900",
        textColor: "text-foreground",
        rating: 3,
        expandDirection: "right",
        review: ``
    },

    {
        title: "I Swalloed the Moon",
        author: "Saba Mahmood Bashir",
        image: "/books/i-swalloed-the-moon.jpg",
        color: "bg-cyan-500",
        textColor: "text-background",
        rating: 3,
        expandDirection: "right",
        review: ``
    },

    {
        title: "Percy Jackson: the Last Olympian",
        author: "Rick Riordan",
        image: "/books/the-last-olympian.jpg",
        color: "bg-amber-700",
        textColor: "text-foreground",
        rating: 2,
        expandDirection: "left",
        review: ``
    },

    {
        title: "Men Without Women",
        author: "Haruki Murakami",
        image: "/books/men-without-women.jpg",
        color: "bg-amber-200",
        textColor: "text-background",
        expandDirection: "left",
        rating: 2,
        review: ``
    },
]
    const [selected, setSelected] = useState(-1);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])


    return <main className='h-full mb-16 pb-16 overflow-x-clip'>
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

                                    <div className="flex flex-row w-full justify-between items-center">
                                        <FadeIn key={`rating-${selected}`} delay={0.4} duration={1.6}>
                                            <p className="text-md mb-2">Rating: {books[selected].rating ?? 0}/5</p>
                                            <Stars rating={books[selected].rating ?? 0} />
                                        </FadeIn>

                                        <FadeIn key={`author-${selected}`} delay={0.4} duration={1.6}>
                                            <p className="text-md mb-2">{books[selected].author}</p>
                                        </FadeIn>
                                    </div>
                                </div>
                            }
                        </FadeIn>
                    </div>

                    <div>
                       
                    </div>
                </div>
                <div className='w-1/2 h-2/3 pl-8'>
                     <FadeIn delay={0.4} className="w-full h-full pl-8 flex flex-col items-start justify-start overflow-x-auto no-scrollbar">
                            <div 
                            className='h-full flex flex-row gap-4 items-start justify-start w-full no-scrollbar'>
                                <div className="h-full w-14 flex flex-col items-center justify-start bg-transparent border border-foreground rounded-sm cursor-pointer"
                                    onClick={() => setSelected(-1)}
                                >
                                    <p className="[writing-mode:vertical-rl] m-4 text-xl text-foreground">Home</p>
                                </div>

                                {
                                    books.map((book, index) => (
                                        <div
                                            key={index}
                                            ref={(el) => {
                                                itemRefs.current[index] = el
                                                  console.log("Assigned ref", index, el) // should print DOM nodes
                                            }}
                                            className="h-full shrink-0"
                                        >
                                            <Book key={index} {...book} onClick={() => setSelected(index)} wrapperRef={() => itemRefs.current[index]} />
                                        </div>
                                    ))
                                }
                             </div>
                        </FadeIn>
                </div>
            </div>
        </main>

}