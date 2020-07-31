import React from "react"
import "normalize.css"
import "../styles/styles.scss"
import { Container } from "react-bootstrap";
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <Container fluid className="layout-wrapper">
      <Header />
      <div className="body-wrapper">
        {children}
      </div>
      <Footer />
    </Container>
  )
}