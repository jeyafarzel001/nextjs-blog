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




const SignUp = () => {
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const hadleSignUp = () => {
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        // console.log("eee", userName, userPassword, userDetails)
        if (userDetails) {
            const isMatch = Object.keys(userDetails).find((v) => v === userName)
            if (isMatch) {
                alert("The user is already exist...")
                setUserName('')
                setUserpassword('')
                return;
            }
            else if (!userName || !userPassword) {
                alert("Please fill the username and password");
                return;
            }
            else if (userName && userPassword) {
                localStorage.setItem('userDetails', JSON.stringify({ ...userDetails, [userName]: { userName, userPassword } }))
                router.push('/auth/signIn')
                // console.log("user------", userDetails, isMatch);
            }
        }

    }



    return <>
        <Box style={{ textAlign: 'center', border: 'solid', padding: '10px', margin: 'auto', width: 'fit-content' }}>
            <div>
                <h2>Sign-Up</h2>
            </div>
            <div>
                <FormControl variant="standard">
                    <InputLabel >User Name</InputLabel>
                    <Input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
                </FormControl>

            </div>
            <div>
                <FormControl variant="standard">
                    <InputLabel >Password</InputLabel>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        value={userPassword}
                        onChange={(e) => setUserpassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword} >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="success" onClick={hadleSignUp}>Sign- Up</Button>
            </div>
            <div style={{ cursor: 'pointer', margin: '10px' }} onClick={() => router.push('/auth/signIn')}>
                Already have account....?
            </div>
        </Box>
    </>
}

export default SignUp
