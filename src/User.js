import react from 'react';

const User=(props)=>{
    const {data} = props

    console.warn(props.data.name)
    return<>
     <h1>User Components</h1>
        <h3>{data.name},{data.age}</h3>
        <h3></h3>
    </>
}

export default User;