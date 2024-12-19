import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { SetReponses } from "../Game1/AnswersBoard";
import { setMainCounter } from "../Game1/MainCounter";
import { clearXs } from "../XMarker/XMarkerCountComponent";


let modeLabels = new Map();
modeLabels.set("normal", " -- NORMAL -- ");
modeLabels.set("reveal", " -- REVEAL -- ");

const [mode, setMode] = createSignal("normal");
const [gameIndex, setGameIndex] = createSignal(0);
const [leftNumber, setLeftNumber] = createSignal(0);
const [rightNumber, setRightNumber] = createSignal(0);
const [inFix, setInFix] = createSignal(false);

export default function MiniMenu() {
    const [jsonData, setJsonData] = createSignal({});
    const [currentGame, setCurrentGame] = createSignal("jeu1");

    const toggleMode = () => {
        if (mode() === "normal") {
            setMode("reveal");
            return;
        }
        setMode("normal");
    };

    const handleKeyDown = (event) => {
        if (event.code === "KeyS") {
            toggleMode();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    setJsonData(data); 
                } catch (error) {
                    console.error("Invalid JSON file", error);
                }
            };

            reader.readAsText(file);
        }
    };

    const handleRightArrowClick = () => {
        let newIndex = gameIndex() + 1;
        if (!jsonData[currentGame()] && newIndex >= jsonData()[currentGame()].length) {
            return;
        }

        setGameIndex(newIndex);
        setMainCounter(0);
    };

    const handleLeftArrowClick = () => {
        let newIndex = gameIndex() - 1;
        if (!jsonData[currentGame()] && newIndex < 0) {
            return;
        }

        setGameIndex(newIndex);
        setMainCounter(0);
    };

    const handleLeftInput = (e) => {
        let val = e.target.value;
        if (!val || val == "" || val == 0) return;
        const value = e.target.value.replace(/\D/g, "");
        e.target.value;
        setLeftNumber(value);
    };

    const handleRightInput = (e) => {
        let val = e.target.value;
        if (!val || val == "" || val == 0) return;
        const value = e.target.value.replace(/\D/g, "");
        e.target.value;
        setRightNumber(value);
    };

    const handleFixClick = () => {
        setInFix(!inFix());
    }

    createEffect(() => {
        let data = jsonData()[currentGame()] 
        if (!data) return;
        if (gameIndex() < 0 || gameIndex >= data.length) return;
        SetReponses(data[gameIndex()]);
        clearXs();
        setMode("normal");
    });

    window.addEventListener('keydown', handleKeyDown);
    onCleanup(() => window.removeEventListener('keydown', handleKeyDown));


    return (
        <div class="fixed bottom-0 left-0 m-2">
            <input class="hidden" type="file" accept=".json" onChange={handleFileChange} />
            <button onClick={() => document.querySelector("input[type='file']").click()} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Import
            </button>
            <button onclick={handleFixClick} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Fix
            </button>
            <button onClick={handleLeftArrowClick} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                &larr;
            </button>
            <button onClick={handleRightArrowClick} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                &rarr;
            </button>
            <p class="text-white inline-block">
                {modeLabels.get(mode())}
            </p>
            {inFix() && (
                <div>
                    <input type="text" onInput={handleLeftInput}  />
                    <input type="text" onInput={handleRightInput}  />
                </div>
            )}
        </div>
    );
}

export { mode, gameIndex, leftNumber, rightNumber, inFix };
