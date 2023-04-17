import React from "react";
import "./home.css";
function Home() {
  const title_1 = "Welcome to DataQuest:";
  const description_1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Tincidunt dui ut ornare lectus. Sollicitudin ac orci phasellus egestas. Convallis aenean et tortor at risus viverra adipiscing. Feugiat vivamus at augue eget arcu dictum. Pulvinar elementum integer enim neque. Semper eget duis at tellus at urna. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Senectus et netus et malesuada fames ac.  ";
  const title_2 = "How to Use DataQuest:";
  const description_2 =
    "Id porta nibh venenatis cras. Orci porta non pulvinar neque laoreet. Congue quisque egestas diam in arcu cursus euismod quis. Volutpat ac tincidunt vitae semper. Euismod nisi porta lorem mollis. Pulvinar elementum integer enim neque. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Enim lobortis scelerisque fermentum dui faucibus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.";
  return (
    <div className="home-container">
      <div className="home-title">
        <h4>DataQuest</h4>
        <p className="under-line"></p>
      </div>
      <div className="home-content">
        <div className="home-container-left">
        <div className="home-content-title content-sepatator">{title_1}</div>
        <div className="home-content-description content-sepatator">
          {description_1}
        </div>
        <div className="home-content-title content-sepatator">{title_2}</div>
        <div className="home-content-description content-sepatator">
          {description_2}
        </div>
        </div>
        <div className="home-container-right">
        </div>
        
      </div>
    </div>
  );
}

export default Home;
