import SideCounter from "./SideCounter";

export default function TeamCounters() {
    return (
        <div class="px-12 h-screen w-screen absolute z-1 flex flex-row items-center justify-between">
            <SideCounter />
            <SideCounter />
        </div>
    );
}