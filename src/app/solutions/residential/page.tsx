import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Pod - Residential/Portable | GPower",
  description:
    "Explore Power Pod residential and portable energy storage solutions and products for your home.",
};

export default function ResidentialHubPage() {
  // Redirect directly to products page
  redirect("/solutions/residential/products");
}
