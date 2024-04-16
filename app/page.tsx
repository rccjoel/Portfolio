import Navigation from "./ui/navigation"
import Animation from "./ui/animation"
import Footer from "./ui/footer"
import Languages from "./ui/languages"
import Projects from "./ui/projects"

export default function Main() {

  return (
    <div className="bg-white">
      
      <Navigation />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#38a3a5] to-[#20c997] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-54 lg:py-44">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hello, I&apos;m Randy.
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-600">
              <Animation />
            </p>
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  I am a passionate and results-oriented professional with a unique blend of skills in mechanical engineering and front-end development.
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src="/myself.jpeg"
                  alt="Personal picture"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="text-gray-600">Student at St. Clair College</div>
                </div>
              </figcaption>
            </figure>
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-emerald-700 px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#38a3a5] to-[#20c997] opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <Projects />
      <Languages />
      <Footer />
    </div>
  )
}
