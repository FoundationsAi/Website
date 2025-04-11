import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex gap-8">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-4 w-16" />
              ))}
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
          <div className="flex md:hidden">
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <Skeleton className="h-6 w-24 mb-4" />
              <Skeleton className="h-12 w-full max-w-2xl mb-4" />
              <Skeleton className="h-12 w-full max-w-xl mb-4" />
              <Skeleton className="h-6 w-full max-w-lg mb-8" />
              <div className="w-full max-w-4xl mx-auto mt-8">
                <Skeleton className="h-[400px] w-full rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Categories Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-full max-w-lg mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Array(7)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 w-32 rounded-full" />
                ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(9)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-full">
                    <Skeleton className="h-64 w-full rounded-lg" />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
          </div>
          <Skeleton className="h-px w-full" />
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <Skeleton className="h-4 w-48" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
