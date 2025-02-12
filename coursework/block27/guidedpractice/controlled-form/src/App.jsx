import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
useEffect(() => {
  console.log(formData);
},[formData])

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleSubmit(){

  }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <label>
       Username: <input type="text" name="username" value={formData.username} onChange={handleChange}/>
      </label>
      <label>
       Password: <input type="password" name="password" value={formData.password} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>


    </>
  )
}

export default App
