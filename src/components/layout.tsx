import Footer from "./footer"
import Nav from "./nav"
import Head from "next/head"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Pizzería Don Remolo</title>
      </Head>
      <Nav/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout