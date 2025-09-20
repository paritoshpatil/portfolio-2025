"use client"
import Book, { BookProps } from "@/components/ui/book";
import { FadeIn } from "@/components/ui/fadein";
import { Separator } from "@/components/ui/separator";
import ReactLenis from "lenis/react";
import { useEffect, useRef, useState } from "react";
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
            review: `I have a special relationship with this book. Growing up, I never had an allowance, which meant I couldn’t just buy things without asking my parents. One day, while wandering Crossword with my sister, I spotted this novel. I ran home, begged my mother for 300 rupees, and rushed back to buy it — my very first novel.

As the title suggests, it tells the story of a Japanese man who survives the Hiroshima bombing, only to endure the Nagasaki blast days later. The premise alone is staggering, but what makes it unforgettable is the narrator: indifferent, arrogant, and deeply unlikeable. Through his detached perspective, we witness the grotesque aftermath of war, all while asking—why did he survive when so many perished? Yet, as his journey unfolds, cracks in his selfishness appear, and moments of selflessness take root.

Atmosphere is what I treasure most in books, and this one delivers in haunting detail. The prose is simple, but vivid enough to immerse you in its world of devastation. I first read it in 2013, and I return to it every few years, letting the horror and humanity strike me anew. 
            `
        },

        {
            title: "I Swallwoed the Moon",
            author: "Saba Mahmood Bashir",
            image: "/books/i-swalloed-the-moon.jpg",
            color: "bg-cyan-500",
            textColor: "text-background",
            rating: 5,
            expandDirection: "right",
            review: `I started making music in 2014, writing songs in 2016, and reading poetry in 2017. But I discovered Gulzar criminally late. I had always admired his vast contribution to Bollywood from a distance, but it wasn’t until I stumbled upon this book through a Twitter recommendation that I finally dove in. Gulzar often jokes that he holds a “copyright” on the moon, given how often it appears in his work — and this book shows why.

At first, I assumed it would be a collection of poems about the moon. Instead, it is a thoughtful study of how Gulzar takes a single object or idea and spins it into infinite expressions. Author Saba Mahmood Bashir gathers examples from songs, poems, stories, even ads, and weaves them together with sharp analysis and insight. It fundamentally changed the way I thought about songwriting, while also introducing me to music I might never have discovered.

The highlight for me was finding the song Mera Kuchh Saamaan from Ijaazat. Its metaphors of love and loss shook me, and I couldn’t stop sharing it with friends. Now, it’s one of our favorites — a song for quiet nights, reflection, and awe.`
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

        {
            title: "Mice in Men",
            author: "Anirban Bose",
            image: "/books/mice-in-men.jpg",
            color: "bg-teal-600",
            textColor: "text-foreground",
            expandDirection: "left",
            rating: 3,
            review: ``
        },
    ]
    const [selected, setSelected] = useState(-1);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])


    return <main className='overflow-x-hidden-  h-remaining flex flex-row items-center h-full justify-centersm:px-6 lg:px-8'>
        <div className='info-pane flex flex-col justify-start max-w-[40vw] w-[40vw] gap-8'>
            <FadeIn delay={0} key={`review-${selected}`} duration={2}>
                <h1 className="text-5xl">
                    {selected < 0 ? "Library" : books[selected].title}
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
                                <p className="text-sm text-monospace text-justify whitespace-pre-wrap mb-8 shrink-0 overflow-hidden">
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
        <div className='h-full pl-8 w-[45vw] max-w-[45vw]'>
            <ReactLenis options={{ orientation: "horizontal" }} className="w-full h-full pl-8 flex flex-col items-start justify-center overflow-x-auto no-scrollbar">
                <div
                    className='h-full flex flex-row gap-4 items-start justify-start w-full no-scrollbar min-h-full'>
                    <FadeIn className="h-full" delay={0.6}>
                        <div className="h-full w-14 flex flex-col items-center justify-start bg-transparent border border-foreground rounded-sm cursor-pointer"
                            onClick={() => setSelected(-1)}
                        >
                            <p className="[writing-mode:vertical-rl] m-4 text-xl text-foreground">Home</p>
                        </div>
                    </FadeIn>

                    {
                        books.map((book, index) => (
                            <FadeIn key={index} delay={0.8 + index * 0.2} duration={1.6} className="h-full"> 
                                <Book key={index} {...book} onClick={() => setSelected(index)} isSelected={selected === index} />
                            </FadeIn>
                        ))
                    }
                </div>
            </ReactLenis>
        </div>
    </main>

}