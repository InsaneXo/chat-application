import React from "react";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return <div>Home</div>;
};

export default AppLayout()(Home);

// High Order Components Example

// export default (props) =>{
//     return (
//         <div>
//         <div>Header</div>
//         <Home {...props} />
//         <div>Footer</div>
//       </div>
//     )
// }