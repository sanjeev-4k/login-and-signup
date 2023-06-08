import { Avatar, Box, Button, Container, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import LockOpen from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("");

    const [pass, setPass] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate()




    const handleLogin = async () => {

        try {

            const response = await axios.post("http://localhost:8080/user/log", {

                email,

                pass,

            });

            if (response.status === 200) {

                console.log("Login successful");

                localStorage.setItem("email", email);

                navigate('/userpage');





            } else {

                setErrorMessage(response.data.message);

                alert("invalid user");

            }

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <div className='back'>

            <Container component="main" maxWidth="xs">

                <Box sx={{




                    display: 'flex',

                    flexDirection: 'column',

                    alignItems: 'center',

                }}>

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                        <LockOpen />

                    </Avatar>

                    <Typography component="h1" variant="h5" style={{ color: 'white' }}>

                        Log in

                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 3 }}>

                        <Grid container spacing={2}>

                            <Grid item xs={12}>

                                <TextField

                                    required

                                    fullWidth

                                    id="email"

                                    label="Email Address"

                                    name="email"

                                    autoComplete="email"

                                    color='secondary'

                                    value={email}

                                    onChange={(e) => setEmail(e.target.value)}

                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField

                                    required

                                    fullWidth

                                    name="pass"

                                    label="Password"

                                    type="password"

                                    id="pass"

                                    autoComplete="new-password"

                                    color='secondary'

                                    value={pass}

                                    onChange={(e) => setPass(e.target.value)}

                                />

                                {errorMessage && (

                                    <Typography variant="body1" color="error">

                                        {errorMessage}

                                    </Typography>

                                )}

                            </Grid>

                        </Grid>

                        <Button

                            type="submit"

                            fullWidth

                            variant="contained"

                            sx={{ mt: 3, mb: 2 }}

                            color='secondary'

                            onClick={handleLogin}

                        >

                            Log in

                        </Button>

                        <Grid container justifyContent="flex-end">

                            <Grid item>

                                <Link to="/Signup">

                                    <Typography variant="body2" color='secondary'>

                                        Doesn't have an account! Signup

                                    </Typography>

                                </Link>

                            </Grid>

                        </Grid>

                    </Box>
 
                </Box>

            </Container>

        </div>

    )

};

export default Login;