import Navbar from './Navbar'
import Footer from './Footer'

export default function Example() {
    return (
        <>
            <Navbar />
            <main class="bg-neutral-900 w-full h-full ">
                <div className=" py-2 sm:px-6 lg:px-2 bg-neutral-900 w-full">
                    {/* Replace with your content */}
                    <div className="px-4 py-2 sm:px-0">
                        <header className="bg-neutral-900 ">
                            <div className="max-w-7x1 mx-auto py-2 px-4 sm:px-6 lg:px-10">
                                <h1 className="text-4xl font-bold text-white">Gallery</h1>
                            </div>
                        </header>
                    </div>
                    {/* /End replace */}
                </div>

                <section class="overflow-hidden text-neutral-900 bg-neutral-900">
                    <div class="container px-5 py-2 mx-auto lg:pt-4 lg:px-20">
                        <div class="flex flex-wrap -m-1 md:-m-2">
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images2.alphacoders.com/604/604626.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images6.alphacoders.com/114/1148650.jpg" />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images4.alphacoders.com/948/948357.jpg" />
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images6.alphacoders.com/727/727039.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images8.alphacoders.com/733/733409.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images.alphacoders.com/727/727029.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="carouselExampleCaptions" class="carousel slide relative p-20 " data-bs-ride="carousel">
                    <div class="carousel-indicators absolute right-0 bottom-10 left-10 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active relative float-left w-full">
                            <img
                                src="https://drive.google.com/uc?export=view&id=1SYW5lh9I4iVNN9dkYlUPUyrgh88io1my"
                                class="block w-full"
                                alt="..."
                            />

                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <img
                                src="https://drive.google.com/uc?export=view&id=1zx8lDO18zX2axOXo6reS1W5lM45XTvSl"
                                class="block w-full"
                                alt="..."
                            />

                        </div>
                        <div class="carousel-item relative float-left w-full">
                            <img
                                src="https://drive.google.com/uc?export=view&id=1qnpifVAD5p-UcAUDd2a187ZAUVdSpKd0"
                                class="block w-full"
                                alt="..."
                            />

                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <section class="overflow-hidden text-gray-700 bg-neutral-900">
                    <div class="container px-5 py-2 mx-auto lg:pt-4 lg:px-20 pb-10">
                        <div class="flex flex-wrap -m-1 md:-m-2">
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images6.alphacoders.com/748/748028.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images5.alphacoders.com/709/709539.jpg" />
                                </div>
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images3.alphacoders.com/986/986511.jpg" />
                                </div>
                            </div>
                            <div class="flex flex-wrap w-1/2">
                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images2.alphacoders.com/727/727037.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images8.alphacoders.com/920/920073.png" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                                        src="https://images7.alphacoders.com/727/727036.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}