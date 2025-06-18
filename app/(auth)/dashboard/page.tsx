"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthHomePage = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();

    router.refresh();
  };
  return (
    <div>
      Auth Home Page
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthHomePage;
