import 'flowbite';
import { createSignal, onCleanup } from 'solid-js';
import buzzerWrong from '../../assets/buzzerWrong.mp3';

function XMarker() {
    const [marks, setMarks] = createSignal([]);
    const audio = new Audio(buzzerWrong)
    
    const handleKeyPress = (e) => {
        if (e.key === 'x' && marks().length < 3) {
            setMarks([...marks(), <div class="text-red-500 text-9xl font-bold flex items-center justify-center">x</div>]);
            audio.currentTime = 0;
            audio.play();
        }
    };

    window.addEventListener('keydown', handleKeyPress);
    onCleanup(() => window.removeEventListener('keydown', handleKeyPress));

    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-around">
                {marks()}
            </div>
        </div>
    )
}

export default XMarker;