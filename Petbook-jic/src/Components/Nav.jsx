import React from "react";
import Stack from "react-bootstrap/Stack";
import "./Nav.css";

function Nav({ setPageIndicator }) {


  return (
    <div className="Sticky">
      <a href="#index.html">
        <h1 className="AppName">
          <img className="AppName2" src="/src/assets/img/icon.png" alt="Logo" />
          Pet<span className="petBook">Book</span>
        </h1>
      </a>
      <Stack gap={3}>
        <button className="NavButtons" onClick={() => setPageIndicator(0)}>
          <div className="p-1">
            <img className="ButtonIcon" src="/src/assets/pet.svg" alt="Home" />
            HOME
          </div>
        </button>
        <button className="NavButtons" onClick={() => setPageIndicator(1)}>
          <div className="p-1">
            <img className="ButtonIcon" src="/src/assets/SearchSvg.svg" alt="Search" />
            SEARCH
          </div>
        </button>
        <button className="NavButtons" onClick={() => setPageIndicator(2)}>
          <div className="p-1">
            <img className="ButtonIcon" src="/src/assets/NotificationSvg.svg" alt="Notifications" />
            NOTIFICATIONS
          </div>
        </button>
        <button className="NavButtons" onClick={() => setPageIndicator(3)}>
          <div className="p-1">
            <img className="ButtonIcon" src="/src/assets/CreateSvg.svg" alt="Create" />
            CREATE
          </div>
        </button>
        <button className="NavButtons" onClick={() => setPageIndicator(4)}>
          <div className="p-1">
            <img className="ButtonIconProfile" src="/src/assets/img/images.jpg" alt="Profile" />
            PROFILE
          </div>
        </button>


        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"   style={{
    background: 'linear-gradient(151deg, rgba(255,255,255,1) 15%, rgba(101,251,255,0.76) 100%)',color:'black',fontWeight:'Bold',fontFamily:'"Concert One", sans-serif',borderStyle:'solid',
  }}>
  LOGOUT
</button>
<div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content"  style={{
    background: 'linear-gradient(151deg, rgba(255,255,255,1) 15%, rgba(101,251,255,0.76) 100%)',color:'black',fontWeight:'Bold',fontFamily:'"Concert One", sans-serif',borderStyle:'solid',
  }}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Logout Petbook</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure you want to Logout?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCEL</button>
        <button type="button" className="btn btn-danger">LOGOUT</button>
      </div>
    </div>
  </div>
</div>


      </Stack>
    </div>
  );
}

export default Nav;
