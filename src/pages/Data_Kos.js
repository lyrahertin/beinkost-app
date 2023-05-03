import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'

class Data_Kos extends Component {
    render() {
        return (
            <div>
                <nav class="navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" style={{
                            marginTop: "50px",
                            fontFamily: "Montserrat",
                            letterSpacing: "0.27em"
                        }}><h2><b>Data Kos</b></h2></a>
                        <form class="d-flex">
                            <a href='#profile' style={{size: '44px'}} ><AccountCircleIcon value={{ color: '#27849A', size: '44px' }} /></a>
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </nav>

                <nav class="search">
                    <form class="container-fluid">
                        <div class="input-group w-50 top-0 start-50 translate-middle" >
                            <input class="form-control me-2" type="search" placeholder="Pencarian" aria-label="Search" style={{ borderRadius: '10px'}}></input>
                            <button class="btn btn-outline-success " type="submit" style={{ color: '#27849A' }}><SearchIcon /></button>
                        </div>
                    </form>
                </nav>
            </div>
        )
    }
}



export default Data_Kos