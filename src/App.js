// import { useState } from "react";
// import LoginForm from "./components/LoginForm/LoginForm";
// export default function App() {
//   const adminDb = {
//     email: "123@hc.com",
//     password: "admin",
//   };

//   const [user, setUser] = useState({name: "", email: ""});
//   const [error, setError] = useState("");

//   const Login = details => {
//     console.log(details);

//     if(details.email === adminDb.email && details.password === adminDb.password ) {
//       console.log("Logged in");
//       setUser({
//         name: details.name,
//         email: details.email,
//       });
//     } else {
//       setError("Not match!")
//     }
//   }

//   const Logout = () => {
//     setUser({ name: "", email: "", });
//     console.log("Logout");
//   }

//   return (
//     <div className="App">
//       {(user.email !== "") ? (
//         <div className="welcome">
//           <h2>Welcome, <span>{user.name}</span></h2>
//           <button onClick={Logout}>Logout</button>
//         </div>
//       ) : (
//         <LoginForm Login={Login} error={error}/>
//       )}
//     </div>
//   );
// }
import React from 'react'
import Login from './pages/Login';

export default function App() {
  return (
    <div>
      <Login />
    </div>
  )
}
