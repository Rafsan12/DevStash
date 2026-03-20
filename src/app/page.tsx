import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center shadow-2xl shadow-black/30">
        <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">
          DevStash
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Dashboard Phase 1</h1>
        <p className="mt-4 text-base leading-7 text-zinc-400">
          The initial dashboard shell is ready. Open the feature route to review
          the dark mode layout, top bar, and placeholders for the sidebar and main
          workspace.
        </p>
        <Link
          className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-medium text-black transition hover:bg-zinc-100"
          href="/dashboard"
        >
          Open dashboard
        </Link>
      </div>
    </main>
  );
}
