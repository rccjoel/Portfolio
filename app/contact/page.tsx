import Navigation from '../ui/navigation'
import Footer from '../ui/footer'
import Image from 'next/image'

export default function Contact() {
  const stats = [
    { id: 1, asset: '/github-logo.svg', value: '44 million', alt:'Github', link: 'https://github.com/rccjoel' },
    { id: 2, asset: '/linkedin-logo.svg', value: '$119 trillion', alt:'LinkedIn', link: 'https://www.linkedin.com/in/randy-cantillo/' },
    { id: 3, asset: '/mail-icon.svg', value: 'rccjoel@gmail.com', alt:'Email', link: 'mailto:rccjoel@gmail.com' },
  ]
  return (
    <div className="bg-zinc-800 py-6 sm:py-8 h-screen">
      <Navigation />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-700">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Talk?
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            Ready to take the next step? I&apos;m here to help you achieve your goals. 
            Contact me today to discuss how I can bring your vision to life.
          </p>
        </div>
        <div className="bg-zinc-800 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <a href={stat.link}>
                    <Image 
                      src={stat.asset}
                      width={48}
                      height={48}
                      alt={stat.alt}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}
