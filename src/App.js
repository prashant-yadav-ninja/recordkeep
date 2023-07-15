import "./App.css";
import Header from "./component/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
// import Field from "./component/Field";
import DeleteIcon from '@mui/icons-material/Delete';


function App() { 
  // const [name, setName] = useState("");
  // const [emailp, setEmail] = useState("");
  const [form,setForm] = useState({}) ;
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data,{form}])
    // setName("")
    // setEmail("")
    setForm({form})
    // setForm({})
    }

    const removeItem = (index) => {
      let arr = data ;
      arr.splice(index,1) ;
      // data.splice(index,1) ;
      setData([...arr]) ;

    }
  

  return (
    <div className="App">
      <Header />

      {/* form */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form,name:event.target.value})}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />

          <TextField
            value={form.email}
            onChange={(event) => setForm({...form,email:event.target.value})}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <Button
            onClick={addData}
            variant="contained"
            size="large"
            color="success"
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}

      <div className="data">
        <div className="dataval">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
          </div>
          {
            data.map((element,index) => {
              return (
                <div key={index} className="dataval">
                <h3>{element.form.name}</h3>
                <h3>{element.form.email}</h3>
                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                    <DeleteIcon/>
                  </Button>
                  
            
                  </div>
             
                
              )
            })
          }
        
      </div>
    </div>
  );
}

export default App;
