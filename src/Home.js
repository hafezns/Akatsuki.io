import Navbar from "./Navbar"
import Footer from "./Footer"
import Isi from "./Isi"
import Player from "./Player"

export default function Example() {
  return (
    <>
      <Navbar />
      <main class="bg-neutral-900 w-full h-full ">
        <div className=" py-2 sm:px-6 lg:px-2 bg-neutral-900 w-full">
          {/* Replace with your content */}
          <div className="px-4 py-2 sm:px-0">
            <header className="bg-neutral-900 ">
              <div className="max-w-7x1 mx-auto py-6 px-4 sm:px-6 lg:px-10">
                <h1 className="text-4xl font-bold text-white">Akatsuki.io</h1>
              </div>
            </header>
          </div>
          {/* /End replace */}
        </div>
        <Isi />
        <header className="bg-neutral-900 ">
          <div className="max-w-7x1 mx-auto py-6 px-4 sm:px-6 lg:px-10">
            <h1 className="text-4xl font-bold text-white">Akatsuki Hymn</h1>
            <Player />
          </div>

        </header>

      </main>

      <Footer />
    </>
  )
}