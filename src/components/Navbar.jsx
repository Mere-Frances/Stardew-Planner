import React, {useState} from 'react';

const Navbar = () => {
    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime)

    const today = new Date();
    const formattedDate = today.toLocaleDateString();

  return (
    <>
        <nav>
            <img src=''/>
            <div className='nav-clock'>
                <p>{ctime}</p>
                <p>{formattedDate}</p>
            </div>
        </nav>
    </>
  )
}

export default Navbar
