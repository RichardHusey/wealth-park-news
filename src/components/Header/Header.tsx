import * as React from "react";
import { StyledHeader } from "./HeaderStyle";
import Mark from "../Mark/Mark";
import Pagination from "../Pagination/Pagination";

type Props = {
  children: React.ReactNode
}

const Header: React.FC<Props> = ({children}) =>{
  return(
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}

export default Header;