import React ,{useState} from 'react'

 
import { Link ,useNavigate  } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'

const LoginC = () => {

  const toast = useToast();

  const navigate = useNavigate();
    //for toggle
    const [Toggle, setToggle] = useState("Customer");


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const showToast = () =>{
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        variant:'left-accent',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      })

    }

   

    const handleCustomerLogin = async (username, password) => {
      

      let inputobj={"cEmail": username,
          "cPassword": password};
          fetch("https://localhost:7229/api/Customers/customerlogin",{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(inputobj)
          }).then((res) => {
              return res.json();
          }).then((resp) => {
              console.log(resp)
              if (Object.keys(resp).length === 0) {
                  console.log('Login failed, invalid credentials');
              }else{
                console.log('Success');
                   sessionStorage.setItem('username',resp.name);
                   sessionStorage.setItem('jwttokenC',resp.token);
                 navigate('/dashboard');
                 showToast();
              }
              
          }).catch((err) => {
              console.log('Login Failed due to :' + err.message);
          });
      // const res = await fetch("/login/patient", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     healthID,
      //     password,
      //   }),
      // });
  
      // const data = await res.json();
  
      // if (data.errors) {
      //   setUsernameError(data.errors.healthID);
      //   setPasswordError(data.errors.password);
      //   setLoading(false);
      // } else {
      //   setLoading(false);
      //   props.settoastCondition({
      //     status: "success",
      //     message: "Logged in Successfully!!!",
      //   });
      //   props.setToastShow(true);
      //   navigate("/patient/dashboard");
      // }
    };



    const handledriverLogin = async (username, password) => {
      

      let inputobj={"dEmail": username,
          "dPassword": password};
          fetch("https://localhost:7229/api/Drivers/Driverlogin",{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(inputobj)
          }).then((res) => {
              return res.json();
          }).then((resp) => {
              console.log(resp)
              if (Object.keys(resp).length === 0) {
                  console.log('Login failed, invalid credentials');
              }else{
                console.log('Success');
                   sessionStorage.setItem('usernamedriver',resp.name);
                   sessionStorage.setItem('jwttokenD',resp.token);
                 navigate('/dashd')
              }
              
          }).catch((err) => {
              console.log('Login Failed due to :' + err.message);
          });
 
    };


    const handleAdminLogin = async (username, password) => {
      

      if(username == "admin@gmail.com"&& password == "123456") {
        navigate('/dasha');
        showToast();
      }
      else{
        console.log('Login failed, invalid credentials');
      }

      // let inputobj={"cEmail": username,
      //     "cPassword": password};
      //     fetch("https://localhost:7012/api/Customers/customerlogin",{
      //         method:'POST',
      //         headers:{'content-type':'application/json'},
      //         body:JSON.stringify(inputobj)
      //     }).then((res) => {
      //         return res.json();
      //     }).then((resp) => {
      //         console.log(resp)
      //         if (Object.keys(resp).length === 0) {
      //             console.log('Login failed, invalid credentials');
      //         }else{
      //           console.log('Success');
      //              sessionStorage.setItem('username',username);
      //              sessionStorage.setItem('jwttokenC',resp.token);
      //            navigate('/dasha')
      //         }
              
      //     }).catch((err) => {
      //         console.log('Login Failed due to :' + err.message);
      //     });
 
    };




    const handleLogin = async (e) => {
      e.preventDefault();
      switch (Toggle) {
        case "Customer":
          handleCustomerLogin(username, password);
          break;
         case "Driver":
           handledriverLogin(username, password );
           break;
         case "Admin":
           handleAdminLogin(username, password);
          break;
        default:
          break;
      }
    };

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
    >
      
      <div class="flex flex-col justify-center p-8 md:p-14">
        <h1 class="mb-3 text-4xl font-bold">Welcome back</h1>
        <span class="font-light text-gray-500 mb-8">
        Welcome back! Please enter you details and select your Role.
        </span>


        <div className="flex bg-bgsecondary w-fit justify-between rounded ml-5">
        <button
          className={
            Toggle === "Customer"
            ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-slate-700"
            : "py-2 px-8 text-lg font-poppins font-medium text-white cursor-pointer rounded bg-slate-400"
          }
          onClick={() => {
            setToggle("Customer");
            setUsername("");
            setPassword("");
          }}
          
        >
          Customer
        </button>
        <button
           
          className={
            Toggle === "Driver"
             ? "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded bg-slate-700"
             :"py-2 px-8 text-lg font-poppins font-medium text-white cursor-pointer rounded bg-slate-400"
          }
          onClick={() =>
        {
            setToggle("Driver");
            setUsername("");
            setPassword("");
        }}
        >
          Driver
        </button>
        <button
           
          className={
            Toggle === "Admin"
            ? "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded bg-slate-700"
            :"py-2 px-8 text-lg font-poppins font-medium text-white cursor-pointer rounded bg-slate-400"
          }
          onClick={() =>
            {
                setToggle("Admin");
                setUsername("");
                setPassword("");
            }}
        >
          Admin
        </button>
      </div>
        


        <div class="py-4">
          <span class="mb-2 text-md">Email</span>
          <input
          value={username} onChange={e => setUsername(e.target.value)}
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
          />
        </div>
        <div class="py-4">
          <span class="mb-2 text-md">Password</span>
          <input
          value={password} onChange={e => setPassword(e.target.value)}
            type="password"
            name="pass"
            id="pass"
            class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
        <div class="flex justify-between w-full py-4">
          <div class="mr-24">
           
          </div>
          <button className='font-bold text-base text-slate-500'>Forgot password ?</button>
        </div>
        <button
          class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-black hover:text-white hover:border hover:border-gray-300"
          onClick={handleLogin}
        >
          Sign in
        </button>
        
        <div class="text-center  ">
        Don't have an account as Customer?
        <Link 
                 to={'/registerc'}
                 className='ml-2 font-bold text-base text-slate-400  '>Sign up</Link>
           
        </div>

        
      </div>
       
     
      </div>
    </div>
 
  )
}

export default LoginC