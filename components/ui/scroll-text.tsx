import Rive from "@rive-app/react-canvas";

export default function ScrollText(props: {text?: string}) {
    return <div className='flex flex-row gap-2 items-center justify-start'>
        <Rive src="mouse.riv" animations="Scroll" className="w-[24px] h-[24px]"/>
        <p className="text-md">{props.text ? props.text : "Scroll to see more"}</p>
    </div>
}