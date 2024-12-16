import logo from './logo.svg';
import styles from './App.module.css';
import 'flowbite';
import { registerAudio, AudioManager } from './Components/AudioManager';
import buzzerWrong from './assets/buzzerWrong.mp3';
import XMarkerDisplay from './Components/XMarker/XMarkerDisplay'
import XMarkerCountComponent, { XMarkerCount } from './Components/XMarker/XMarkerCountComponent';
import CenterXDisplay from './Components/XMarker/CenterXDisplay';
import CornerXDisplay from './Components/XMarker/CornerXDisplay';

function App() {

  registerAudio("x", buzzerWrong)

  return (
    <>
      <AudioManager />
      <XMarkerCountComponent />
      <div>
        {/* <XMarkerDisplay tailwindWidth="w-24" tailwindHeight="h-24" tailwindPadding="p-3"/> */}
        <CenterXDisplay />
      </div>
      <CornerXDisplay />
    </>
  );
}

export default App;
