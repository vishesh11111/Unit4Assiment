import { useEffect, useState } from "react";
import "../css/products.css";

export const Product1 = () => {
  const [data, setdata] = useState([]);


  
  useEffect(()=>{
      GetData();
  }, []);
  
  const GetData = async () => {
    try {
      const data = await fetch(`http://localhost:8080/belts`);
      const res = data.json();
      setdata(res);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>
      {/* <div>
          {data.map((e)=>{
              <div>
                  <p>{e.name}</p>
              </div>
          })}
      </div> */}
  </div>;
};
