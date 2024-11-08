import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { Label } from "@radix-ui/react-label";
import kitlogo from "/kitlogo.png"

interface ErrorMessages {
  email?: string;
  password?: string;
  [key: string]: string | undefined;
}

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorMessages>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      setIsLoading(true); // Set loading to true
      setErrors({}); // Clear previous errors
      const user = {
        email,
        password,
      };
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/login`, user);
      if (response?.data.success) {
        localStorage.setItem('authToken', response?.data.authToken);
        toast.success(response?.data.message);
        navigate('/events'); // Navigate after successful login
      } else {
        toast.error(response?.data.message);
      }
    } catch (err: any) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1">

      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="flex justify-center items-center">
          <div>
            <div className="m-auto flex justify-center">
              <img src={kitlogo} alt="" className="w-4/6 h-4/6" />
            </div>
            <h1 className="font-bold text-3xl text-[#2E2A47]">
              Welcome  to <span className="text-blue-600">KIT TPO</span>
            </h1>


            <div >
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Log in to account</CardTitle>
                  <CardDescription>
                    Enter your email below to login  <strong>For Admin</strong>
                  </CardDescription>

                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                    {errors.email && <div className="ml-2">
                      <p className="text-sm text-red-400">
                        {errors.email}
                      </p>
                    </div>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        id="password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                      />
                      <Button
                        variant={'outline'}
                        onClick={() => setIsPasswordVisible((t) => !t)}
                        style={{
                          aspectRatio: 1,
                          padding: '0',
                          borderColor: 'rgb(226 232 240 / 1)',
                        }}
                        disabled={isLoading}
                      >
                        {isPasswordVisible && <EyeOffIcon color="rgb(226 232 240 / 1)" size={24} />}
                        {!isPasswordVisible && <EyeIcon color="rgb(226 232 240 / 1)" size={24} />}
                      </Button>
                    </div>
                    {errors.password && <div className="ml-2">
                      <p className="text-sm text-red-400">
                        {errors.password}
                      </p>
                    </div>}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="grid gap-4 w-full">
                    <Button
                      className="w-full max-w-[500px] mx-auto bg-blue-600 hover:bg-blue-500"
                      onClick={loginUser}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Logging in...' : 'Log in'}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
