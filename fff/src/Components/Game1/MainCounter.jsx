import { createSignal } from "solid-js";

const [mainCounter, setMainCounter] = createSignal(0);

export default function MainCounter() {

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