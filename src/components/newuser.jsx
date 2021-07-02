import React, { useState } from 'react';

function CreateUserComponent() {

    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    const registerUser =()=>{
        console.log(user);
        let oldUsers = JSON.parse(localStorage.getItem('users'))
        if(!oldUsers){
            oldUsers = [];
            user.id = 1;
            oldUsers.push(user)
            localStorage.setItem('users',JSON.stringify(oldUsers))
        } else{
            user.id = oldUsers.length+1;
            oldUsers.push(user) 
            localStorage.setItem('users',JSON.stringify(oldUsers))
        }
        alert('user created successfully')
        setUser({name:'',email:''})
    }

    return (
        <div>
            enter name: <input type="text" value={user.name} onChange={(e) => setUser({
            name: e.target.value,
            email: user.email
        })} /> <br />

        enter email: <input type="text" value={user.email} onChange={(e) => setUser({
            name: user.name,
            email: e.target.value
        })} /> <br />


        <button onClick={registerUser} >Register</button>
        </div>
    )
}

export default CreateUserComponent;