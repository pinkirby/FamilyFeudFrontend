import logo from './logo.svg';
import styles from './App.module.css';
import 'flowbite';
import { registerAudio, AudioManager } from './Components/AudioManager';
import buzzerWrong from './assets/buzzerWrong.mp3';
import XMarkerDisplay from './Components/XMarker/XMarkerDisplay'
import XMarkerCountComponent, { XMarkerCount } from './Components/XMarker/XMarkerCountComponent';
import CenterXDisplay from './Components/XMarker/CenterXDisplay';
import CornerXDisplay from './Components/XMarker/CornerXDisplay';
import AnswersBoard from './Components/Game1/AnswersBoard';
import { onMount } from 'solid-js';
import AudioRegisterer from './Components/AudioRegisterer';
import CenterHolder from './Components/Game1/CenterHolder';
import Logo from './Components/Game1/Logo';
import TeamCounters from './Components/Game1/TeamCounters';
import MiniMenu from './Components/MiniMenu/MiniMenu';

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
