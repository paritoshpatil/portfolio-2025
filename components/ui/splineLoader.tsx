import Spline from "@splinetool/react-spline";

export type SplineLoaderProps = {
    sceneURL: string
}

export default function SplineLoader({sceneURL = ""} : SplineLoaderProps) {
    return (
        <Spline scene={sceneURL} />
    )
}