import Footer from "@/components/layouts/Landing/Footer";
import Header from "@/components/layouts/Landing/Header/Header";
import ClientWidgetWrapper from "@/components/layouts/NovaBot/NovaWidget/ClientWidgetWrapper";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <ClientWidgetWrapper />
      <Footer />
    </>
  );
};

export default MainLayout;
