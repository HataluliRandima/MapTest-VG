import React, { Fragment, useState } from "react";
import BlackButton from "../components/pages/Driver/BackButton";
import ModalDriver from "../components/pages/Driver/ModalDriver";
import Footer from "./Footer";
import axios from "axios";
// import httpModule from "../helpers/http.module.ts";
  import Module from "../helpers/Module";

const Home = () => {
  const [nameUser, setNameUser] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState("");
  const [pdfFile, setPdfFile] = useState( "");


  const [fileName, setFileName] = useState("");

  const [showModal, setShowModal] = useState(false);


  const [fileSelected, setFileSelected] = useState();


  const uploadFinal =(e) => {

    e.preventDefault();
   

      const newCandidateFormData = new FormData();
      newCandidateFormData.append("DsName", nameUser);
      newCandidateFormData.append("DsSurname", surname);
      newCandidateFormData.append("DsEmail", email);
      newCandidateFormData.append("DsNumber", number);
      newCandidateFormData.append("pdfFile", pdfFile);
      Module
         .post("/DriverStorage/reqdriver", newCandidateFormData)
         .then((responst) => 
         console.log(responst))
         .catch((error) => console.log(error));
  };


  const saveFileSelected= (e) => {
    //in case you wan to print the file selected
    //console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pdfFile", file);
    const inputobj={ "pdfFile": formData};
    // 👇 Uploading the file using the fetch API to the server
    fetch('https://localhost:7229/api/DriverStorage/upload', {
      method: 'POST',
      body: inputobj,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

  }

  const importFile= async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdfFile", fileSelected);
    try {
      const res = await axios.post("https://localhost:7229/api/DriverStorage/upload", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        }}).then((response) => {
          console.log(response.status, response.data);
        });
    } catch (ex) {
      console.log(ex);
    }
  };



  const saveFile = (e) => {
 
    
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0].name);
  };



  const handleLogin = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("formFile",file);
    formData.append("fileName",fileName);

    const inputobj={"DsName": nameUser,
    "DsSurname": surname,"DsNumber": number,"DsEmail": email,"pdfFile": formData};

  
    fetch("https://localhost:7229/api/DriverStorage/upload",{
      method:'POST',
      headers:{"Content-Type":"multipart/form-data"},
      body:formData
  }).then((res) => {
      return res.json();
  }).then((resp) => {
      console.log(resp)
      if (Object.keys(resp).length === 0) {
          console.log('Login failed, invalid credentials');
      }else{
        console.log('Success');
        //    sessionStorage.setItem('usernamedriver',resp.name);
        //    sessionStorage.setItem('jwttokenD',resp.token);
        //  navigate('/dashd')
      }
      
  }).catch((err) => {
      console.log('Login Failed due to :' + err.message);
  });

 


    console.log(inputobj);
  };


  const handleLoginFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("formFile",file);
    formData.append("fileName",fileName);

    const inputobj={"DsName": nameUser,
    "DsSurname": surname,"DsNumber": number,"DsEmail": email,"pdfFile":formData};


    // axios.post("https://reqres.in/api/users", userData).then((response) => {
    //   console.log(response.status, response.data);
    // });

    try 
    {
       const res = await axios.post("https://localhost:7229/api/DriverStorage/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }}).then((response) => {
        console.log(response.status, response.data);
      });
    }catch(ex)
    {
      console.log(ex);
    }

  };


  return (
    <Fragment>
      <div
        name="home"
        className="flex flex-col justify-between w-full h-screen bg-white text-black text-center md:text-left"
      >
        <div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-2xl text-gray-500">
              Cheapest Transport on Planet Earth
            </p>
            <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
              <span className="text-lightColor">VG</span> Transport system
            </h1>
            <p className="text-base font-light text-gray-500">
              Explore cushions he with fowl was nodded, merely suddenly thee
              bore nevermore. My bust sitting the ease of the will.
            </p>
            {/* <BlackButton
          title="sign up"
          className="capitalize py-3 px-6 sm:w-8/12 my-8"
        /> */}
            <button
              className="border bg-black text-white border-white hover:bg-black hover:text-white rounded-md duration-300 ease-out capitalize py-3 px-6 sm:w-8/12 my-8"
              onClick={() => setShowModal(true)}
            >
              Become Driver
            </button>
          </div>

          {/* <div className="flex items-center justify-center">
        <img src={hero} alt="hero" className="w-3/4 rounded-full" />
      </div> */}
        </div>
      </div>
      <ModalDriver isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Upload Your information
          </h3>
          <form className="space-y-4" action="#">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                value={nameUser}
                onChange={(e) => setNameUser(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name yours"
                required
              />
            </div>
            <div>
              <label
                for="surname"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Surname
              </label>
              <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                name="surname"
                id="surname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="surname yours"
                required
              />
            </div>
            <div>
              <label
                for="number"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Number
              </label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                name="number"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Number yours"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="emails yours"
                required
              />
            </div>

            {/* <div>
            <label for="password" className='block mb-2 text-sm font-medium text-gray-900'>
                Your password
             </label>
              <input type='password' name='password' id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='******'
              required />
            </div> */}

            <div>
              <label
                for="file"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Merged Documents
              </label>
              <input
                // value={file}
                onChange={(event) => setPdfFile(event.target.files ? event.target.files[0] : null)}
                type="file"
                name="file"
                id="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Document Here"
                required
              />
            </div>
            <button
              type="submit"
              onClick={uploadFinal}
              className="w-full text-white bg-black  focus:ring focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </ModalDriver>

      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
