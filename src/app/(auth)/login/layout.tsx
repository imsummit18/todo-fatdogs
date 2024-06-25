import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex-col items-center justify-center grid max-w-none  h-screen m-auto lg:grid-cols-2 lg:px-0 overflow-none">
            <div className="lg:p-8 lg:pt-0  px-6 py-8 xl:p-0 max-w-[520px]   bg-white lg:bg-transparent mx-[4%] sm:m-auto rounded-lg   shadow-md lg:shadow-none flex flex-col justify-between ">
                {children}
            </div>
            <div className="relative hidden h-screen flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 overflow-hidden bg-gray-500" />
            </div>
        </div>
    );
}
export default Layout;
