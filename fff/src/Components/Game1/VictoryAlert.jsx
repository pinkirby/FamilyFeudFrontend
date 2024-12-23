import { createEffect, createSignal, onCleanup } from 'solid-js';
import trophy from '../../assets/trophy.gif';
import { stopAudio } from '../AudioManager';

export default function VictoryAlert() {
    const [displayClass, setDisplayClass] = createSignal("hidden")
    const [isVisible, setIsVisible] = createSignal(false);

    const handleKeyDown = (event) => {
        if (event.code === "KeyV") {
            setIsVisible(!isVisible());
        }
    };

    createEffect(() => {
        let css = "flex";
        if (!isVisible()) {
            css = "hidden" 
            stopAudio("KeyV");
        }
        setDisplayClass(css);

    });

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));

    return (

        <div class={`${displayClass()}`}>
            <div>
                <img class="h-24" src={trophy} alt="Trophy" />
            </div>
        </div>
    );
}