import axios from 'axios';
import { type } from 'os';
import React, {ChangeEvent, FormEvent, useState} from 'react'
import { IUser } from './IUser';

type inputChange = ChangeEvent<HTMLInputElement>;

const UserForm = () => {

    const initialState = {
        Nombre: "",
        Empresa: ""
    };

    const [user, setUser] = useState<IUser>(initialState);
    const [loading, setLoading] =useState(false);
   

    const handletInputChange = (e: inputChange) => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
        
    }

    const HandletSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/Identity/register", user).catch((error)=>{
            
            setLoading(false);
        });
        
        
        setLoading(false);
    }


    return (
        <>
            <div className="row">
                <div className="col-lg-4 offset-md-4">
                <form onSubmit={HandletSubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h3>Crear Usuario</h3>
                          
                               
                           
                                

                            
                        </div>
                        <div className="card-body">
                           
                            <div className="form-group mb-2">
                                <label>Nombre</label>
                                <input type="text" name="Nombre" className="form-control" onChange={handletInputChange} required/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Empresa</label>
                                <input type="text" name="Empresa" className="form-control" onChange={handletInputChange}/>
                            </div>

                       
                         

                        </div>
                        <div className="card-body">
                            {
                                loading == true? 

                                <button className="btn btn-success" disabled>Guardando...</button>
                                :
                                <button className="btn btn-success">Guardar</button>

                            }
                            
                        </div>
                    </div>
                    </form>
                </div>
            </div>


        </>
    )

}

export default UserForm;