import { redirect} from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Others - Marine & Other Applications | GPower",
  description: "Explore energy storage solutions and products for marine and other specialized applications.",
};

export default function NewApplicationBusinessHubPage() {
  // Redirect directly to products page
  redirect("/solutions/new-application-business/products");
}
