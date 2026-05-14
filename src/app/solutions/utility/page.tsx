import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Load 5.0 - Utility Energy Storage | GPower",
  description: "Explore Full Load 5.0 utility-scale energy storage solutions and products.",
};

export default function UtilityHubPage() {
  // Redirect directly to products page
  redirect("/solutions/utility/products");
}