import Image from "next/image"

export default function Footer() {
    return (
        <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8 bg-zinc-800">
            <div className="py-10">
                <div className="border-t border-slate-900/5 py-2">
                    <h1 className="text-center text-xl mx-auto h-5 w-auto text-slate-50">Turning ideas into reality. Let's collaborate.</h1>
                    <p className="mt-5 text-center text-sm leading-6 text-slate-500">© 2024 Randy Cantillo. All Rights Reserved.</p>
                </div>
                <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-neutral-50">
                    <a href="#">
                        <Image 
                          src={"/github-logo.svg"}
                          width={24}
                          height={24}
                          alt="Github Logo"
                        />
                    </a>
                    <div className="h-4 w-px bg-neutral-50"></div>
                    <a href="#">
                        <Image 
                          src={"/linkedin-logo.svg"}
                          width={24}
                          height={24}
                          alt="LinkedIn Logo"
                        />
                    </a>
                    <div className="h-4 w-px bg-neutral-50"></div>
                    <a href="#">rccjoel@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}