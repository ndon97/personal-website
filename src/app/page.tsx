import type { Metadata } from "next";
import Homepage from "./homepage";
export const metadata: Metadata = {
  title: "Nick Don Website",
  description: "Welcome",
};

export default function Page() {
  return <Homepage />;
}
