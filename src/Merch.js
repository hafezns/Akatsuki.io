/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from './Navbar'
import Footer from './Footer'

const products = [
    {
        id: 1,
        name: 'Itachi Ring',
        href: 'https://www.tokopedia.com/wildcard-91/cincin-diameter-2-cm-naruto-akatsuki-itachi-merah?extParam=ivf%3Dfalse%26src%3Dsearch',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2020/9/17/e9a00aa5-e825-494f-affa-bd43d5544909.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Silver',
    },
    {
        id: 1,
        name: 'Jacket',
        href: 'https://www.tokopedia.com/ardyshopdistro/jaket-akatsuki-jubah-anime-naruto-hoodie-zipper-custom-itachi-clan?extParam=ivf%3Dfalse%26src%3Dsearch',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/product-1/2017/12/19/20614525/20614525_1d31a824-54c2-458b-8481-9f56e8d1c827_1050_1050.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$125',
        color: 'Black',
    },
    {
        id: 1,
        name: 'T-Shirt',
        href: 'https://www.tokopedia.com/sugoidesune/kaos-baju-anime-polyflex-naruto-akatsuki-cloud-putih-s?extParam=ivf%3Dfalse%26src%3Dsearch',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/12/10/7f7b2609-f044-4fe5-85be-9b6a48e10ba7.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$75',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Neklace',
        href: 'https://www.tokopedia.com/lariztshop/kalung-anime-naruto-shippuden-akatsuki-cloud-sign-necklace?extParam=ivf%3Dfalse%26src%3Dsearch',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/product-1/2020/2/20/116016/116016_e827a2ca-2f3e-4ab7-be83-71cf86fbbdcf_800_800.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Head Band',
        href: 'https://www.tokopedia.com/fiandrashop/headband-for-naruto-cosplay-costume-kakashi-itachi-akatsuki-madara-new-hitam-suna?extParam=ivf%3Dfalse%26src%3Dsearch',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/product-1/2018/9/6/3768875/3768875_d362ed76-85fb-4889-aff8-75738fc85fc3_800_713',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$45',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Action Figure',
        href: 'https://www.tokopedia.com/waroengfigure/action-figure-naruto-akatsuki-medium-size?extParam=ivf%3Dfalse%26src%3Dsearch',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/8/26/72980deb-aaa6-4c37-a667-8c97bbda2ace.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$100',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Kimono',
        href: 'https://www.tokopedia.com/deimarushop/kostum-jepang-japan-kimono-pendek-unisex-hitam-haori-naruto-akatsuki-standar?extParam=ivf%3Dfalse%26src%3Dsearch',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/28/9bac0602-3af3-4bd6-ae3d-d10cee1e8c79.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$50',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Hoodie',
        href: 'https://www.tokopedia.com/seeinstore/hoodie-oversize-jumbo-fleece-simbol-akatsuki-white-size-s-s-d-5xl-5xl?src=topads',
        imageSrc: 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/16/d577c618-69fe-427d-9a48-9514c9587537.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$55',
        color: 'White',
    },
    // More products...
]

export default function Example() {
    return (
        <>
            <Navbar />
            <main class="bg-neutral-900 w-full h-full pb-10">
                <div className=" py-2 sm:px-6 lg:px-2 bg-neutral-900 w-full">
                    {/* Replace with your content */}
                    <div className="px-4 py-2 sm:px-0">
                        <header className="bg-neutral-900 ">
                            <div className="max-w-7x1 mx-auto py-6 px-4 sm:px-6 lg:px-10">
                                <h1 className="text-4xl font-bold text-white">Special Merch</h1>
                            </div>
                        </header>
                    </div>
                    {/* /End replace */}
                </div>
                <div className="bg-neutral-900">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-200">Find what you need</h2>

                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                        />
                                    </div>

                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-white">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-white">{product.color}</p>
                                        </div>
                                        <p className="text-sm font-medium text-white">{product.price}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
