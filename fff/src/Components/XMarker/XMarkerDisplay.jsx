import 'flowbite';
import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import xCross from '../../assets/XMarker.png';
import { XMarkerCount } from './XMarkerCountComponent';
import { MAX_XMARKER } from '../../Constants/constants';

export default function XMarkerDisplay(props) {
    const [marks, setMarks] = createSignal(
        Array.from({length: MAX_XMARKER}, (_, index) => ({
            id: index + 1,
            classCss: "hidden"
        }))
    );
    
    const updateClassAtIndex = (index, newClass) => {
        setMarks((prev) => {
            const newMarks = [...prev];
            newMarks[index].classCss = newClass; 
            return newMarks;
        });
    };

    const hideAllXMarkers = () => {
        setMarks((prev) =>
            prev.map((mark) => ({
                ...mark,
                classCss: "hidden"
            }))
        );
    }

    const handleCounterUpdate = (counter) => {
        if (counter === 0) {
            hideAllXMarkers();
            return;
        }

        updateClassAtIndex(counter - 1, "block");
    };

    createEffect(() => {
        const counter = XMarkerCount();
        handleCounterUpdate(counter);
    });


    return (
        <div>
            <div class={`max-w-fit ${props.tailwindPadding} bg-blue-800 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
                <div class="flex justify-around">
                    {marks().map((div, index) => (
                        <div key={div.id} class={`flex items-center justify-center ${props.tailwindWidth} ${props.tailwindHeight}`}>
                            <img src={xCross} alt="X" class={`${div.classCss} ${props.tailwindWidth} ${props.tailwindHeight}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
