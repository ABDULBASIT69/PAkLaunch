import './App.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AnniversaryAchievements from './assets/components/AnniversaryAchievements';
import ConferenceAgenda from './assets/components/ConferenceAgenda';
import Header from './assets/components/Header';
import UnconferenceEvent from './assets/components/UnconferenceEvent';
import Investors from './assets/components/Investors';
import Enablers from './assets/components/Enablers';
import Wherewego from './assets/components/Wherewego';

function App() {
  return (
    <div className='body'>
      <Header/>
      <ConferenceAgenda />
      <UnconferenceEvent />
      <AnniversaryAchievements />
      <Investors />
      <Enablers />
      <Wherewego />
    </div>
  );
}

export default App;
