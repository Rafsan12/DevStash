import Link from "next/link";

const itemTypeContent: Record<string, { title: string; description: string }> = {
  snippets: {
    title: "Snippets",
    description: "Browse reusable code snippets for the dashboard workspace.",
  },
  prompts: {
    title: "Prompts",
    description: "Browse saved AI prompts and prompt templates.",
  },
  commands: {
    title: "Commands",
    description: "Browse frequently used terminal and git commands.",
  },
  notes: {
    title: "Notes",
    description: "Browse markdown notes and written references.",
  },
  files: {
    title: "Files",
    description: "Browse context files and stored reference documents.",
  },
  images: {
    title: "Images",
    description: "Browse visual references and saved images.",
  },
  links: {
    title: "Links",
    description: "Browse saved URLs and useful external references.",
  },
};

export default async function ItemTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const content = itemTypeContent[type] ?? {
    title: "Items",
    description: "Browse dashboard items by type.",
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-2xl rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30">
        <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">DevStash</p>
        <h1 className="mt-4 text-4xl font-semibold">{content.title}</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
          {content.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-medium text-black transition hover:bg-zinc-100"
            href="/dashboard"
          >
            Back to dashboard
          </Link>
          <span className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm text-zinc-400">
            Placeholder route for phase 2 navigation
          </span>
        </div>
      </div>
    </main>
  );
}