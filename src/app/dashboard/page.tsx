import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockDashboardData } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(180deg,_#09090b_0%,_#050507_100%)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-black/40 shadow-2xl shadow-black/30 backdrop-blur">
          <header className="flex flex-col gap-4 border-b border-white/10 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-zinc-200">
                DS
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200">
                  {mockDashboardData.user.name}
                </p>
                <p className="text-sm text-zinc-500">
                  {mockDashboardData.user.email}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 lg:max-w-3xl lg:flex-row lg:items-center">
              <Input
                aria-label="Search items"
                className="lg:flex-1"
                placeholder="Search items..."
              />
              <div className="flex items-center gap-3">
                <Button className="min-w-32" variant="outline">
                  New Collection
                </Button>
                <Button className="min-w-24">New Item</Button>
              </div>
            </div>
          </header>

          <section className="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:px-6">
            <aside className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Dashboard
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Sidebar
                  </h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                  {mockDashboardData.itemTypes.length} types
                </span>
              </div>

              <div className="space-y-3">
                {mockDashboardData.itemTypes.map((itemType) => (
                  <div
                    className="flex items-center justify-between rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-3"
                    key={itemType.id}
                  >
                    <div>
                      <p className="font-medium text-zinc-100">{itemType.name}</p>
                      <p className="text-sm text-zinc-500">{itemType.label}</p>
                    </div>
                    <span className="text-sm text-zinc-400">{itemType.count}</span>
                  </div>
                ))}
              </div>
            </aside>

            <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                    Phase 1
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">Main</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                    Dashboard scaffolding is in place for the upcoming collection,
                    pinned, and recent sections.
                  </p>
                </div>
                <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-3 text-sm text-sky-100">
                  {mockDashboardData.collections.length} collections loaded from
                  mock data
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {mockDashboardData.collections.slice(0, 6).map((collection) => (
                  <article
                    className="rounded-[22px] border border-white/8 bg-black/30 p-5"
                    key={collection.id}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {collection.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                          {collection.description}
                        </p>
                      </div>
                      {collection.isFavorite ? (
                        <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-medium text-amber-200">
                          Favorite
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-6 flex items-center justify-between text-sm text-zinc-500">
                      <span>{collection.itemCount} items</span>
                      <span>{collection.itemTypeIds.join(" / ")}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
