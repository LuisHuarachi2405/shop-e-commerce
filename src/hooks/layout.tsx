import React, { Fragment } from "react"
import Header from "../components/header/header";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  )
}

export default Layout