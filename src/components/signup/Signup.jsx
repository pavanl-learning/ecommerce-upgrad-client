import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import NavigationBar from "../navigationBar/NavigationBar";

import "./Signup.css";

function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [contactNumberError, setContactNumberError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
        setPasswordError(false);
        setContactNumberError(false);

        if (firstName === "") {
            setFirstNameError(true);
        }

        if (lastName === "") {
            setLastNameError(true);
        }

        if (email === "") {
            setEmailError(true);
        }

        if (password === "") {
            setPasswordError(true);
        }

        if (contactNumber === "") {
            setContactNumberError(true);
        }

        if (firstName && lastName && email && password && contactNumber) {
            axios.post("http://localhost:8080/api/auth/signup", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                contactNumber: contactNumber,
            })
                .then(function (response) {
                    alert(response.data.message);
                    navigate("/login");
                })
                .catch(function (error) {
                    alert("Error: There was an issue in registering the user, please try again later.");
                });
        }
    };

    return (
        <>
            <NavigationBar />
            <div className="signupContainer">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Avatar className="avatarStyle">
                        <LockIcon />
                    </Avatar>
                    <Typography gutterBottom variant="h5" component="p">
                        Sign up
                    </Typography>
                    <TextField label="First Name" variant="outlined" type="text" required fullWidth
                        onChange={(e) => setFirstName(e.target.value)} sx={{ mb: 3 }}
                        value={firstName} error={firstNameError} />
                    <TextField label="Last Name" variant="outlined" type="text" required fullWidth
                        onChange={(e) => setLastName(e.target.value)} sx={{ mb: 3 }}
                        value={lastName} error={lastNameError} />
                    <TextField label="Email Address" variant="outlined" type="email" required fullWidth
                        onChange={(e) => setEmail(e.target.value)} sx={{ mb: 3 }}
                        value={email} error={emailError} />
                    <TextField label="Password" variant="outlined" type="password" required fullWidth
                        onChange={(e) => setPassword(e.target.value)} sx={{ mb: 3 }}
                        value={password} error={passwordError} />
                    <TextField label="Confirm Password" variant="outlined" type="password" required fullWidth
                        onChange={(e) => setConfirmPassword(e.target.value)} sx={{ mb: 3 }}
                        value={confirmPassword} error={password.length > 0 && confirmPassword !== password} />
                    <TextField label="Contact Number" variant="outlined" type="tel" required fullWidth
                        onChange={(e) => setContactNumber(e.target.value)} sx={{ mb: 3 }}
                        value={contactNumber} error={contactNumberError} />
                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, width: "100%" }}
                        disabled={password.length > 0 && confirmPassword !== password} >
                        Sign Up
                    </Button>
                    <div className="loginLink">
                        <Link to="/login">Already have an account? Sign in</Link>
                    </div>
                </form>
            </div>
            <div className="signupFooter">
                Copyright &copy; <Link href="https://www.upgrad.com/">upGrad</Link> {new Date().getFullYear()}
            </div>
        </>
    );
}

export default Signup;