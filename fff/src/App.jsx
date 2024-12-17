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

function App() {

  onMount(() => {
    document.body.classList.add("bg-zinc-800");
  });

  return (
    <div>
      <AudioManager />
      <AudioRegisterer />
      <XMarkerCountComponent />
      <AnswersBoard />
      <CenterXDisplay />
      <CornerXDisplay />
    </div>
  );
}

export default App;
