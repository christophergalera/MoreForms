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

    return (
        <form onSubmit= {createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange = { (e) => setFirstName(e.target.value)} value={firstName}/>
                { firstName.length < 2 ? 
                    <p>First Name must be at least 2 characters long</p>
                    : ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange = { (e) => setLastName(e.target.value)} value = {lastName}/>
                { lastName.length < 2 ? 
                    <p>First Name must be at least 2 characters long</p>
                    : ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange = { (e) => setEmail(e.target.value)} value = {email}/>
                { email.length < 2 ? 
                    <p>Email must be at least 2 characters long</p>
                    : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange = { (e) => setPassword(e.target.value)} value = {password}/>
                { password.length < 2 ? 
                    <p>Passwords must be at least 8 characters long</p>
                    : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange = { (e) => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
                { confirmPassword !== password ? 
                    <p>Passwords must match</p>
                    : ''
                }
            </div>
            <input type="submit" value="Create User"/>
        </form>
    )};

export default UserForm;
