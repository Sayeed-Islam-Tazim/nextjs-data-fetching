import Link from "next/link";
import { SearchComponent } from "../components/Search";

export default function TestPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href={`/about`}>About</Link>
      <SearchComponent />
      <h3>Test Page</h3>
    </div>
  );
}
