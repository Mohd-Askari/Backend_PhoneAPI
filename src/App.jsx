import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Form } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/pages/Home';
import Logout from './components/pages/Logout';
import Help from './components/pages/Help';
import Extension from './components/pages/Extension';
import FormData from './components/pages/FormData';
import TaskSheduler from './components/pages/TaskSheduler'
import Login from './components/pages/Login';
import AddNewUser from './components/pages/AddNewUser';
import UserList from './components/pages/UserList'
import Test from './components/pages/Test';
import GlobalConfig from './components/pages/GlobalConfig';
import Config from './components/pages/Config';




const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
      <Route path=" " element={<Home />} />
      <Route path="help" element={<Help />} />
      {/* <Route path="logout" element={<Logout />} /> */}
      <Route path="userlist" element={<UserList />} />
      <Route path="extension" element={<Extension />} />
      <Route path="add-new-user" element={<AddNewUser />} />
      <Route path="form-data" element={<FormData />} />
      <Route path="task-sheduler" element={<TaskSheduler/>}/>
      <Route path="global-config" element={ <GlobalConfig/> }/>
      <Route path="global-list" element={ <Config/> }/>
      </Route>
  )
);

const App = () => {

//  const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//       path:" ",
//       element: <Home/>
//     },
//     {
//       path:"",
//       element:<Help/>
//     },
//     {
//      path:"logout",
//      element:<Logout/>
//     }
//   ]}
//  ])

// beast way to router the element 
// const router = createBrowserRouter(
//   createRoutesFromElements(
//      <Routes>    
//       <Route path='/' element={<Layout/>} />
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//      <Route path='contact' element={<Contact/>}/>
//      </Routes>

//   )
// )

  return (
    <>
       <RouterProvider router={router} />
    
    
    </>
  );
};

export default App;
