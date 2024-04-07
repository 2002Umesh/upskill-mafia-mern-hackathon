import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { Bounce, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const ENDPOINT ="https://upskill-mafia-mern-hackathon.vercel.app";
  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${ENDPOINT}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Login Form ", response);
      const res_data = await response.json();
      console.log("response from server", res_data);
      if (response.ok) {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          }
        );
        console.log("invalid credentials");
        setUser({
          email: "",
          password: "",
        });
      }

      console.log(response);
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center w-full h-screen">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
      <Switch id="isMentor" />
      <Label htmlFor="isMentor">Are you Mentor?</Label>
    </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
             
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
