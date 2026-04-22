import LoginForm from "@/features/auth/components/login/login-form";
import Link from "next/link";

export default function page() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full max-w-113">
        {/* Title */}
        <h1 className="font-inter text-3xl font-bold text-gray-800">Login</h1>

        {/* Form */}
        <LoginForm />
        {/* Support text */}
        <p className="text-sm text-gray-500 font-medium">
          Dont have an account
          <Link href="/register" className="text-blue-600">
            Create yours
          </Link>
        </p>
      </div>
    </main>
  );
}
