import logoImg from "../../assets/ff2.png"

export default function Logo() {
    return (
        <div class={`fixed top-0`}>
            <img src={logoImg} alt="logo" class="m-3 w-44 h-44 rounded-xl border-4 border-yellow-400" />
        </div>
    );
}