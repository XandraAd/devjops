
import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import JobCard from "./components/JobCard";
import jsonData from "./data/data.json"
import Button from "./components/Button";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);




  return (
    <>

<Nav />
<div className="job">

        <div  className="job-card">
          {data.map((item,id) => (
          
            <JobCard
              key={id}
              logo={item.logo}
              color={item.logoBackground}
              time={item.postedAt} 
              contract={item.contract}
              title={item.position}
              company={item.company}
              country={item.location}
            
             

            />
          ))}
        </div>

      
</div>
<Button/>


     


     

    </>
  );
}




export default App;





