import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Subscription from './Components/Subscription';
import './Assets/css/header.css';
import './Assets/css/sidebar.css';
import './Assets/css/subscription.css';
import './Assets/css/data-list.css';
import DataList from './Components/DataList';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

 


  function PublicLayout() {
    return (
      <div div className='main-layout'>

        <div className='set-layout'>
          <Sidebar />
          <Header />
        </div>
        <Outlet />
      </div>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<PublicLayout />} >
          <Route path="/" element={<Home />} />

            <Route path="/subscription" element={<Subscription />} />
            <Route path="/data-list" element={<DataList />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
