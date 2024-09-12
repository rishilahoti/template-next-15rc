import Link from "next/link";
import logoText from "@/assets/logo-txt.svg"
import Image from "next/image";
import UserButton from "@/components/UserButton";
import SearchField from "@/components/SearchField";

export default function Nav() {
    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-5 px-5 py-3">
                <Link href="/">
                    <Image src={logoText} alt="logo" className="h-[40px] w-fit hidden lg:block" />
                    <h1 className="text-2xl font-bold text-primary lg:hidden">Step by Step</h1>
                </Link>
                <SearchField/>
                <UserButton className="sm:ms-auto"/>
            </div>
        </header>
    );
}