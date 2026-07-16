import ReactPannellum from "react-pannellum";

export default function Visor360({ images360 }: { images360: string[] }) {
    return <div className="w-full h-auto aspect-video border-2">
        <ReactPannellum id="1" sceneId="1" imageSource={images360[0]}style={{ width: "100%", height: "100%" }} />
    </div>
}