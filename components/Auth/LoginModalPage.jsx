"use client";

import { useRouter } from "next/navigation";
import AuthModal from "./AuthModal";

export default function LoginModalPage() {
  const router = useRouter();
  return <AuthModal isOpen onClose={() => router.push("/")} />;
}
