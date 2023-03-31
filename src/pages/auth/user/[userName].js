import { useEffect } from "react";
import { useRouter } from "next/router";


const userProfile = () => {

    const router = useRouter();
    const userName = router.query.userName;

    useEffect(() => {
        if (userName) {
            const token = JSON.parse(localStorage.getItem([userName]))?.token;
            if (!token) {
                router.push('/auth/signIn');
                alert('Your session time out please login ...');
            }
        }
    }, [userName])

    const handleLogout = () => {
        localStorage.removeItem(userName)
        router.push('/auth/signIn');
    }

    return <>
        <div style={{ textAlign: 'right', cursor: 'pointer', margin: '20px' }} onClick={handleLogout} >
            Logout
        </div>
        <h1>
            Welcome ....
        </h1>
    </>
}


export default userProfile