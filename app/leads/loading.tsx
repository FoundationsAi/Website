import { Skeleton } from "@/components/ui/skeleton"

export default function LeadsLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 lg:px-6">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-[300px]" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="mt-2 h-4 w-[350px]" />
              </div>
              <Skeleton className="h-10 w-[150px]" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="rounded-lg border bg-card p-6">
                    <Skeleton className="h-5 w-[120px]" />
                    <Skeleton className="mt-4 h-8 w-[80px]" />
                    <Skeleton className="mt-2 h-4 w-[100px]" />
                  </div>
                ))}
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 w-[180px]" />
                ))}
            </div>

            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <Skeleton className="h-6 w-[150px]" />
                <Skeleton className="mt-2 h-4 w-[100px]" />
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <Skeleton className="h-12 w-full" />
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
