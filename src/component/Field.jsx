import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


const Field = ({name,emailp,index}) => {
  return (

    <div className="dataval">
    <h3>{name}</h3>
    <h3>{emailp}</h3>
    <Button variant="contained" color="error">
        <DeleteIcon/>
      </Button>
      

      </div>
    
  )
}

export default Field
