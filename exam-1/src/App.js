import { Route } from 'react-router-dom';

import Sidebar from './Components/SideBar';
import Header from './Components/Header';
import Section1 from './Components/MainContentSections/Section1';
import Section2 from './Components/MainContentSections/Section2';
import Section3 from './Components/MainContentSections/Section3';
import UserProfile from './Components/UserProfile';
import Footer from './Components/Footer';

import './style/App.scss';

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Header />
        <div>
          <Route path='/' exact>
            <div className="content">
              <Section1 />
              <Section2 />
              <Section3 />
            </div>
          </Route>
          <Route path='/userProfile' exact>
            <UserProfile />
          </Route>
          <Route path='/maps' exact>
            <h1 className='title'>2 pages only so far...</h1>
          </Route>
          <Route path='/notifications' exact>
            <h1 className='title'>2 pages only so far...</h1>
          </Route>
          <Route path='/support' exact>
            <h1 className='title'>2 pages only so far...</h1>
          </Route>
        </div>
        <Footer />
      </main>
    </div>
  );
}
