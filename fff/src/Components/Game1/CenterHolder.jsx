import AnswersBoard from "./AnswersBoard";
import Logo from "./Logo";
import MainCounter from "./MainCounter";
import VictoryAlert from "./VictoryAlert";

export default function CenterHolder(props) {
    return (
        <div class="z-40 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-6">
            <div class="flex flex-row justify-center items-center gap-x-2">
                <MainCounter />
                <VictoryAlert />
            </div>
            <AnswersBoard />
        </div>
    );
}