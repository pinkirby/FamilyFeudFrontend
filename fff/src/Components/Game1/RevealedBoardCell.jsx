import { createSignal, onMount } from "solid-js";
import { mainCounter, setMainCounter } from "./MainCounter";
import { mode } from "../MiniMenu/MiniMenu";

export default function RevealedBoardCell(props) {
    const [textSize, SetTextSize] = createSignal("text-4xl");

    onMount(() => {
        if (props.reponse.length > 12) {
            SetTextSize("text-2xl")
        }
        if (props.reponse.length > 30) {
            
            SetTextSize("text-lg")
        }

        if (mode() === "normal") {
            setMainCounter(mainCounter() + parseInt(props.pourcentage))
        }
    })

    return (
        <div class={`flex flex-row-reverse w-[47%] h-[22.5%] p-0 bg-green-800 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <div class="object-cover w-[30%] h-full rounded-r-lg bg-sky-600 border-l-4 border-blue-400">
                <div class="flex items-center justify-center h-full w-full">
                    <p class="text-white text-5xl">
                        {props.pourcentage}
                    </p>
                </div>
            </div>
            <div class="object-cover flex-1 h-full rounded-l-lg bg-blue-900">
                <div class="flex items-center justify-center h-full w-full">
                    <p class={`text-white ${textSize()}`}>
                        {props.reponse}
                    </p>
                </div>
            </div>
        </div>
    );
}