import React, { Children, Component } from "react"
import Styles from "./Styles/sidebar.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import { SidebarData } from "./SidebarData"

const Sidebar = ({ children }) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column" style={{ backgroundColor: "#313E4E" }}>
                    <div>
                        <a className="text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2">
                            <i className="bi bi-speedometer"></i>
                            <span className="ms-1 fs-4">Brand</span>
                        </a>
                        <hr className="text-secondary" />
                        <ul class="nav nav-pills flex-column">
                            {SidebarData.map((val, key) => {
                                return (
                                    <li key={key} class="nav-item text-white fs-5 my-1" onClick={() => {
                                        window.location.pathname = val.link;
                                    }}
                                    >
                                        <a class="nav-link text-white fs-6" aria-current="page">
                                            <i>{val.icon}</i>
                                            <span className="ms-auto">{val.title}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column col">
                    <main>{children}</main>
                </div>
            </div>
        </div>
    )
}

export default Sidebar