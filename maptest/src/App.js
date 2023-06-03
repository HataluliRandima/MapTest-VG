 
import { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mine from './Mine'
import LoginC from './components/LoginC';
import RegisterC from './components/RegisterC';
import NavBar from './components/NavBar';
import Dashboard from './components/pages/Customer/Dashboard';
import Bookings from './components/pages/Customer/Bookings';
import Layout from './components/shared/Layout';
import Orders from './components/pages/Customer/Orders';
import AddBooking from './components/pages/Customer/AddBooking';
import TestBox from './components/pages/Customer/TestBox';
import TableTest from './components/pages/Customer/TableTest';
import Messages from './components/pages/Customer/Messages';
import TrackOrder from './components/pages/Customer/TrackOrder';
import AddOrder from './components/pages/Customer/AddOrder';
import Testanime from './components/pages/Driver/Testanime';
import Packages from './components/pages/Customer/Packages';
import LayoutDriver from './components/shared/LayoutDriver';
import DashboardDriver from './components/pages/Driver/DashboardDriver';
import LayoutAdmin from './components/shared/LayoutAdmin';
import DashboardAdmin from './components/pages/Admin/DashboardAdmin';


const HelloList = <AddBooking />;
const HelloList22 = <TableTest />;

const HelloList33 = <TrackOrder />;

function App() {

   


  return (
    <div>
   {/* <Mine/> */}
   <Router>
            <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/loginc" element={<LoginC />} />
            <Route path="/registerc" element={<RegisterC />} />
            <Route path="/mine" element={<Mine />} />
            <Route path="/box" element={<TestBox />} />
            {/* <Route path="/messages" element={<Messages />} /> */}
            <Route path="/add" element={<AddOrder />} />
            <Route path="/anime" element={<Testanime />} />

            <Route   element={<Layout />}>
                     <Route path="dashboard" element={<Dashboard />} />
                     
                     <Route path="messages" element={<Messages />} />

                     <Route path="packages" element={<Packages />} />

                     <Route path="orders" element={<Orders
                     
                     title={"Orders"}
                       tabs={[
                        
                         { name: "View Orders", content: HelloList22 },
                         
                          { name: "Track Order", content: HelloList33 },
                        
                       ]}
                     />} />
                     <Route path="bookings" element={<Bookings
                       title={"Bookings"}
                       tabs={[
                        
                         { name: "Add booking", content: HelloList },
                         
                          { name: "View Boookings", content: HelloList22 },
                        //  { name: "Hello 33", content: HelloList22 },
                       ]} />} />  
            </Route>


            <Route   element={<LayoutDriver />}>

            <Route path="dashd" element={<DashboardDriver />} />
            </Route>


            <Route   element={<LayoutAdmin />}>

            <Route path="dasha" element={<DashboardAdmin />} />
            </Route>


            </Routes>
    </Router>     
   </div>
  );
}

export default App;
