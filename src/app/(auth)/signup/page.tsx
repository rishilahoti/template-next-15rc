import { Metadata } from "next";
import signupImage from "@/assets/sign-up.png"
import Image from "next/image"
import Link from "next/link";
import SignUpForm from "./SignUpFprm";

export const metadata: Metadata = {
    title: "Sign Up",
    description: "Sign up for an account.",
};

export default function Page() {
    return (
    <main className="flex h-screen items-center justify-center p-5">
        <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
            <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold">Sign Up for </h1>
					<p className="text-muted-foreground">
						HEllo
					</p>
				</div>
				<div className="space-y-5">
					<SignUpForm />
					<Link href="/login" className="block text-center hover:underline">
						Alerady have an account? Login.
					</Link>
				</div>
			</div>
			<Image
			src={signupImage}
			alt="Sign up"
			className="w-1/2 object-cover hidden md:block"
			/>
        </div>
    </main>
	);
}
