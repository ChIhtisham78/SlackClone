import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Adjust this import based on where Input is defined
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "@/components/types";
import { useState } from "react";

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
    
        const [email,setEmail] =  useState("");
        const [password,setPassword] =  useState("");
        const [confirmpassword,setconfirmPassword] =  useState("");

    const handleSignInClick = () => {
        console.log("Sign Up clicked");
        setState("signIn");
    };

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>SignUp To Continue</CardTitle>
            </CardHeader>
            <CardDescription>
                Use your email or another service to continue
            </CardDescription>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input placeholder="Email" type="email" required onChange={(e) => setEmail(e.target.value)} value={email} disabled={false} />
                    <Input placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)} value={password} disabled={false} />
                    <Input placeholder="ConfirmPassword" type="password" required onChange={(e) => setconfirmPassword(e.target.value)} value={confirmpassword} disabled={false} />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded"
                    >
                        Sign In
                    </button>
                </form>
                <Separator />
                <div className="flex flex-col gap-2.5">
                    <Button disabled={false} variant={"outline"} size="lg">
                        <FcGoogle className="size-5 m-4" />
                        Continue With Google
                    </Button>
                    <Button disabled={false} variant={"outline"} size="lg">
                        <FaGithub className="size-5 m-4" />
                        Continue With GitHub
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Already have an Account? 
                    <span onClick={handleSignInClick} className="text-sky-700 hover:underline cursor-pointer">
                        Sign In
                    </span>
                </p>
            </CardContent>
        </Card>
    );
};
