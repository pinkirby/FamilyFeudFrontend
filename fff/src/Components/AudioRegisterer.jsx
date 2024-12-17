import { registerAudio } from "./AudioManager";
import buzzerWrong from '../assets/buzzerWrong.mp3';
import ding from '../assets/ding.mp3';
import { keyMapGame1 } from "../Constants/constants";

export default function AudioRegisterer() {
    registerAudio("KeyX", buzzerWrong);

    const GetAllCodeFromBoard = (map) => {
        let allcodes = [];

        map.forEach(code => {
            allcodes = allcodes.concat(code);
        });

        return allcodes;
    };

    const codes = GetAllCodeFromBoard(keyMapGame1);
    codes.forEach(code => {
        registerAudio(code, ding)
    });

    return null;
}