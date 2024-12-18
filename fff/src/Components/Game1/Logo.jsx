import logoImg from "../../assets/ff2.png"

export default function Logo() {
    return (
        <div class={`flex items-start justify-start h-screen -z-2 absolute w-dvw h-dvh`}>
            <img src={logoImg} alt="logo" class="m-3 w-44 h-44 rounded-xl border-4 border-yellow-400" />
        </div>
    );
}