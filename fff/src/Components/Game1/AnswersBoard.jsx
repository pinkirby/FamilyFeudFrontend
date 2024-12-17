import { createSignal, For, onMount } from "solid-js";
import { NUMBER_CELLS_GAME1 } from "../../Constants/constants";
import BoardCell from "./BoardCell";
import BrickCell from "./BrickCell";
import RevealedBoardCell from "./RevealedBoardCell";

export default function AnswersBoard(props) {
  const [reponses, SetReponses] = createSignal([]);

  onMount(() => {
    SetReponses([
      { reponse: "Chanter devant un public / Parler devant plusieurs personnes", pourcentage: "14" },
      { reponse: "1235", pourcentage: "12" },
      { reponse: "12345678901 123", pourcentage: "10" },
      { reponse: "Réponse 4", pourcentage: "9" },
      { reponse: "Réponse 5", pourcentage: "8" },
      { reponse: "Réponse 6", pourcentage: "3" },
      { reponse: "Réponse 7", pourcentage: "2" },
    ]);
  });

  return (
    <div class="z-1 absolute flex items-center justify-center w-dvw h-dvh">
      <div class="w-7/12 h-5/6 bg-gray-500 flex flex-col flex-wrap justify-evenly content-evenly rounded-md">
        {reponses().length > 0 && (
          <For each={Array.from({ length: NUMBER_CELLS_GAME1 }, (_, i) => i)}>
            {(index) => {
              if (index >= reponses().length) {
                return <BrickCell />;
              }

              return (
                <BoardCell
                  pourcentage={reponses()[index].pourcentage}
                  reponse={reponses()[index].reponse}
                  numero={index + 1}
                />
              );
            }}
          </For>
        )}
      </div>
    </div>
  );
}