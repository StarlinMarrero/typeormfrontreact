import React from 'react'
import {IUser} from './IUser'
interface Props{
    user: IUser
}


const UserItem = ({user}: Props) => {

    return ( 
        <div className="col">
    <div className="card card-select">

        <img src="https://www.operacionescat.com/Img/man.png" className="card-img-top text-center" alt="..." style={{width: '25%'}}/>
        <div className="card-body">
            <div className="d-flex justify-content-between">
            <h5 className="card-title">{user.Nombre}</h5>
            <p className="card-text">{user.Empresa}</p>
            </div>

         
        </div>
        <div className="card-footer">
        <small className="text-muted">Numero de Registro {user.Id}</small>
        </div>
      </div>
      </div>
    )


}

export default UserItem;