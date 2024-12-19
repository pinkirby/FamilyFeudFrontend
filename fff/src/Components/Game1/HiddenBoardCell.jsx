import ding from '../../assets/ding.mp3';

export default function HiddenBoardCell(props) {

    const handleOnClick = () => {
        props.setRevealed(true);
        let audio = new Audio(ding);
        audio.play();
    };

    return (
        <div onclick={handleOnClick} class={`flex flex-row-reverse w-[47%] h-[22.5%] p-0 bg-green-800 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <div class="object-cover flex-1 h-full w-full rounded-lg bg-blue-500">
                <div class="flex items-center justify-center h-full w-full">
                    <div class="p-4 rounded-full bg-blue-900">
                        <p class="text-white text-5xl">
                            {props.numero}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}