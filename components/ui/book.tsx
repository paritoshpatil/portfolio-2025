"use client"

import { useRef, useState } from "react"
import { motion } from "motion/react"

export default function Book({title, author, image, color, textColor, onClick}: BookProps) {
    const [hovered, setHovered] = useState(false)
    const baseClasses = "w-12 h-full flex flex-col items-center justify-between border border border-foreground/60 rounded-sm cursor-pointer"
    
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleHoverStart = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHovered(true);
    };

    const handleHoverEnd = () => {
        // delay collapse by 500ms
        timeoutRef.current = setTimeout(() => {
        setHovered(false);
        }, 100);
    };
    
    return <motion.div 
            layout="position"
            initial={{ width: 60 }}
            animate={{ width: hovered ? 380 : 60 }}
            className={`${baseClasses} ${color} ${textColor}`}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onClick={onClick}>
                {
                    !hovered && 
                    <p className="[writing-mode:vertical-rl] m-4 text-xl">{title}</p>
                }
                {
                    !hovered && 
                    <p className="[writing-mode:vertical-rl] m-4 text-monospace text-md">{author}</p>
                }

                {
                    hovered &&
                     <img
                        src={image}
                        alt={`${title} cover`}
                        className="w-full h-full rounded-sm"
                    />
                }
            
        </motion.div>
}

export type BookProps = {
    title: string
    author: string
    image: string
    rating?: number
    review?: string
    color: string
    textColor: string
    onClick?: () => void;
}