 
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


const HelloList = <AddBooking />;
const HelloList22 = <TableTest />;

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

            <Route   element={<Layout />}>
                     <Route path="dashboard" element={<Dashboard />} />
                     <Route path="orders" element={<Orders />} />
                     <Route path="bookings" element={<Bookings
                       title={"Bookings"}
                       tabs={[
                        
                         { name: "Add booking", content: HelloList },
                         
                          { name: "View Boookings", content: HelloList22 },
                        //  { name: "Hello 33", content: HelloList22 },
                       ]} />} />  
            </Route>


            </Routes>
    </Router>     
   </div>
  );
}

export default App;
