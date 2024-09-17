import { Link } from "react-router-dom"

const HeaderLogo = () => {
  return (
    <Link to={'/'}>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
  <img src="./kitlogo.png" alt="" className="w-10/12 h-10/12 "/>
            <h4 className="text-center text-3xl ">KIT TPO</h4>
        </div>
          
      </div>
        
    </Link>
  )
}

export default HeaderLogo