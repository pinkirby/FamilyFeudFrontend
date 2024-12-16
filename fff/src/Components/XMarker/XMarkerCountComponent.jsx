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
            setXMarkerCount(0);
            enableAudio("x");
        }
    }

    createEffect(() => {
        const count = XMarkerCount();
        if (count >= MAX_XMARKER) {
            disableAudio("x");
        }
    });

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));

    return null;
}

export { XMarkerCount }; 