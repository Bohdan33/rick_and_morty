// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const Profile = ({ character, id }) => {
//   const [profile, setProfile] = useState([]);

//   let location = useLocation();

//   useEffect(() => {
//     async function fetchCharaters() {
//       let res = await fetch(
//         `https://rickandmortyapi.com/api/character/${location.state}`
//       );
//       let data = await res.json();
//       setProfile(data);
//     }
//     fetchCharaters();
//   }, []);

//   console.log("info", profile);

//   return <Router>{profile.name}</Router>;
// };

// export default Profile;
