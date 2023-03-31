import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const SignIn = () => {
    const router = useRouter();
    const USER_DETAILS = 'userDetails';

    const [userName, setUserName] = useState('');
    const [userPassword, setUserpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const hadleSignIn = () => {
        const userDetails = JSON.parse(localStorage.getItem(USER_DETAILS));
        if (!userName || !userPassword) {
            alert("You should fill the both username and password");
            return;
        }
        if (userDetails) {
            console.log("iffffeee", userName, userPassword, userDetails)
            if (userName && userPassword) {
                const matchUser = userDetails[userName];
                if (!matchUser) {
                    alert("The userName does not exist....");
                    setUserName('');
                    setUserpassword('');
                }
                else if (matchUser?.userName === userName && matchUser?.userPassword === userPassword) {
                    alert("Your Are successfully loged In...");
                    router.push(`/${userName}/`);
                } else {
                    alert("Your password is incorrect");
                    setUserName('');
                    setUserpassword('');
                }
            }
        } else {
            alert("Please sign-up then sign-in");
            setUserName('');
            setUserpassword('');
        }

    }

    return <>
        <Box style={{ textAlign: 'center', border: 'solid', padding: '10px', margin: 'auto', width: 'fit-content' }}>
            <div>
                <h2>Sign-In</h2>
            </div>
            <div>
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">User Name</InputLabel>
                    <Input type={'text'} value={userName} onChange={(e) => setUserName(e.target.value)} />
                </FormControl>

            </div>
            <div>
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={userPassword}
                        onChange={(e) => setUserpassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="success" onClick={hadleSignIn}>Sign-In</Button>
            </div>
            <div style={{ textAlign: 'rignt', cursor: 'pointer', margin: '10px' }} onClick={() => router.push('/')}>
                I Don't have account....?
            </div>
        </Box>
    </>
}

export default SignIn
