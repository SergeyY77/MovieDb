import Header from "../../components/header";
import React, { useState } from "react";
import SidebarMenu from "../../components/slidebarMobile";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import { MainContainer, Main } from "./styled";

const BaseLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MainContainer>
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <SidebarMenu open={sidebarOpen} />
      <Main>
        <Outlet />
      </Main>

      <Footer />
    </MainContainer>
  );
};

export default BaseLayout;
