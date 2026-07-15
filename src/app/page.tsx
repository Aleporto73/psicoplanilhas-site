import { Landing } from "@/components/site/landing";
import { checkoutUrl } from "@/content/affiliates";

export default function Home() {
  return <Landing checkoutUrl={checkoutUrl()} />;
}
