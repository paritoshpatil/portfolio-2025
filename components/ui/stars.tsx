import { Circle, CircleSlash, Sparkle, Star } from "lucide-react";

export default function Stars({rating}: {rating: number}) {
    return <div className="flex flex-row gap-2">
        {
            Array(rating).fill(0).map((_, index) => (
                <CircleSlash size={20} key={index} />
            ))
        }
    </div>
}