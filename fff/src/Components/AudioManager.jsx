
import { onMount, onCleanup} from 'solid-js';
import { inFix } from './MiniMenu/MiniMenu';

let audioMap = new Map();
let AvailabilityMap = new Map();

export function AudioManager() {
    const handleKeyDown = (event) => {
        const audioFile = audioMap.get(event.code);
        if (audioFile && AvailabilityMap.get(event.code) && !inFix()) {
            audioFile.currentTime = 0;
            audioFile.play();
        }
    }

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));

    return null;
}

export function registerAudio(key, audioFilePath) {
  if (!audioMap.has(key)) {
    audioMap.set(key, new Audio(audioFilePath));
    AvailabilityMap.set(key, true);
  }
}

export function disableAudio(key) {
    AvailabilityMap.set(key, false);
}

export function enableAudio(key) {
    AvailabilityMap.set(key, true);
}

export function muteAudio(key) {
    if (!audioMap.has(key)) {
        return;
    }
    const audio = audioMap.get(key);
    if (audio) {
        audio.volume = 0.0;
    }
}

export function unmuteAudio(key) {
    if (!audioMap.has(key)) {
        return;
    }

    const audio = audioMap.get(key);
    if (audio) {
        audio.volume = 1.0;
    }
}