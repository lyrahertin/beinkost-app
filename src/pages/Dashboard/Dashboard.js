import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards, { CardsData } from './CardsData'

class Dashboard extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <h1>Dashboard</h1>
                    {/* <div className="Cards">
                    {CardsData[0].map((val, key) => {
                                return (
                                    <div className='parentContainer' key={key}>

                                    </div>
                                );
                            })}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard