import { createEffect, createSignal, onCleanup } from "solid-js";
import { mainCounter } from "./MainCounter";
import { gameIndex, inFix, leftNumber, rightNumber } from "../MiniMenu/MiniMenu";

export default function SideCounter(props) {
    const [counter, setCounter] = createSignal(0);
    const [lastCounter, setLastCounter] = createSignal(0);
    const [beenAdded, setBeenAdded] = createSignal(false);

    const handleClick = () => {
        setBeenAdded(false);
    }

    const passCurrentCounter = (count) => {
        props.sendCurrentCounter(count);
    };

    const handleKeyDown = (event) => {
        if (event.shiftKey && event.ctrlKey && event.code === props.keyCode) {
            setLastCounter(counter());
            setCounter(0);
            setBeenAdded(false);
            return;
        }

        if (event.shiftKey && event.code === props.keyCode) {
            setCounter(lastCounter());
            setBeenAdded(false);
            return;
        }

        if (event.code === props.keyCode && !beenAdded()) {
            setLastCounter(counter());
            setCounter(counter() + mainCounter());
            setBeenAdded(true);
        }
    };

    createEffect(() => {
        gameIndex();
        setBeenAdded(false);
    });

    createEffect(() => {
        if (!inFix()) return;

        if (props.keyCode === "ArrowLeft" && leftNumber() !== 0) {
            setLastCounter(counter());
            setCounter(leftNumber());
        }

        if (props.keyCode === "ArrowRight" && rightNumber() !== 0) {
            setLastCounter(counter());
            setCounter(rightNumber());
        }
    });

    createEffect(() => {
        passCurrentCounter(counter());
    });

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));

    return (
        <div onclick={handleClick} class="w-36 h-20 p-5 bg-black border-2 border-white rounded-lg">
            <div class="flex items-center justify-center h-full w-full">
                <p class="text-white text-5xl">
                   {counter()} 
                </p>
            </div>
        </div>
    );
}