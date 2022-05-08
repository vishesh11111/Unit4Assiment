import { useEffect, useState } from "react";
import "../css/slide.css";

export const Slide = () => {
const [d, setd] = useState(0);

    const arr = [
        "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Navy-Konbu-Rucksack-Sale-Hero_300x.jpg?v=1651791008",
        "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Hero-Gabbro-03_300x.jpg?v=1650927701",
        "https://cdn.shopify.com/s/files/1/0044/9802/files/Nanamica-Journal-Hero-01_c7dbe218-fa8a-4f76-8a40-a835c4d49000_300x.jpg?v=1650562504",
    ];

    var timer ;
    useEffect(()=>{
        timer = setInterval(()=>{
            setd(d+1);
            if(d==arr.length-1){
                setd(0);
            }
        },3000);
        return ()=> clearInterval(timer);
    })

  return (
    <div>
<div className="mn-1">
    <img  src={arr[d]} alt="" />
</div>
    </div>
  );
};
