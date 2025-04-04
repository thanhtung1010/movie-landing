import { redirect } from "next/navigation";

export default function NotFoundPage() {
  redirect("/"); // Redirect về `/home`
  return null; // Không render gì cả
}
