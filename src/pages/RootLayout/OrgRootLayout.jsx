import React from "react";
import "../../pages/home/HomeBanner/home.css";

import OrgNavBar from "../OrgPages/OrgNavBar";
import OrgHomePage from "../OrgPages/OrgHomePage";

function OrgRootLayout() {
  return (
    <div>
      <OrgNavBar />
      <OrgHomePage />
    </div>
  );
}

export default OrgRootLayout;
