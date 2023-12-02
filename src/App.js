import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import EmployeeAuth  from './Components/Auth/employee/EmployeeAuth';
import RecruitAuth  from './Components/Auth/recruiter/RecruitAuth';

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Jobs from './Pages/Jobs';
import PostAJob from './Pages/employer/PostAJob';
import MyJobs from './Pages/employer/MyJobs';
import AverageSalary from './Pages/user/AverageSalary';
import UpdateJob from './Pages/employer/UpdateJob';
import { BASE_URL } from './services/baseUrl';
import JobDetails from './Pages/JobDetails';

function App() {

  
  return (
    <>

    <Routes>
      <Route   path='/' element={<Home/>} />
      <Route   path='/user/signup' element={<EmployeeAuth/>} />
      <Route   path='/user/login' element={<EmployeeAuth login/>} />

      <Route   path='/recruit/signup' element={<RecruitAuth />} />
      <Route   path='/recruit/login' element={<RecruitAuth login/>} />

      <Route   path='/jobs' element={<Jobs/>} />
      <Route   path='/post-job' element={<PostAJob/>} />
      <Route   path='/my-jobs' element={<MyJobs/>} />
      <Route   path='/salary' element={<AverageSalary/>} />
      <Route   path='/update-job/:id' element={<UpdateJob/>}  />
      <Route   path='/job/:id' element={<JobDetails/>}  />


      




    </Routes>
    
    <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      
    </>
  );
}

export default App;
