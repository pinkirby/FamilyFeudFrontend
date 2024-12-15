import { createEffect, createSignal } from "solid-js";
import XMarkerDisplay from "./XMarkerDisplay";
import { XMarkerCount } from "./XMarkerCountComponent";

let timeoutId = null;

export default function CenterDisplay() {
    const [isVisible, setIsVisible] = createSignal(false);
    const [displayClass, setDisplayClass] = createSignal("hidden")
    const [interruption, setInterruption] = createSignal(false);

    const hideIn5 = () => {
        timeoutId = setTimeout(() => {
            setIsVisible(false);
            setDisplayClass("hidden")
        }, 5000);
    };

    createEffect(() => {
        const counter = XMarkerCount();
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            if (counter > 0) hideIn5();
        }

        if (counter === 0) {
            setIsVisible(false);
            setDisplayClass("hidden")
            return;
        }
        setIsVisible(true);
    });

    createEffect(() => {
        const visible = isVisible();
        if (timeoutId !== null) 
            clearTimeout(timeoutId);
        if (visible){
            hideIn5();
            setDisplayClass("flex");
        }
    });

    return (
        <div class={`${displayClass()} items-center justify-center h-screen z-1`}>
            <XMarkerDisplay
                tailwindWidth="w-56"
                tailwindHeight="h-56"
                tailwindPadding="p-6" />
        </div>
    );
}