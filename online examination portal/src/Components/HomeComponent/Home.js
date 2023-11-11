import React from 'react';
import style from './Home.module.css';
import pic1 from '../../images/1.png';
import pic2 from '../../images/4.png';
import pic3 from '../../images/3.png';
import pic5 from '../../images/5.jpg'; // Assuming you have an image named '5.jpg' in your images folder
import { NavLink } from 'react-router-dom';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${pic5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Adjust the height according to your design
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // You might want to adjust the text color based on your background
  };

  return (
    <>
      <div id={style.header}>
        <div id={style.headerHeadingBox}>
          <h3>Online Examination Portal</h3>
        </div>
      </div>

      <div style={backgroundStyle}>
        <div id={style.div1}>

          <span>Login As</span>
        </div>

        <div id={style.div2}>
          <div className={style.div3}>
            <NavLink exact to="/StudentLogin">
              <img src={pic2} alt="" />
              <span>Student</span>
            </NavLink>
          </div>

          <div className={style.div3}>
            <NavLink to="/AdminLogin">
              <img src={pic3} alt="" />
              <span>Admin</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
