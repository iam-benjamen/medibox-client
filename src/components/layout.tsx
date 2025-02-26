import { Box } from "@chakra-ui/react";
import NavBar from "./Dashboard/NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <NavBar /> */}
      <Box fontFamily={"poppins"}>{children}</Box>
    </>
  );
};

export default Layout;
