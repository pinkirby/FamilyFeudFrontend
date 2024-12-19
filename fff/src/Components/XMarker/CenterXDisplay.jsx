import { createEffect, createSignal } from "solid-js";
import XMarkerDisplay from "./XMarkerDisplay";
import { XMarkerCount } from "./XMarkerCountComponent";

let timeoutId = null;

const [isCenterVisible, setIsCenterVisible] = createSignal(false);

export default function CenterXDisplay() {
    const [displayClass, setDisplayClass] = createSignal("hidden")

    const hideIn5 = () => {
        timeoutId = setTimeout(() => {
            setIsCenterVisible(false);
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
            setIsCenterVisible(false);
            setDisplayClass("hidden")
            return;
        }
        setIsCenterVisible(true);
    });

    createEffect(() => {
        const visible = isCenterVisible();
        if (timeoutId !== null) 
            clearTimeout(timeoutId);
        if (visible){
            hideIn5();
            setDisplayClass("flex");
        }
    });

    return (
        <div class={`${displayClass()} z-40 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <XMarkerDisplay
                tailwindWidth="w-56"
                tailwindHeight="h-56"
                tailwindPadding="p-6" />
        </div>
    );
}

export { isCenterVisible };