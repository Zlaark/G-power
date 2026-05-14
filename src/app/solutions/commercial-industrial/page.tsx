import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jumbo 0.25 - Commercial & Industrial | GPower",
  description: "Explore Jumbo 0.25 commercial and industrial energy storage solutions and products.",
};

export default function CommercialIndustrialHubPage() {
  // Redirect directly to products page
  redirect("/solutions/commercial-industrial/products");
}
