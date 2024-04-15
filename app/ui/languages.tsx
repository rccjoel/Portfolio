import Image from "next/image"

export default function Languages() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Unlocking efficiency with modern languages
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/nextjs-logo.svg"
              alt="Nextjs"
              width={60}
              height={60}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/react-logo.svg"
              alt="React"
              width={60}
              height={60}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/tailwind-logo.svg"
              alt="Tailwind"
              width={60}
              height={60}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/typescript-logo.svg"
              alt="TypeScript"
              width={60}
              height={60}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="python-logo.svg"
              alt="Python"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    )
  }
  