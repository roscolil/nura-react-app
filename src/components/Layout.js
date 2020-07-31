import React from "react"
import "normalize.css"
import "../styles/styles.scss"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="body-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  )
}