import { createEffect, createSignal, For, onMount } from "solid-js";
import { NUMBER_CELLS_GAME1 } from "../../Constants/constants";
import BoardCell from "./BoardCell";
import BrickCell from "./BrickCell";

const [reponses, SetReponses] = createSignal([]);

export default function AnswersBoard(props) {

  onMount(() => {
    SetReponses([]);
  });

  return (
    <div class="w-[50dvw] h-[60dvh] bg-gray-500 flex flex-col flex-wrap justify-evenly content-evenly rounded-md">
        <For each={reponses()}>
        {(_, index) => {
            return (
                <BoardCell
                  pourcentage={reponses()[index()].pourcentage}
                  reponse={reponses()[index()].reponse}
                  numero={index() + 1}
                />
            );
          }
        }
        </For>
        <For each={Array.from({ length: NUMBER_CELLS_GAME1 - reponses().length }, (_, i) => i)}>
          {(index) => {
            return <BrickCell />;
          }}
        </For>
      </div>
  );
}

export { SetReponses };