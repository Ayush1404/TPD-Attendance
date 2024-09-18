import { useLocation } from 'react-router-dom';
const WelcomeMsg = () => {
    const location = useLocation();
    const path = location.pathname;

    let subtitle = "This is your Attendance Overview Report";
    let role = "user";
let msg="You can Create Events for specific companies"
    if (path === "/events") {
        role="Admin"
        subtitle = "This is your Event's";
    } else if (path === "/admins") {
        role="Admin"
        subtitle = "This is your Admin's";
    } else if (path === "/userdashboard") {
        role="User"
        subtitle = "Scan the QR to mark your attendees.";
        msg=" "
    }
    return (
        <div className="space-y-2 mb-4 flex ">
            <div>
<h2 className="text-2xl lg:text-4xl text-black font-medium mt-5">
            Welcome {role} , 
            </h2>
         <h3 className="text-2xl lg:text-2xl text-black font-medium mt-2">
            {msg}
            </h3>   
        <p className="text-sm lg:text-base text-[#1c2739] mt-6">
            {subtitle}
        </p>
            </div>
        
        
    </div>
  )
}

export default WelcomeMsg