import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick2 = () => {
    // You can replace "/new-route" with the desired route/path
    navigate("/userlogin");
  };

  const handleButtonClick1 = () => {
    // You can replace "/new-route" with the desired route/path
    navigate("/orglogin");
  };

  return (
    <div >
      {/* Navigation Bar */}
      <nav className="homepagenavbar">
        <img style={{ width: "200px" }} src="./images/logo.jpg" alt="A hoe" />

        <ul style={{ listStyleType: "none" }}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
        </ul>
      </nav>

      <div className="orghomecontainer">
                
                <div className="profile" >
                    <table className="styled-table">
                        <tr>
                            <td><b>Balu Manobiram</b></td>
                            <td>:</td>
                            <td>21BCE2557</td>
                        </tr>
                        <tr>
                            <td><b>Pakki Karthikeya Ruthvik
</b></td>
                            <td>:</td>
                            <td>21BKT0175</td>
                        </tr>
                        <tr>
                            <td><b>Puvvada Vijay Abhiram
</b></td>
                            <td>:</td>
                            <td>21BCI0363</td>
                        </tr>
                        <tr>
                            <td><b>Reddi Gowtham
</b></td>
                            <td>:</td>
                            <td>21BCE2783</td>
                        </tr>
                        <tr>
                            <td><b>Komatireddy Anikait Reddy
</b></td>
                            <td>:</td>
                            <td>21BCE2784 </td>
                        </tr>
                    </table>
                        
                </div>
                </div>
      
    
   </div>
  );
}

export default Home;
