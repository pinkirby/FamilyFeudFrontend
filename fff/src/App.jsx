import 'flowbite';
import { AudioManager } from './Components/AudioManager';
import XMarkerCountComponent, { XMarkerCount } from './Components/XMarker/XMarkerCountComponent';
import CenterXDisplay from './Components/XMarker/CenterXDisplay';
import CornerXDisplay from './Components/XMarker/CornerXDisplay';
import { onMount } from 'solid-js';
import AudioRegisterer from './Components/AudioRegisterer';
import CenterHolder from './Components/Game1/CenterHolder';
import Logo from './Components/Game1/Logo';
import TeamCounters from './Components/Game1/TeamCounters';
import MiniMenu from './Components/MiniMenu/MiniMenu';
import VictoryAlert from './Components/Game1/VictoryAlert';

function App() {

  onMount(() => {
    document.body.classList.add("bg-zinc-800");
  });

  return (
    <div>
      <AudioManager />
      <AudioRegisterer />
      <XMarkerCountComponent />
      <Logo />
      <CenterHolder />
      <TeamCounters />
      <CornerXDisplay />
      <CenterXDisplay />
      <MiniMenu />
    </div>
  );
}

export default App;
