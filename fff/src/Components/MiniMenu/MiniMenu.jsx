import { createEffect, createSignal } from "solid-js";
import { SetReponses } from "../Game1/AnswersBoard";

export default function MiniMenu() {
    const [jsonData, setJsonData] = createSignal([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    console.log(e.target.result);
                    const data = JSON.parse(e.target.result);
                    setJsonData(data); 
                } catch (error) {
                    console.error("Invalid JSON file", error);
                }
            };

            reader.readAsText(file);
        }
    };

    createEffect(() => {
        console.log("allo");
        jsonData().length > 0 && SetReponses(jsonData()[0]);
    });

    return (
        <div class="fixed bottom-0 left-0 m-2">
            <input class="hidden" type="file" accept=".json" onChange={handleFileChange} />
            <button onClick={() => document.querySelector("input[type='file']").click()} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Import
            </button>
        </div>
    );
}