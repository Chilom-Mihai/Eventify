"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-3xl font-bold">Autentificare</h1>
      <Button onClick={() => signIn("github")}>Autentifică-te cu Github</Button>
    </div>
  );
}
