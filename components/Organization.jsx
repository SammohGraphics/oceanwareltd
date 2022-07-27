export default function Organization() {
    return (
        <section className="dark:bg-transparency dark:text-gray-900 py-12">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/3">
                    <img src="ocean.png" alt=""/>
                </div>
                <div className="flex flex-col w-full p-6 lg:w-1/2 md:p-8 lg:p-12">
                    <h1 className="text-5xl font-bold leading-none text-blue-900">What is Ocean<span className="dark:text-sky-600">ware</span>?</h1>
                    <p className="mt-4 mb-8 text-sm">Oceanware limited One of the best Software Development company.
                        Oceanware limited is at the forefront as the most innovative software development company.
                        Our cost-efficient and structured teamwork justifies our position.
                        We ensure the qualities of services and reaching customers in timely manner</p>
                </div>
            </div>
        </section>
    )
}