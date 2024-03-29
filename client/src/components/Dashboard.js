import React, { useState, useEffect } from "react";

const Dashboard = ({setAuth}) => {
    const [ name, setName ] = useState("");

    async function getName() {
        try {
            const response = await fetch("http://localhost:3003/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            });
            const parseRes = await response.json();
            setName(parseRes.user_name)
            
        } catch (error) {
            console.error(error.message)
        }
    }
    const logout = (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      setAuth(false);

    }
    
    useEffect(() => {
        getName()
    },[])
    return (
        <>
           <h1>Dashboard {name} </h1> 
           <button className="btn btn-primary" onClick={e=> logout(e)}>Logout</button>
        </>
    )
};

export default Dashboard;