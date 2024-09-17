import { useLocation } from 'react-router-dom';
const WelcomeMsg = () => {
    const location = useLocation();
    const path = location.pathname;

    let subtitle = "This is your Attendance Overview Report";

    if (path === "/events") {
        subtitle = "This is your Event's";
    } else if (path === "/admins") {
        subtitle = "This is your Admin's";
    }else if (path === "/userdashboard") {
        subtitle = "Scan the QR to mark your attendees.";
    }
    return (
        <div className="space-y-2 mb-4 flex ">
            <div>
<h2 className="text-2xl lg:text-4xl text-black font-medium mt-5">
            Welcome Admin , 
            </h2>
         <h3 className="text-2xl lg:text-2xl text-black font-medium mt-2">
            You can Create Events for specific companies
            </h3>   
        <p className="text-sm lg:text-base text-[#1c2739] mt-6">
            {subtitle}
        </p>
            </div>
        
        
    </div>
  )
}

export default WelcomeMsg