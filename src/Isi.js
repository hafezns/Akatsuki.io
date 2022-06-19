/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
        <div className="relative bg-neutral-900 overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 sm:static">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font font-extrabold tracking-tight text-white sm:text-6xl">
                            The Greatest <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline ont-extrabold tracking-tight bg-rose-700 text-neutral-900 rounded m-1">Organization</span>
                        </h1>

                        <p className="mt-4 text-xl text-neutral-300">
                            Know Our Greatness and Join Us to make the ETERNAL peace
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://i.pinimg.com/564x/a3/5f/1f/a35f1ff1fdd3a241a838ce3bdfc2f1d2.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://i.pinimg.com/564x/2b/6f/cb/2b6fcb98577f99e80e6a010439b47318.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://i.pinimg.com/564x/48/4b/c3/484bc339009994fe68bef86074752733.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://i.pinimg.com/564x/63/1a/7f/631a7f9ca70b98018e56be5e21b95349.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://i.pinimg.com/564x/c7/ae/7c/c7ae7c78385730898c80d59404f8af4f.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://i.pinimg.com/564x/84/ba/d2/84bad2f022fe1573099cdd6152b696fb.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src="https://i.pinimg.com/564x/c0/49/94/c04994ead26910db108b3808aacfcc5e.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/Signing"
                                className="inline-block text-center bg-rose-800 border border-transparent rounded-md py-3 px-8 font-medium text-neutral-200 hover:bg-neutral-700"
                            >
                                Join Us!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
