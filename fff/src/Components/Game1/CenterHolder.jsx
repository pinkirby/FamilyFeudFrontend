import AnswersBoard from "./AnswersBoard";
import Logo from "./Logo";
import MainCounter from "./MainCounter";

export default function CenterHolder(props) {
    return (
        <div class="z-1 absolute flex flex-col items-center justify-center space-y-6 w-dvw h-dvh">
            <MainCounter />
            <AnswersBoard />
        </div>
    );
}