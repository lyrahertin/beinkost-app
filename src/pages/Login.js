import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FormControl, FormGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Sign_img from './Sign_img'



const Login = () => {

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    console.log(inpval);

    const getdata = (e) => {
        //console.log(e.target.value);
        const { value, name } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            alert("Email harus terisi")
        } else if (!email.includes("@")) {
            alert("Mohon isi alamat email yang valid!")
        } else if (password === "") {
            alert("Password harus terisi")
        } else {
            console.log("Data berhasil ditambah")
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{ width: '100%', fontFamily: "Montserrat", marginLeft: "20px", marginTop: "50px" }} >
                        <h3 className='col-lg-6'>Masuk</h3>
                        <p>Selamat Datang di Beinkost!</p>
                        <Form>
                            <Form.Group className="mb-3 col-md-8" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" name='email' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                            </Form.Group>

                            <FormGroup className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <FormControl type="password" name='password' onChange={getdata} placeholder="Password" style={{ border: "none", borderBottom: "2px solid #313E4E" }}  />
                            </FormGroup>
                            <p>Lupa Password?</p>

                            <Button variant="primary" className='col-lg-8' onClick={addData} type="submit" style={{ backgroundColor: "#313E4E" }}>
                                Masuk
                            </Button>
                        </Form>
                        <p className='mt-3'>Belum punya akun? <NavLink to="/" ><b>Daftar</b></NavLink></p>

                    </div>
                    <Sign_img />
                </section>

            </div> 
        </>
    )
} 

export default Login