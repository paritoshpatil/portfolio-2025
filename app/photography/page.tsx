'use client'

import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fadein';
import { Separator } from '@/components/ui/separator';
import SplineLoader from '@/components/ui/splineLoader';
import { ArrowLeft, ArrowRight, Camera, Images } from 'lucide-react';
import { useState } from 'react';

export default function Photography() {
    const cameras: Camera[] = [
        {
            name: "Yashica MF Super 2",
            url: "https://prod.spline.design/8p286BljMOBpaySo/scene.splinecode"
        },
        {
            name: "Fujifilm Instax Mini 9",
            url: "https://prod.spline.design/6AsKSy9ac4QgmjLF/scene.splinecode"
        },
        {
            name: "Kodak KB-10",
            url: "https://prod.spline.design/qMkOeOPQcMOxP79n/scene.splinecode"
        },
        {
            name: "Unnamed Waterproof Camera",
            url: "https://prod.spline.design/OteYCEH8AtSBWS3G/scene.splinecode"
        }
    ]

    const [camera, setCamera] = useState(0)
    
    const handleNextScene = () => {
        setCamera((camera + 1) % cameras.length)
    }

    const handlePreviousScene = () => {
        setCamera((camera - 1 + cameras.length) % cameras.length)
    }

    return (
        <main className="flex flex-row items-center justify-center h-remaining sm:px-6 lg:px-8">
            <div className='info-pane flex flex-col justify-start w-1/2 gap-8'>
                <FadeIn delay={0}>
                    <h1 className="text-5xl">Photography</h1>
                </FadeIn>
                <div>
                    <FadeIn delay={0.2}>
                        <p className="text-md text-foreground/70 text-monospace w-full mt-4 text-justify">
                        Since 2021, I've been collecting and shooting with vintage film cameras. 
                        I'm drawn to the tactile process and the deliberate nature of shooting film. 
                        Unlike digital, there's no instant preview, and each roll has a limited number of exposures. 
                        This, combined with the cost, encourages more intentional shooting. 
                        You shoot the shot and you're back in the moment, rather than getting caught up in endless reviews and retakes.

                        <br />
                        <br />
                        Frame. Shoot. Go.
                        </p>
                        <Separator className="w-full" />
                        <p className="text-md text-foreground/70 text-monospace w-full mt-4 text-justify">
                            Over on the right, you can see some of the cameras I like to shoot with. These are 3D scans of my actual
                            cameras that I did with <a href="https://www.tripo3d.ai/" target="_blank" className='decoration-neutral-600'>Tripo AI</a> and 
                            used <a href="https://app.spline.design" target='_blank'>Spline</a> to host & animate them. 
                        </p>
                    </FadeIn>
                </div>

                <div>
                    <FadeIn delay={0.4}>
                        <div className='flex flex-row gap-4'>
                            <Button variant="default" size="xl" className='w-1/2'>
                                <Images className='large-icon'/>
                                <span className='text-lg'>Gallery</span>
                            </Button>

                            <div className='w-1/2 flex flex-row items-center justify-end gap-4'>
                                <Button variant="secondary" size="xl" onClick={handlePreviousScene} className='cursor-pointer'>
                                    <ArrowLeft className='large-icon' />
                                </Button>
                                {/* <span>Change Camera</span> */}
                                <Button variant="secondary" size="xl" onClick={handleNextScene} className='cursor-pointer'>
                                    <ArrowRight className='large-icon' />
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <div className='w-1/2 h-full'>
                <SplineLoader sceneURL={cameras[camera].url}/>
            </div>
        </main>
    )
}

export type Camera = {
    name: string
    url: string
}