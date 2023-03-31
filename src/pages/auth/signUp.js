import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Box, Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AuthContext } from "@/context/auth-context";
import { v4 } from "uuid";




const SignUp = () => {
    const router = useRouter();
    const authContext = useContext(AuthContext);
    const USER_DETAILS = 'userDetails';

    const [userName, setUserName] = useState('');
    const [userPassword, setUserpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const hadleSignUp = () => {
        const token = v4();
        const userDetails = JSON.parse(localStorage.getItem(USER_DETAILS));

        if (!userName || !userPassword) {
            alert("You should fill the both username and password");
            return;
        }
        else if (userDetails) {
            const isMatch = Object.keys(userDetails).find((v) => v === userName)
            if (isMatch) {
                alert("The user is already exist...")
                setUserName('')
                setUserpassword('')
                return;
            }
            else if (userName && userPassword) {
                localStorage.setItem('userDetails', JSON.stringify({ ...userDetails, [userName]: { userName, userPassword, token } }));
                authContext.setAuthState((prev) => ({ ...prev, token: token }));
                router.push('/auth/signIn');
            }
        } else {
            localStorage.setItem(USER_DETAILS, JSON.stringify({ [userName]: { userName, userPassword, token } }))
            authContext.setAuthState((prev) => ({ ...prev, token: token, userName: userName }));
            router.push('/auth/signIn');
        }

    }


    return <>
        <Box className="sign-up">
            <div>
                <h2> Sign - 🤘p</h2>
            </div>
            <div>
                <FormControl variant="standard">
                    <InputLabel > 😎 User Name</InputLabel>
                    <Input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
                </FormControl>

            </div>
            <div>
                <FormControl variant="standard">
                    <InputLabel > 🤐 Password</InputLabel>
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
