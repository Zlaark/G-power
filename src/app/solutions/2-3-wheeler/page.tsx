import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVgo - Mobility Solutions | GPower",
  description: "Explore EVgo energy storage solutions and products for electric mobility applications.",
};

export default function TwoThreeWheelerHubPage() {
  // Redirect directly to products page
  redirect("/solutions/2-3-wheeler/products");
}
