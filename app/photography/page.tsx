'use client'

import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fadein';
import ScrollText from '@/components/ui/scroll-text';
import { Separator } from '@/components/ui/separator';
import SplineLoader from '@/components/ui/splineLoader';
import ReactLenis from 'lenis/react';
import { ArrowLeft, ArrowRight, Camera, Images, Mouse } from 'lucide-react';
import { lazy, Suspense, useState } from 'react';

export default function Photography() {
    const Masonry = lazy(() => import('@/components/ui/masonry'));
    const cameras: Camera[] = [
        {
            name: "Yashica MF Super 2",
            url: "https://prod.spline.design/8p286BljMOBpaySo/scene.splinecode",
            info: `A rugged 38mm film camera with built-in flash, timer, and light sensor. 
            My most reliable everyday carry, producing consistently crisp photos across all film types.`
        },
        {
            name: "Fujifilm Instax Mini 9",
            url: "https://prod.spline.design/6AsKSy9ac4QgmjLF/scene.splinecode",
            info: `Classic instant camera, more about fun than precision. Perfect for parties—snap, print, 
            and share memories on the spot.`

        },
        {
            name: "Kodak KB-10",
            url: "https://prod.spline.design/qMkOeOPQcMOxP79n/scene.splinecode",
            info: `A ₹50 flea-market find with a scratched lens that delivers uniquely hazy, vintage-looking shots. 
            Compact, flawed, but full of character.`

        },
        {
            name: "Unnamed Waterproof Camera",
            url: "https://prod.spline.design/OteYCEH8AtSBWS3G/scene.splinecode",
            info: `A quirky waterproof flea-market pickup with a clear protective case. Rarely used underwater, 
            but handy in damp settings; more kept for its look than performance.`

        }
    ]

    const [camera, setCamera] = useState(0)

    const handleNextScene = () => {
        setCamera((camera + 1) % cameras.length)
    }

    const handlePreviousScene = () => {
        setCamera((camera - 1 + cameras.length) % cameras.length)
    }

    const photos = [
        {
            id: "1",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj2Z1iuArlT0ZMCJe45LNvqfsb3rIY8yAxugt2",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj2Z1iuArlT0ZMCJe45LNvqfsb3rIY8yAxugt2",
            height: 500,
        },
        {
            id: "2",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjYUiqOYJdbrKmARSQBk8XMtul2LEPsHg4CV6x",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjYUiqOYJdbrKmARSQBk8XMtul2LEPsHg4CV6x",
            height: 800,
        },
        {
            id: "3",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjWhwU2GYiABKYdzj47M2VeuN3pIgX9tJl5F0a",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjWhwU2GYiABKYdzj47M2VeuN3pIgX9tJl5F0a",
            height: 800,
        },
        {
            id: "4",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj7gYrJHD7kXbxdlWuncq6Q8HGJyrSTzEOBihf",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj7gYrJHD7kXbxdlWuncq6Q8HGJyrSTzEOBihf",
            height: 500,
        },
        {
            id: "5",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjmNRXbU0cKWBugDxdrMkni4lVswNJz98pPSEL",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjmNRXbU0cKWBugDxdrMkni4lVswNJz98pPSEL",
            height: 500,
        },
        {
            id: "6",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj5sO8jZN3VRXnh87pU9xP2Tu14AYDoIlZcWgr",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj5sO8jZN3VRXnh87pU9xP2Tu14AYDoIlZcWgr",
            height: 800,
        },
        {
            id: "7",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjbmKocCAEi4CI2poxXHePYVb9cZQgNqt5OhyA",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjbmKocCAEi4CI2poxXHePYVb9cZQgNqt5OhyA",
            height: 500,
        },
        {
            id: "8",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjfiPjVI9RZKLSzvrqIQJTyB5gU0G9Dhj4M7VE",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjfiPjVI9RZKLSzvrqIQJTyB5gU0G9Dhj4M7VE",
            height: 500,
        },
        {
            id: "9",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjUezfk2BWrZjVasYRDCMkhuX96xQT3dNKmn7H",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjUezfk2BWrZjVasYRDCMkhuX96xQT3dNKmn7H",
            height: 500,
        },
        {
            id: "10",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj4nmwzjNkOblVdDE3ZfY5qLeyCzrschR7T2iU",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj4nmwzjNkOblVdDE3ZfY5qLeyCzrschR7T2iU",
            height: 600,
        },
        {
            id: "11",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjN3eRlIg3bpnY1SauxTGwec5iO8zXL0CMsVR9",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjN3eRlIg3bpnY1SauxTGwec5iO8zXL0CMsVR9",
            height: 500,
        },
        {
            id: "12",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjFsUeEfqN6ZaCvrTGIRqgJtU4fj8lbphBiLnw",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjFsUeEfqN6ZaCvrTGIRqgJtU4fj8lbphBiLnw",
            height: 500,
        },
        {
            id: "13",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjo25MrdWmycv01pql4B5ONWRiEFPIreYUozQf",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjo25MrdWmycv01pql4B5ONWRiEFPIreYUozQf",
            height: 500,
        },
        {
            id: "14",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj7tt8t1D7kXbxdlWuncq6Q8HGJyrSTzEOBihf",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj7tt8t1D7kXbxdlWuncq6Q8HGJyrSTzEOBihf",
            height: 500,
        },
        {
            id: "15",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjll4dlkieV0v4ZAfX1jRDk5YmaJ3TFLKN2rUu",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjll4dlkieV0v4ZAfX1jRDk5YmaJ3TFLKN2rUu",
            height: 500,
        },
        {
            id: "16",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjav6uppzrqcKQ7J81bfVZpmwFvetxykWjMXgD",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjav6uppzrqcKQ7J81bfVZpmwFvetxykWjMXgD",
            height: 500,
        },
        {
            id: "17",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjFnZA5dqN6ZaCvrTGIRqgJtU4fj8lbphBiLnw",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjFnZA5dqN6ZaCvrTGIRqgJtU4fj8lbphBiLnw",
            height: 800,
        },
        {
            id: "18",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj72qKCKD7kXbxdlWuncq6Q8HGJyrSTzEOBihf",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAj72qKCKD7kXbxdlWuncq6Q8HGJyrSTzEOBihf",
            height: 800,
        },
        {
            id: "19",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjVXTqrkaNX7hMGqcbLuFDVxpCHZARJao0eiyt",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjVXTqrkaNX7hMGqcbLuFDVxpCHZARJao0eiyt",
            height: 500,
        },
        {
            id: "20",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjITGdE51EDGC79MHAkRyxo4XUL26mISV3OKWu",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjITGdE51EDGC79MHAkRyxo4XUL26mISV3OKWu",
            height: 800,
        },
        {
            id: "21",
            img: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjaF0K1YzrqcKQ7J81bfVZpmwFvetxykWjMXgD",
            url: "https://bmih92lo1u.ufs.sh/f/qHSYAmyGryAjaF0K1YzrqcKQ7J81bfVZpmwFvetxykWjMXgD",
            height: 800,
        },
    ];

    return (
        <ReactLenis className='h-full mb-16 pb-16 overflow-hidden'>
            <div className="flex flex-row items-center justify-center h-remaining sm:px-6 lg:px-8">
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
                            <div className='flex flex-row gap-4 justify-between'>
                                <ScrollText text="Scroll to see the some of the photos I've taken" />
                                <div className='flex flex-row items-center justify-end gap-4'>
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
                <div className='w-1/2 h-full flex flex-col px-8 items-center justify-center'>
                    <FadeIn delay={1.0} className="h-2/3 w-full">
                        <SplineLoader sceneURL={cameras[camera].url} />
                    </FadeIn>
                    <FadeIn delay={0.8} className='h-1/3 px-8 mt-4'>
                        <h3 className="text-xl w-full text-center mb-4">{cameras[camera].name}</h3>
                        <p className='text-monospace text-foreground/70 text-sm text-justify '>{cameras[camera].info}</p>
                    </FadeIn>
                </div>
            </div>
            <div className=''>
                <Suspense fallback={<div className='h-full w-full'>Loading...</div>}>
                    <Masonry
                        items={photos}
                        ease="power3.out"
                        duration={0.0}
                        stagger={0.0}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={false}
                        colorShiftOnHover={false}
                    />
                </Suspense>
            </div>
        </ReactLenis>
    )
}

export type Camera = {
    name: string
    url: string
    info: string
}