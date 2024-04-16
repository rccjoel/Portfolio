import { CheckIcon } from '@heroicons/react/20/solid'

const projects = [
    {
        id: 1,
        title: "El Mercadito Grab & Go",
        description: "Coffee shop located in Leamington, ON. The client wanted to gain visibility on the web and display the full menu to it's customers.",
        challenges: [
            'Display menu by sections',
            'Optimized for mobile browsers',
            'Create inspiring about section',
            'Deploy in a timely manner'
        ],
        link: "https://el-mercadito-phi.vercel.app/"
    },
    {
        id: 2,
        title: "ATI General Contracting",
        description: "ATI General Contracting is a construction company. It is a family-owned business with a passion for turning visions into realities.",
        challenges: [
            'Display services section',
            'Optimize SEO to reach more clients',
            'Family friendly quote section',
            'Showcase previous work'
        ],
        link: "#"
    }
]

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bringing Ideas to Life</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This section showcases a selection of my recent projects. Surf to learn more about the
            challenges I tackled, the solutions I implemented, and the results achieved.
          </p>
        </div>
        {projects.map((project) => (
          <div key={project.id} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">      
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{project.title}</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">{project.description}</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-emerald-600">Challenges & Solutions</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {project.challenges.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-emerald-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                  </p>
                  <a
                    href={project.link}
                    className="mt-10 block w-full rounded-md bg-emerald-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Live Demo
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Live demo deployed using Vercel
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
