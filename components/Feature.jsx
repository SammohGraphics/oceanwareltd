/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
        <section className="m-4 md:m-8 dark:bg-white dark:text-gray-600">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
            <h2 className="pb-3 text-3xl font-bold md:text-4xl">What Service We are Providing?</h2>
            <p>Offer your business with the best assistance for growth.</p>
        </div>
        <div className="shadow container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col px-8 py-6">
                <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-600">Enterprise Software Dev</h2>
                <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p>
                <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-400" href="/components">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div className="shadow flex flex-col px-8 py-6 lg:border-none xl:border-solid">
                <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-600">Mobile App Development</h2>
                <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">Create an impactful mobile app that fits your brand and industry within a shorter time frame.</p>
                <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-400" href="/sections">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div className="shadow flex flex-col px-8 py-6">
                <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-600">UI/UX - Design</h2>
                <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">Build the product you need on time with an experienced team that uses a clear and effective design process</p>
                <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-400" href="/templates">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <div className="shadow flex flex-col px-8 py-6">
                <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-600">Business Analysis</h2>
                <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-400">Analyze project's functionality, business logic, software architecture, and user scenarios. From small stuff to a bigger picture.</p>
                <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-400" href="/docs">
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>
    )
  }
  