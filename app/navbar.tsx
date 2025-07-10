'use client'

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from 'next/navigation';


export default function Navbar() {
    const router = useRouter();

    return(
        <nav className="w-screen h-24 flex flex-row justify-between items-center px-32">
            <Button variant={"outline"} onClick={() => router.back()}>
                <ArrowLeft/>
            </Button>
        </nav>
    )
}