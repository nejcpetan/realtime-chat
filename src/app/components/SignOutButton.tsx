"use client";
import { ButtonHTMLAttributes, FC, useState } from "react";
import Button from "./ui/Button";
import { Ghost, LoaderCircle, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch (error) {
          toast.error("There was a problem signing out.");
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? (
        <LoaderCircle className="animate-spin h4- w-4" />
      ) : (
        <LogOut className="w-4 h-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
