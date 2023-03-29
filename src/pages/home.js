import { useState } from 'react'
import { connect } from "react-redux"
import axios from 'axios'

import { setInfo } from '../pages/redux/actions/main'
import Head from 'next/head'


const Home = (props) => {
    const { name, setInfo } = props
    const [newName, setNewName] = useState("")
    return (
        <>
            <Head>
                JP APP
            </Head>
            <div>
                <center><h1>WELOCME TO THE HOME PAGE </h1>
                    {name}<br /> <br />
                    <div>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder='Enter your Name'
                        >
                        </input>
                    </div>
                    <br />
                    <div>
                        <button onClick={async () => {
                            const update = await axios.put('https://jsonplaceholder.typicode.com/todos/1', { name: newName })
                            setInfo(update?.data?.name)
                        }}
                        >
                            Submit
                        </button>
                    </div>
                </center >
            </div >
        </>

    )
}

const mapStateToProps = state => {
    return { name: state.main.name }
}

const mapDispatchToProps = {
    setInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)