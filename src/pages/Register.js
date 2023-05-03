import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { Icon } from '@iconify-icon/react'
import { InputGroup } from 'react-bootstrap'

const Register = () => {

    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);

    const [inpval, setInpval] = useState({
        nama: "",
        gender: "",
        tglLahir: "",
        tempatlahir: "",
        agama: "",
        alamat: "",
        noHP: "",
        email: "",
        password: "",
        konfirmpassword: ""
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

        const { nama, gender, tglLahir, tempatlahir, agama, alamat, noHp, email, password, konfirmpassword } = inpval;

        if (nama === "") {
            alert("Nama harus terisi")
        } else if (gender === "") {
            alert("Gender harus terisi")
        } else if (tglLahir === "") {
            alert("Tanggal lahir harus terisi")
        } else if (tempatlahir === "") {
            alert("Tempat lahir harus terisi")
        } else if (agama === "") {
            alert("Agama harus terisi")
        } else if (alamat === "") {
            alert("Alamat harus terisi")
        } else if (noHp === "") {
            alert("Nomor Handphone harus terisi")
        } else if (email === "") {
            alert("Email harus terisi")
        } else if (!email.includes("@")) {
            alert("Mohon isi alamat email yang valid!")
        } else if (password === "") {
            alert("Password harus terisi")
        } else if (password.length < 8) {
            alert("Karakter password kurang dari 8")
        } else if (konfirmpassword !== password) {
            alert("Konfirmasi Password tidak sama dengan Password")
        } else {
            console.log("Data berhasil ditambah")
        }
    }


    return (
        <>
            <div classname="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div classname="left_data mt-6" style={{ width: "100%", fontFamily: "Montserrat", marginLeft: "20px", marginTop: "50px" }}>
                        <div classname="sign_img mt-3">
                            <img src='./logo192.png' style={{ maxWidth: 50 }} />
                        </div>
                        <b>
                            <h3 classname="text-center" col-lg-6 style={{color: "#313E4E" }}>Daftar akun</h3>
                            <h3 style={{color: "#313E4E" }}>Beinkost</h3>
                        </b>
                        <Form style={{ marginTop: "20px" }}>
                            <div className='row'>
                                <Form.Group className="mb-3 col-md-6" controlId="formBasicNama">
                                    <Form.Control type="nama" placeholder="Nama" name='nama' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-6" controlId="noHp">
                                    <Form.Control type="noHp" placeholder="No Handphone" name='noHP' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>
                            </div>

                            <div className='row'>
                                <Form.Group className="mb-3 col-md-6" controlId="formBasicGender">
                                    <select className="mb-1 col-md-12" type="gender" placeholder="Gender" name='gender' style={{ border: "none", padding: "8px", borderBottom: "2px solid #313E4E", fontFamily: "Montserrat" }}>
                                        <option value="lk">Laki-laki</option>
                                        <option value="pr">Perempuan</option>
                                    </select>
                                </Form.Group>

                                <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" name='email' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>


                            </div>

                            <div className='row'>
                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicTglLahir">
                                    <Form.Control type="date" placeholder="Tanggal Lahir" name='tglLahir' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>

                                <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                                    <InputGroup>
                                    <Form.Control type="password" placeholder="Password" name='password' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                    <Icon icon="bxs:hide" color="#c4c4c4" />
                                    </InputGroup>
                                </Form.Group>
                            </div>

                            <div className='row'>
                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicTempatLahir">
                                    <Form.Control type="tempatLahir" placeholder="Tempat Lahir" name='tempatlahir' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicKonfirmasiPassword">
                                    <Form.Control type="konfirmasiPassword" placeholder="Konfirmasi Password" name='konfirmpassword' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>
                            </div>

                            <div className='row'>
                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicAgama">
                                    {/* <Form.Control type="agama" placeholder="Agama" name='agama' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #D1D1D4" }} /> */}
                                    <select className="col-md-12" type="agama" placeholder="Agama" style={{ border: "none", padding: "8px", borderBottom: "2px solid #313E4E" }}>
                                        <option value="islam">Islam</option>
                                        <option value="kristen">Kristen</option>
                                        <option value="katolik">Katolik</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="budha">Budha</option>
                                        <option value="konghucu">Konghucu</option>
                                    </select>
                                </Form.Group>
                                <Button variant="primary" className='mb-3 col-lg-6' onClick={addData} type="submit" style={{ backgroundColor: "#313E4E" }}>
                                    Daftar
                                </Button>
                            </div>

                            <div className='row'>
                                <Form.Group className="mb-3 col-lg-6" controlId="formBasicAlamat">
                                    <Form.Control type="alamat" placeholder="Alamat" name='alamat' onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>
                                <p className="mb-3 col-lg-6" controlId="formBasicBtnMasuk"> Sudah punya akun? <NavLink to="/login"><b>Masuk</b></NavLink></p>
                            </div>
                            <div className='row'>
                                <Form.Group className="mb-3 col-md-3" controlId="formBasicProvinsi">
                                    <select className="mb-3 col-md-12" type="provinsi" placeholder="Provinsi" style={{ border: "none", padding: "8px", borderBottom: "2px solid #313E4E" }}>
                                        <option value="aceh">Aceh</option>
                                        <option value="sumut">Sumatera Utara</option>
                                        <option value="sumsel">Sumatera Selatan</option>
                                        <option value="sumbar">Sumatera Barat</option>
                                        <option value="bengkulu">Bengkulu</option>
                                        <option value="riau">Riau</option>
                                        <option value="kepRiau">Kepulauan Riau</option>
                                        <option value="jambi">Jambi</option>
                                        <option value="lampung">Lampung</option>
                                        <option value="bangkaBelitung">Bangka Belitung</option>
                                        <option value="kalBar">Kalimantan Barat</option>
                                        <option value="kalTim">Kalimantan Timur</option>
                                        <option value="kalSel">Kalimantan Selatan</option>
                                        <option value="kalTeng">Kalimantan Tengah</option>
                                        <option value="kalut">Kalimantan Utara</option>
                                        <option value="banten">Banten</option>
                                        <option value="jakarta">Jakarta</option>
                                        <option value="jabar">Jawa Barat</option>
                                        <option value="jateng">Jawa Tengah</option>
                                        <option value="yogyakarta">Yogyakarta</option>
                                        <option value="jatim">Jawa Timur</option>
                                        <option value="bali">Bali</option>
                                        <option value="ntt">Nusa Tenggara Timur</option>
                                        <option value="ntb">Nusa Tenggara Barat</option>
                                        <option value="gorontolo">Gorontalo</option>
                                        <option value="sulbar">Sulawesi Barat</option>
                                        <option value="sulTengah">Sulawesi Tengah</option>
                                        <option value="sulut">Sulawesi Utara</option>
                                        <option value="sulTenggara">Sulawesi Tenggara</option>
                                        <option value="sulsel">Sulawesi Selatan</option>
                                        <option value="malut">Maluku Utara</option>
                                        <option value="maluku">Maluku</option>
                                        <option value="papuaBarat">Papua Barat</option>
                                        <option value="papua">Papua</option>
                                        <option value="papuaTengah">Papua Tengah</option>
                                        <option value="papuaPegunungan">Papua Pegunungan</option>
                                        <option value="papuaSelatan">Papua Selatan</option>
                                        <option value="papuaBaratDaya">Papua Barat Daya</option>
                                    </select>
                                </Form.Group>

                                <Form.Group className="mb-3 col-md-3" controlId="formBasicKota">
                                    <Form.Control type="kotaKab" placeholder="Kota/Kab" onChange={getdata} style={{ border: "none", borderBottom: "2px solid #313E4E" }} />
                                </Form.Group>
                            </div>

                        </Form>

                    </div>
                    <div classname="right_data mt-3" style={{ width: "100%" }}>
                        <div classname="sign_img mt-3">
                        <img src='./asset/regisboarding.png' style={{maxWidth: 380, marginTop: "20px", marginLeft:"200px" }} alt='' />
                </div>
            </div>
                </section>
            </div>
        </>
    )
}

export default Register