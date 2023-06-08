import React, { useState, useEffect } from "react";
//import { format } from 'date-fns'
import { Link } from "react-router-dom";
import { getOrderStatus } from "../../../../lib/helpers/status";

import Module from "../../../../helpers/Module";

import { MdOutlinePictureAsPdf } from "react-icons/md";

import { FaDownload } from "react-icons/fa";

import { GoDesktopDownload } from "react-icons/go";

import { FiEdit } from "react-icons/fi";

import { baseUrl } from "../../../../constants/urll";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Badge,
} from "@chakra-ui/react";
//import UpdateRequest from "./UpdateRequest";

import { useNavigate, useParams } from "react-router-dom";

 

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "6",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "7",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "8",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "9",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "10",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "11",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "12",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "13",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "14",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "15",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "16",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "17",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
];

const RequestTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate=useNavigate();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [drivers, setDrivers] = useState([]);

  const [password, setPassword] = useState("");

  //for getting the drivers
  useEffect(() => {
    Module.get("/DriverStorage/getunverdriver")
      .then((response) => {
        setDrivers(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  const HandleGo = async (id,e) =>
  {
    e.preventDefault();

    navigate( '/requestdriver/update/' + id);
  }

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">All Bookings </strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700 overflow-hidden border-collapse shadow-md">
          <thead className="bg-black text-white">
            <tr>
              <th>ID</th>
              <th>Driver Name</th>
              <th>Driver Surname </th>
              <th>Email</th>
              <th>Contact</th>
              {/* <th>Order Status</th> */}
              <th>Download</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            {drivers.map((driver) => (
              <tr key={driver.dsId}>
                <td>
                  <Link to={`/order/${driver.dsId}`}>#{driver.dsId}</Link>
                </td>
                {/* <td>
                            <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                        </td> */}
                {/* <td>
                            <Link to={`/customer/${driver.customer_id}`}>{order.customer_name}</Link>
                        </td> */}
                <td>{driver.dsName}</td>
                <td>{driver.dsSurname}</td>
                <td>{driver.dsEmail}</td>
                <td>{driver.dsNumber}</td>
                {/* <td>{getOrderStatus(order.current_order_status)}</td> */}
                <td className="px-6">
                  {" "}
                  <a
                    href={`${baseUrl}/DriverStorage/download/${driver.dsDoc1}`}
                  >
                    <GoDesktopDownload size={30} />
                  </a>
                </td>
                <td className="px-10">
                  {" "}
                  {/* to={`/order/${driver.dsId}`} */}
                  <Link  to={`/requestdriver/update/` +driver.dsId }>
                    <FiEdit size={30} />
                  </Link>
                </td>

                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} px={6}></ModalBody>
                    {/* <h1>{driver.dsName}</h1> */}
                      {/* <UpdateRequest dsName={driver.dsName}/>   */}
                 

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3}>
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;
