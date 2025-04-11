import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Skeleton className="h-6 w-32 rounded-full" />
              <Skeleton className="h-12 w-3/4 max-w-2xl rounded-lg" />
              <Skeleton className="h-6 w-full max-w-xl rounded-lg" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-full">
                    <Skeleton className="h-[300px] w-full rounded-lg" />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
