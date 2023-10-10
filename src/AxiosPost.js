import axios from 'axios';
import React, {useState} from 'react'
function AxiosPost(){
    const data={fname: "", Cname: ""};

    const handleData = (e)=>{
        setInputdata({...inputData, [e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>
    {
        e.preventDefault();
        axios.post("", inputData)
        .then((response)=>
        {
            console.log(response)
        }
        )
    }

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put("", inputData)
        .then((response)=>
        {
            console.log(response)
        }
        )
    }

    const handleDelete =(e)=>{
        e.preventDefault();
        axios.delete("https://assignment.8848digitalerp.com/api/method/assignment.API.all_users_api.get_user")
        .then((response)=>
        {
            console.log(response)
        }
        )


    }

    const [inputData, setInputdata] = useState(data)
    return(
        <>

        <label>Name: </label>
        <input type="text" name='fname' value={inputData.fname} onChange={handleData}></input><br/>

        <label>Company Name: </label>
        <input type="text" name='Cname'  value={inputData.Cname} onChange={handleData}></input><br/>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>


        </>
        
    )
}
export default AxiosPost