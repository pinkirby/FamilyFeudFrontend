import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js";
import RevealedBoardCell from "./RevealedBoardCell";
import HiddenBoardCell from "./HiddenBoardCell";
import { keyMapGame1 } from "../../Constants/constants";
import { disableAudio, enableAudio } from "../AudioManager";
import { setMainCounter } from "./MainCounter";
import { inFix } from "../MiniMenu/MiniMenu";


export default function BoardCell(props) {
    const [revealed, SetRevealed] = createSignal(false);

    const eventCodes = keyMapGame1.get(props.numero);

    const handleKeyDown = (event) => {
        if (eventCodes.includes(event.code) && !inFix()) {
            SetRevealed(true);
        }

        if (event.code === "KeyM") {
            SetRevealed(false);
            setMainCounter(0);
        }
    }

    createEffect(() => {
        if (revealed()) {
            eventCodes.forEach(code => {
                disableAudio(code)
            });
            return;
        }
        eventCodes.forEach(code => {
            enableAudio(code)
        });
    });

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));

    return (
        <>
            <Show when={revealed()}>
                <RevealedBoardCell
                    pourcentage={props.pourcentage}
                    reponse={props.reponse}
                />
            </Show>
            <Show when={!revealed()}>
                <HiddenBoardCell
                    numero={props.numero}
                    setRevealed={SetRevealed}
                />
            </Show>
        </>
    );
}