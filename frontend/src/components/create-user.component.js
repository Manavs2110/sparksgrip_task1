import React, { useState } from 'react'
import axios from 'axios'
import UserForm from './UserForm'
import userList from './user-list.component'


const createUser = ()=>{
    const [formValues, setFormValues] = useState({name:'', email:'',amount:''})

    const onSubmit = userObject => {
        axios.post('/users/create-user', userObject).then(res => {
            if(res.status === 200){
                alert('User added Successfully')
                window.location = "/"
            } 
            else Promise.reject();
            
        }).catch(err => alert(err));
    }

    return (
        <UserForm initialValues = {formValues} onSubmit = {onSubmit} enableReinitialize> Create User</UserForm>

    )
}

export default createUser;
