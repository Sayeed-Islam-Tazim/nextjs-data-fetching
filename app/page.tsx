export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        {/* <HeaderPage /> */}
        {children}
        {/* <Link href={`/about`}>About</Link>
        <Link href={`/test`}>Test</Link> */}
      </div>
    </div>
  );
}
