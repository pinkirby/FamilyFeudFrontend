import BoardCell from "./BoardCell";

export default function AnswersBoard() {
    return (
        <div class="z-1 absolute flex items-center justify-center w-dvw h-dvh">
            <div class="w-7/12 h-5/6 bg-gray-500 flex flex-row flex-wrap justify-evenly content-evenly rounded-md">
                <BoardCell />
                <BoardCell />
                <BoardCell />
                <BoardCell />
                <BoardCell />
                <BoardCell />
                <BoardCell />
                <BoardCell />
            </div>
        </div>
    );
}