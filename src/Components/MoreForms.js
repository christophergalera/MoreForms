import React, {useState} from "react";

const UserForm = (props) => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email,password, confirmPassword};
        console.log("Welcome", newUser);
    };

    const inputDataDivSytle = {
        borderRadius: "5px", 
        backgroundColor: "#e6e6e6",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }
    

    return (
        <form onSubmit= {createUser}>
            <div style= {inputDataDivSytle} >
                <label>First Name: </label>
                <input type="text" onChange = { (e) => setFirstName(e.target.value)} value={firstName}/>
                { 
                    firstName.length > 0 ? 
                    firstName.length < 2 ?
                    <p className="error"> First Name must be at least 2 characters long</p>
                    : null
                    : null
                }
            </div>
            <div style= {inputDataDivSytle} >
                <label>Last Name: </label>
                <input type="text" onChange = { (e) => setLastName(e.target.value)} value = {lastName}/>
                { lastName.length > 0 ?
                    lastName.length < 2 ? 
                    <p className="error"> First Name must be at least 2 characters long</p>
                    : null
                    : null
                }
            </div>
            <div style= {inputDataDivSytle} >
                <label>Email: </label>
                <input type="text" onChange = { (e) => setEmail(e.target.value)} value = {email}/>
                { email.length > 0?
                    email.length < 5 ? 
                    <p className="error"> Email must be at least 2 characters long</p>
                    : null
                    : null
                }
            </div>
            <div style= {inputDataDivSytle} >
                <label>Password: </label>
                <input type="text" onChange = { (e) => setPassword(e.target.value)} value = {password}/>
                { password.length > 0 ?
                    password.length < 2 ? 
                    <p className="error"> Passwords must be at least 8 characters long</p>
                    : null
                    : null
                }
            </div>
            <div style= {inputDataDivSytle} >
                <label>Confirm Password: </label>
                <input type="text" onChange = { (e) => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
                { confirmPassword !== password ? 
                    <p className="error"> Passwords must match</p>
                    : ''
                }
            </div>
            <input type="submit" value="Create User"/>
        </form>
    )};

export default UserForm;
