import axios from 'axios'
import React, { useEffect, useState } from 'react'
function AxiosUes(){
    const [userData, setdata]= useState([]);

    useEffect(()=>{
        axios.get("https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })

    }, [])

    return(
        <div>AxioUse
              {userData.map((data)=>{
            return(
                <div>{data.name}</div>
            )
        })}

        </div>
    )
}
export default AxiosUes