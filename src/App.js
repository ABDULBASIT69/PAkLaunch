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
import Sponsors from './assets/components/Sponsors';
import Venue from './assets/components/Venue';
import ContactUs from './assets/components/ContactUs';
import Copyright from './assets/components/Copyright';

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
      <Sponsors />
      <Venue />
      <ContactUs />
      <Copyright />
    </div>
  );
}

export default App;
