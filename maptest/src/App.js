 
import { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mine from './Mine'
import Hata from './Hata'
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
import Trucks from './components/pages/Driver/Trucks/Trucks';
import ViewTrucks from './components/pages/Driver/Trucks/ViewTrucks';
import OrdersDriver from './components/pages/Driver/Orders/OrdersDriver';
import TableSun from './components/pages/Driver/Table/TableSun';
import OrdersAssigned from './components/pages/Driver/Orders/OrdersAssigned';
import Payments from './components/pages/Driver/Payments/Payments';
import CustomerFeedback from './components/pages/Driver/FeedBack/CustomerFeedback';
import ChatDriver from './components/pages/Driver/Message/ChatDriver';
import TableOrders from './components/pages/Driver/Orders/TableOrders';
import TableScroll from './components/pages/Customer/TableScroll';
import DriverRequest from './components/pages/Admin/DriverRequest/DriverRequest';
import RequestUpdate from './components/pages/Admin/DriverRequest/RequestUpdate';
import RequestTable from './components/pages/Admin/DriverRequest/RequestTable';
import VerifiedRequesttable from './components/pages/Admin/DriverRequest/VerifiedRequesttable';
import CostomerBooking from './components/pages/Admin/BookingCheck/CostomerBooking';
import BookRequestAccCust from './components/pages/Admin/BookingCheck/BookRequestAccCust';
import BookRequestCust from './components/pages/Admin/BookingCheck/BookRequestCust';
import OrderAssign from './components/pages/Admin/OrdersReq/OrderAssign';
import UnAssignedOrder from './components/pages/Admin/OrdersReq/UnAssignedOrder';
import AcceptedBooking from './components/pages/Customer/Bookings/AcceptedBooking';
import Enquiry from './components/pages/Customer/Enquiry/Enquiry';


const HataBook = <AcceptedBooking/>

const Helloasa = <TableScroll />;

const HelloOrders = <TableOrders />;

const HelloList = <AddBooking />;

const HelloList22 = <TableTest />;

const HelloList33 = <TrackOrder />;

const Hata111 = <ViewTrucks />;

const Hataluli = <TableSun />;

const HelloRequestVerified = <RequestTable />;

const HelloRequestUnVerified = <VerifiedRequesttable />;

const Hellocustomerbookingv = <BookRequestAccCust />;

const Hellocustomerbookingunv = <BookRequestCust />;

const HelloOrdersUnAssigned = <UnAssignedOrder/>

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
            <Route path="/hata" element={<Hata />} />

            <Route   element={<Layout />}>
                     <Route path="dashboard" element={<Dashboard />} />
                     
                     <Route path="messages" element={<Messages />} />

                     <Route path="packages" element={<Packages />} />

                     <Route path="enqq" element={<Enquiry />} />

                     <Route path="orders" element={<Orders
                     
                     title={"Orders"}
                       tabs={[
                        
                         { name: "View Orders", content: HelloList22 },
                         
                          { name: "Track Order", content: HelloList33 },
                          { name: "View Order on Map", content: HelloList33 },
                       ]}
                     />} />
                     <Route path="bookings" element={<Bookings
                       title={"Bookings"}
                       tabs={[
                        
                         { name: "Add booking", content: HelloList },
                         
                          { name: "View Boookings", content: HelloList22 },
                          { name: "Accepted Boookings", content: HataBook },
                        //  { name: "Hello 33", content: HelloList22 },
                       ]} />} />  
            </Route>


            <Route   element={<LayoutDriver />}>

            <Route path="dashd" element={<DashboardDriver />} />
            <Route path="orderass" element={<OrdersAssigned />} />
            <Route path="payments" element={<Payments />} />
            <Route path="customef" element={<CustomerFeedback />} />
            <Route path="chatdd" element={<ChatDriver/>} />
            <Route path="trucks" element={<Trucks 
             title={"TRUCKS"}
             tabs={[
              
               { name: "View Unverified Trucks", content: Helloasa },
               
                { name: "View Verified Trucks", content: HelloList22 },
                { name: "View Operating Trucks", content: Hata111 },
              //  { name: "Hello 33", content: HelloList22 },
             ]} />} />

            <Route path="ordersd" element={<OrdersDriver 
             title={"ORDERS"}
             tabs={[
              
               { name: "View Orders", content: HelloOrders },
               
                { name: "View Order Map", content: HelloList22 },
                { name: "View Tucks", content: HelloOrders },
              //  { name: "Hello 33", content: HelloList22 },
             ]} />} />

            </Route>


            <Route   element={<LayoutAdmin />}>

            <Route path="dasha" element={<DashboardAdmin />} />
            <Route path="requestdriver" element={<DriverRequest 
             title={"Drivers Request"}
             tabs={[
              
               { name: "Unverified Request", content: HelloRequestVerified },
               
                { name: "Verified Request", content: HelloRequestUnVerified },
                
               
             ]}/>} />
            <Route path="requestdriver/update/:code" element={<RequestUpdate />} />
            {/* 'customer/edit/:code' */}

            <Route path="costbooking" element={<CostomerBooking
            title={"Customer Bookings"}
            tabs={[
             
              { name: "Unverified Bookings", content: Hellocustomerbookingunv },
              
               { name: "Verified Bookings", content: Hellocustomerbookingv },
               
              
            ]} />} />


            <Route path="orderassign" element={<OrderAssign
            title={"Order Assigning Driver"}
            tabs={[
             
              { name: "UnAssigned Orders", content: HelloOrdersUnAssigned },
              
               { name: "Assigned Orders", content: Hellocustomerbookingv },
               
              
            ]} />} />



            </Route>


            


            </Routes>
    </Router>     
   </div>
  );
}

export default App;
