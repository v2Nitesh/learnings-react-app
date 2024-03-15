import { useForm } from "react-hook-form";
// import "./styles.css";
import Box from '@mui/material/Box';


const ReactHook = () => {

  const { register, handleSubmit,formState: { errors }} = useForm();

  const onSubmitData = (d: any) => {
    alert(JSON.stringify(d))
  }

  return (
    <div>React Hook Form
      <form onSubmit={handleSubmit(onSubmitData)}> 
      <label>First Name <input {...register("firstName", { required: true, maxLength: 10 })}  />
      {errors.firstName && <p>This field is required</p>}
      </label>
      <label>Last Name <input {...register("LastName")} /></label>
      <input type="submit" value="submit"></input>
      </form>
   </div>
  )
}

export default ReactHook;