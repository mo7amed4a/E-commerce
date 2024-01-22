import type { Metadata } from 'next'
import Image from 'next/image'
 
export const metadata: Metadata = {
  title: 'Auth test',
  description: 'Auth test',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image width={700} height={700}
                alt="Night"
                src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-full w-full object-cover"
            />
        </aside>

        <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
            {children}
        </main>
    </div>
    </section>
  )
}

