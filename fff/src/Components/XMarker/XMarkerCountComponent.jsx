import { createEffect, createSignal, onCleanup } from 'solid-js';
import { MAX_XMARKER } from '../../Constants/constants';
import { disableAudio, enableAudio } from '../AudioManager';

const [XMarkerCount, setXMarkerCount] = createSignal(0);

export default function XMarkerCountComponent() {
    const handleKeyDown = (e) => {
        if (e.key === 'x' && XMarkerCount() < MAX_XMARKER) {
            setXMarkerCount(XMarkerCount() + 1);
        }

        if (e.key === 'c') {
            clearXs();
        }
    }

    createEffect(() => {
        const count = XMarkerCount();
        if (count >= MAX_XMARKER) {
            disableAudio("KeyX");
        }
    });

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));

    return null;
}

export function clearXs() {
    setXMarkerCount(0);
    enableAudio("KeyX");
}

export { XMarkerCount }; 