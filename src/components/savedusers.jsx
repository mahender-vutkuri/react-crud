import React, { useEffect, useState } from 'react';


function SavedUsersComponent() {

    const [users, setUsers] = useState([]);
    const [isEditing,setIsEditing] = useState(false)
    const [editingUser, setEditingUser] = useState({ name: '', email: '', id: '' })
    useEffect(() => {
        let oldUsers = JSON.parse(localStorage.getItem('users'));
        setUsers(oldUsers)
    }, [])

    const deleteUser = (index) => {
        let tempUsers = users;
        tempUsers.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(tempUsers))
        setUsers([...tempUsers])
    }

    const editUser = (user, index) => {
        setIsEditing(true)
        setEditingUser(user)
    }
    const updateUser = () => {
        let tempusers = users;
        let userIndex = tempusers.findIndex(user => user.id == editingUser.id);
        tempusers[userIndex] = editingUser;
        localStorage.setItem('users',JSON.stringify(tempusers))
        setUsers([...tempusers])
        
        setIsEditing(false)
    }
    const UsersListComponent = () => {
        return (
            <ul>
                {users.map((user, index) => <li key={index}>Name: {user.name} and Email: {user.email} <span> <i onClick={() => editUser(user, index)} className="fa fa-edit"></i> </span>  <span onClick={() => deleteUser(index)}> <i className="fa fa-trash"></i> </span> </li>)}
            </ul>
        )
    }

    return (
        <div>
            <div>
                {users && users.length > 0 ? <UsersListComponent /> : <p> no users found. please <a href="register">register</a>here </p>}
            </div>
            {isEditing && <div>
                EDIT user <br />

                <div>
                    update name: <input type="text" value={editingUser.name} onChange={(e) => setEditingUser({
                    name: e.target.value,
                    email: editingUser.email,
                    id: editingUser.id
                })} /> <br />

                update email: <input type="text" value={editingUser.email} onChange={(e) => setEditingUser({
                    name: editingUser.name,
                    email: e.target.value,
                    id: editingUser.id
                })} /> <br />


                    <button onClick={updateUser} >Update</button>
                </div>
            </div> }
        </div>
    )
}

export default SavedUsersComponent;