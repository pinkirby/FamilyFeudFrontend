import { createEffect, createSignal } from "solid-js";
import XMarkerDisplay from "./XMarkerDisplay";
import { isCenterVisible } from "./CenterXDisplay";

export default function CornerXDisplay() {
    const [displayClass, setDisplayClass] = createSignal("flex")

    const hideIn5 = () => {
        timeoutId = setTimeout(() => {
            setIsCenterVisible(false);
            setDisplayClass("hidden")
        }, 5000);
    };

    createEffect(() => {
        const visible = isCenterVisible();
        if (visible) {
            setDisplayClass("hidden")
            return;
        }

        setDisplayClass("flex")
    });

    return (
        <div class={`${displayClass()} fixed bottom-0 right-0`}>
            <XMarkerDisplay
                tailwindWidth="w-12"
                tailwindHeight="h-12"
                tailwindPadding="p-2" />
        </div>
    );
}

export { isCenterVisible };
