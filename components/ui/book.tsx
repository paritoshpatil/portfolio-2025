"use client";

import { use, useEffect, useRef, useState } from "react";
import { hover, motion } from "motion/react";
import { on } from "events";

export default function Book({
  title,
  author,
  image,
  color,
  textColor,
  onClick,
  isSelected,
}: BookProps) {
  const [hovered, setHovered] = useState(isSelected);
  const baseClasses =
    "w-12 h-full max-h-full flex flex-col items-center justify-between border border border-foreground/60 rounded-sm cursor-pointer";

  useEffect(() => {
    setHovered(isSelected);
  }, [isSelected]);

  return (
    <motion.div
      layout="position"
      initial={{ width: 60 }}
      animate={{ width: hovered ? 315 : 60 }}
      className={`${baseClasses} ${color} ${textColor}`}
      onClick={onClick}
    >
      {!hovered && (
        <p className="[writing-mode:vertical-rl] m-4 text-3xl">{title}</p>
      )}
      {!hovered && (
        <p className="[writing-mode:vertical-rl] m-4 text-monospace text-md">
          {author}
        </p>
      )}

      {hovered && (
        <img
          src={image}
          alt={`${title} cover`}
          className="w-full h-full max-h-full rounded-sm"
        />
      )}
    </motion.div>
  );
}

export type BookProps = {
  title: string;
  author: string;
  image: string;
  rating?: number;
  review?: string;
  color: string;
  textColor: string;
  expandDirection: string;
  onClick?: () => void;
  isSelected?: boolean;
};
