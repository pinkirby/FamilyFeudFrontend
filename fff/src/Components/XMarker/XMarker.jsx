import 'flowbite';
import { createSignal, onCleanup, onMount } from 'solid-js';
import buzzerWrong from '../../assets/buzzerWrong.mp3';
import xCross from '../../assets/XMarker.png';

function XMarker() {
    const [currentIndex, SetCurrentIndex] = createSignal(0)
    const [marks, setMarks] = createSignal([
        { id: 1, classCss: "hidden"},
        { id: 2, classCss: "hidden"},
        { id: 3, classCss: "hidden"}
    ]);
    const [isVisible, setIsVisible] = createSignal(false);
    const audio = new Audio(buzzerWrong)

    const updateClassAtIndex = (index, newClass) => {
        setMarks((prev) => {
            const newDivs = [...prev]; // Create a shallow copy
            newDivs[index].classCss = newClass; // Update the class
            return newDivs; // Return the new array
        });
    };

    onMount(() => {
        //setMarks(indexes.map((_, index) => (
//            <div key={index} class="flex items-center justify-center">
 //               <img src={xCross} alt="X" class="w-full max-w-[6rem]"/>
  //          </div>
        //)));
    });
    
    const handleKeyDown = (e) => {
        if (e.key === 'x' && currentIndex() < 3)
        {
            updateClassAtIndex(currentIndex(), "block")
            SetCurrentIndex(currentIndex() + 1);
            audio.currentTime = 0;
            audio.play();
        }

        if (marks().length > 0)
        {
            setIsVisible(true);
        }
        else
        {
            setIsVisible(false);
        }

        if (e.key == 'c')
        {
            updateClassAtIndex(0, "hidden");
            updateClassAtIndex(1, "hidden");
            updateClassAtIndex(2, "hidden");
            SetCurrentIndex(0);
            setIsVisible(false);
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));

    return (
        <div>
            <div class="max-w-sm p-6 bg-blue-800 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-around">
                    {marks().map((div, index) => (
                        <div key={div.id} class="flex items-center justify-center">
                            <img src={xCross} alt="X" class={`${div.classCss} w-full max-w-[6rem]`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default XMarker;