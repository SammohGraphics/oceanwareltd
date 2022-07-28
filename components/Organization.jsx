export default function Organization() {
    return (
        <section className="dark:bg-transparency dark:text-gray-900 py-12">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <img src="ocean.png" alt=""/>
                </div>
                <div className="flex flex-col w-full p-6 lg:w-1/1 md:p-8 lg:p-16">
                    <h1 className="text-5xl font-bold leading-none text-blue-900">What is Ocean<span className="dark:text-sky-600">ware</span>?</h1>
                    <p className="mt-4 mb-8 text-sm">Oceanware limited One of the best Software Development company.
                        Oceanware limited is at the forefront as the most innovative software development company.
                        Our cost-efficient and structured teamwork justifies our position.
                        We ensure the qualities of services and reaching customers in timely manner</p>
					<ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
		<li className="flex items-center space-x-2">
			<img src="img/icons/check.svg" alt="" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"/>
			<span>Concept Design</span>
		</li>
		<li className="flex items-center space-x-2">
			<img src="img/icons/check.svg" alt="" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"/>
			<span>Concept Development</span>
		</li>
          <br/>
		<li className="flex items-center space-x-2">
			<img src="img/icons/check.svg" alt="" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"/>
			<span>Concept Implementation</span>
		</li>
		<li className="flex items-center space-x-2">
			<img src="img/icons/check.svg" alt="" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"/>
			<span>Testing work</span>
		</li>

	</ul>
                </div>
            </div>
        </section>
    )
}