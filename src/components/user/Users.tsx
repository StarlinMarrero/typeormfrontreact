import axios from 'axios';
import React, { useState, useEffect } from 'react'
import UserItem from './UserItem';
import {IUser} from './IUser'


export const Users = () => {


const [users, setUsers] = useState<IUser[]>([]);

const cargarUsers = async () =>{
    var res = await axios.get("http://localhost:4000/Identity/users");
    setUsers(res.data.result);

}



    useEffect(() => {
        cargarUsers();
        

    }, [])



return ( 
       
    <>
    <button className="btn btn-success mb-3">Crear Usuario</button>
   
    <div className="row row-cols-1 row-cols-md-4 g-4">
        
        {users.map((item) => {
           return <UserItem user={item} key={item.Id}/>
        })}
    </div>
    </>
)


}

export default Users