import React from 'react'
import axios from 'axios'


const newuser = () => {

    axios.post('localhost/adduser.php')


  return (
    <div>
      
    </div>
  )
}

export default newuser
