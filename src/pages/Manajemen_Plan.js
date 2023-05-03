import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

class Manajemen_Plan extends Component {
    render() {
        return (
            <div>
                <div className='header'
                style={{
                    marginTop:"50px",
                    fontFamily:"Montserrat",
                    letterSpacing: "0.27em"
                }}>
                    <h2><b>Manajemen Plan</b></h2>
                </div>

                <div className='table d-flex' class="text-center">
                    <Table>
                        <thead style={{background:"#D9D9D9", r}}>
                            <tr>
                                <th>Nama</th>
                                <th>Kamar|Lantai</th>
                                <th>Kelas</th>
                                <th>Harga</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr>
                                <td>Stewie Griffin</td>
                                <td>1 | 3</td>
                                <td>3</td>
                                <td>Rp. 700.000</td>
                                <td>+</td>
                           </tr>
                           <tr>
                                <td>Stewie Griffin</td>
                                <td>1 | 3</td>
                                <td>3</td>
                                <td>Rp. 700.000</td>
                                <td>+</td>
                           </tr>
                           <tr>
                                <td>Stewie Griffin</td>
                                <td>1 | 3</td>
                                <td>3</td>
                                <td>Rp. 700.000</td>
                                <td>+</td>
                           </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
          )
    }
}

export default Manajemen_Plan