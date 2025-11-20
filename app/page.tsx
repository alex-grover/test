import Image from "next/image"

export default function Home() {
  const facts = [
    {
      title: "Three Hearts",
      description:
        "Two pump blood to the gills, while the third pumps it to the rest of the body. When an octopus swims, the heart that delivers blood to the body actually stops beating—that's why they prefer to crawl!",
    },
    {
      title: "Intelligent Problem Solvers",
      description:
        "Octopuses are highly intelligent and can solve complex puzzles, open jars, and use tools. They have excellent memory and can learn by observing other octopuses.",
    },
    {
      title: "Master of Disguise",
      description:
        "An octopus can change color and texture in milliseconds to match its surroundings. They have specialized skin cells called chromatophores that allow instant camouflage.",
    },
    {
      title: "Nine Brains",
      description:
        "Two-thirds of an octopus's neurons are in its arms, not its head. Each arm can think independently and solve problems while the main brain focuses on other tasks.",
    },
    {
      title: "Escape Artists",
      description:
        "With a boneless body, octopuses can squeeze through incredibly tiny spaces—as small as a coin. They're famous for escaping aquariums and exploring outside their tanks!",
    },
    {
      title: "Venomous Performers",
      description:
        "Even small octopuses can be venomous. The blue-ringed octopus, despite being the size of a golf ball, carries enough venom to kill a human.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Did you know octopuses have three hearts? 🐙
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Two pump blood to the gills, while the third pumps it to the rest of the body. When an octopus swims, the
            heart that delivers blood to the body actually stops beating. That's why they prefer to crawl rather than
            swim—it's less exhausting!
          </p>
        </div>

        <div className="mt-16 w-full">
          <h2 className="text-2xl font-semibold mb-8 text-black dark:text-zinc-50">More Fascinating Octopus Facts</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-zinc-50">{fact.title}</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={16} height={16} />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  )
}
