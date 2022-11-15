//States
import { useState } from 'react'

//Css
import './App.css';


//Components
import Authentication from './components/authentication/Authentication';
import Navbar from './components/mini-components/navbar/Navbar';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/mini-components/footer/Footer';
import Jobs from './components/jobs/Jobs';
import Fof from './components/four-ow-four/Fof';
import PostJob from './components/post-a-job/PostJob'
import Companies from './components/companies/Companies';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import MainJob from './components/main-job/Mainjob'
import SavedJobs from './components/saved-jobs/SavedJobs';

//Modules
import { Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  //States
  let [close,setClose] = useState(false)

  //States functions
  let handleClose = ()=>{
      close?setClose(false):setClose(true)
  }

  return (
    <>
    <ToastContainer />
    <Navbar open={handleClose} />
    <Routes>
      <Route path="*" element={<Fof />} />
      <Route path="/" element={<Jobs />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/main-job" element={<MainJob />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="/post-a-job" element={<PostJob />} />
    </Routes>
    <section className="app">
      {
        close?
        <Authentication setClose={handleClose} close={close} />
        :
        ""
      }
      <Newsletter />
      <Footer />
    </section>
    </>
  );
}

export default App;
