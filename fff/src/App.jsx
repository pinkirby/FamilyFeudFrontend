import logo from './logo.svg';
import styles from './App.module.css';
import 'flowbite';
import { registerAudio, AudioManager } from './Components/AudioManager';
import buzzerWrong from './assets/buzzerWrong.mp3';
import XMarkerDisplay from './Components/XMarker/XMarkerDisplay'
import XMarkerCountComponent, { XMarkerCount } from './Components/XMarker/XMarkerCountComponent';
import CenterDisplay from './Components/XMarker/CenterDisplay';

function App() {

  registerAudio("x", buzzerWrong)

  return (
    <>
      <AudioManager />
      <XMarkerCountComponent />
      <div>
        {/* <XMarkerDisplay tailwindWidth="w-24" tailwindHeight="h-24" tailwindPadding="p-3"/> */}
        <CenterDisplay />
      </div>
    </>
  );
}

export default App;
