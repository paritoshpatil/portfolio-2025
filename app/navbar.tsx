'use client'

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';


export default function Navbar() {
    const router = useRouter();

    return(
        <nav className="w-full h-navbar flex flex-row justify-between items-center px-32">
            <Button variant={"secondary"} size={"icon"} onClick={() => router.back()} className="cursor-pointer">
                <ArrowLeft/>
            </Button>
        </nav>
    )
}