import { createEffect, createSignal } from "solid-js";
import SideCounter from "./SideCounter";

const [sumCounters, setSumCounters] = createSignal(0);

export default function TeamCounters() {
    const [leftCounter, setLeftCounter] = createSignal(0);
    const [rightCounter, setRightCounter] = createSignal(0);

    const handleLeftCounter = (counter) => {
        setLeftCounter(counter);
    };

    const handleRightCounter = (counter) => {
        setRightCounter(counter);
    };

    createEffect(() => {
        setSumCounters(leftCounter() + rightCounter());
    });

    return (
        <div class="z-1 fixed top-1/2 w-dvw flex flex-row items-center justify-between px-[calc((25dvw-9rem)/2)]">
            <SideCounter keyCode="ArrowLeft" sendCurrentCounter={handleLeftCounter}/>
            <SideCounter keyCode="ArrowRight" sendCurrentCounter={handleRightCounter}/>
        </div>
    );
}

export { sumCounters };