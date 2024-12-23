import { createSignal, onCleanup } from "solid-js";
import { sumCounters } from "./TeamCounters";

const [mainCounter, setMainCounter] = createSignal(0);

export default function MainCounter() {

    const handleKeyDown = (event) => {
        if (event.code === "KeyT") {
            setMainCounter(sumCounters());
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));


    return (
        <div class="w-44 h-24 p-5 bg-black border-2 border-white rounded-lg">
            <div class="flex items-center justify-center h-full w-full">
                <p class="text-white text-5xl">
                   {mainCounter()} 
                </p>
            </div>
        </div>
    );
}

export { mainCounter, setMainCounter }