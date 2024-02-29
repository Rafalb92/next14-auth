import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className={cn(
        "flex h-full flex-col items-center justify-center bg-gradient-to-bl from-teal-600 to-blue-700",
        poppins.className
      )}
    >
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          <Image
            src="/lock.svg"
            alt="lock"
            width={40}
            height={40}
            className="inline-block fill-white mb-2"
          />
          Auth
        </h1>
        <p className="text-white text-lg mb-4">
          A simple authentication service
        </p>
        <LoginButton asChild>
          <Button className="mx-auto mt-4" variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
