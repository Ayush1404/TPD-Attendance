import  Navigation from "./Navigation"
import HeaderLogo from "./HeaderLogo"
import WelcomeMsg from "./WelcomeMsg"

const Header = () => {
  return (
   <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex flex-col  justify-center items-center ">
          <div className="flex items-center  justify-center">
            <HeaderLogo />
            <Navigation />
          </div>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  )
}

export default Header