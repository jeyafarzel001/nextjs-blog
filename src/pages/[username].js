import { useRouter } from "next/router";

const userProfile = () => {
    const router = useRouter();
    return <>
        <div style={{ textAlign: 'right', cursor: 'pointer', margin: '20px' }} onClick={() => router.push('/')}>
            Home
        </div>
        <h1>
            Welcome ....
        </h1>
    </>
}

export default userProfile;