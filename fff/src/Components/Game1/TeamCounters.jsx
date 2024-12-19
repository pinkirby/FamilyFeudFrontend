import SideCounter from "./SideCounter";

export default function TeamCounters() {
    return (
        <div class="z-1 fixed top-1/2 w-dvw flex flex-row items-center justify-between px-[calc((25dvw-9rem)/2)]">
            <SideCounter />
            <SideCounter />
        </div>
    );
}