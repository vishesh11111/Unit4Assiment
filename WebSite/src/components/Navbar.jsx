import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
const navigate = useNavigate();
const [f, setf] = useState(false);

  return ( f ? (  <div className="m-9">
    <input type="text" name="" id="" placeholder="Serach Products from Here......"/>
    <button className="in-1" onClick={()=>{
      setf(!f);
    }}>search</button>
  </div>) :
  // diffresnt here ////////
    <div>
      <div className="main-1">
        <div className="img-1">
          <img onClick={()=>{
            navigate("/", {replace : true});
          }}
            src="//cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
            alt=""
          />
        </div>
        <div className="main-2">
          {/*  */}
          <div class="dropdown">
            <button class="dropbtn">Tanner Goods</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          {/*  */}
          <div class="dropdown">
            <button class="dropbtn">Mazama Wares</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          {/*  */}
          <div class="dropdown">
            <button class="dropbtn">Apparel</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          {/*  */}
          <div class="dropdown">
            <button class="dropbtn">Featured</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          {/*  */}
          <div class="dropdown">
            <button class="dropbtn">Final Sale</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          {/*  */}
        </div>
        <div className="main-3">
          <div
            onClick={() => {
              navigate("/login", { replace: true });
            }}
          >
            Login
          </div>
          <div onClick={()=>{
            setf(!f);
          }}>Search</div>
          <div   onClick={() => {
              navigate("/cart", { replace: true });
            }}>Cart</div>
        </div>
      </div>
    
    </div>
  );
};
