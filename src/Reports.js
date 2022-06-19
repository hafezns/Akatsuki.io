import Navbar from './Navbar'
import Footer from './Footer'
import aka from './img/aka.png'

export default function Example() {
    return (
        <>
            <Navbar />
            <div class="bg-black">
                <div className="max-w-7x1 mx-auto py-6 px-4 sm:px-6 lg:px-10">
                    <h1 className="text-4xl font-bold text-white">Information About Akatsuki</h1>
                </div>

                <div class="p-6">
                    <div class="flex flex-wrap justify-center p-6">
                        <img
                            src="https://images4.alphacoders.com/948/948357.jpg"
                            class="p-3 bg-gray-300 border rounded-lg max-w-sm"
                            alt="..."
                        />
                    </div>
                    <h1 class="text-2xl font-bold text-white px-4">✧ Apa Itu Akatsuki?</h1>
                    <h1 class="text-white py-10 px-10">Akatsuki (暁; Secara harfiah berarti "Fajar") awalnya adalah sebuah organisasi yang diciptakan oleh Yahiko dan dua rekannya Konan dan Nagato dalam upaya untuk melawan tirani dan penindasan desa asal mereka Amegakure menghadapi Perang Dunia Shinobi Ketiga, dan tujuan jangka panjang perdamaian dunia.
                        Setelah kematian Yahiko dan di bawah pengaruh Obito Uchiha, Akatsuki menjadi organisasi kriminal yang terdiri dari Tingkat-S ninja pengejaran dan merupakan kelompok yang paling dicari di seluruh dunia shinobi. Tujuan utama mereka adalah untuk mengumpulkan semua monster berekor untuk rencana mereka mendominasi dunia, khususnya untuk melepaskan Ekor-Sepuluh. Dengan demikian, Akatsuki, meski awalnya memiliki peran kecil selama Bagian I, menjadi kelompok antagonis utama dalam Bagian II.</h1>
                </div>

                <div class="p-6">
                    <div class="flex flex-wrap justify-center p-6">
                        <img
                            src="https://i.pinimg.com/564x/67/4a/98/674a98d30ab65eaa97dbe140a6d9750f.jpg"
                            class="p-3 bg-gray-300 border rounded-lg max-w-sm"
                            alt="..."
                        />
                    </div>
                    <h1 class="text-2xl font-bold text-white px-4">✧ Tujuan</h1>
                    <h1 class="text-white py-10 px-10"><span class="font-bold text-lg">Tujuan Asli: </span>
                        Di bawah kepemimpinan Yahiko, kelompok itu dimaksudkan untuk mengakhiri perang yang berlangsung di Amegakure dan menciptakan perdamaian. Ketika ia masih muda, Yahiko juga mencatat bahwa ia tidak menyukai fakta bahwa selalu hujan di negaranya, seolah-olah semua negara lakukan adalah menangis dan ia ingin mengubah itu. Ini mungkin di mana nama organisasi secara harfiah berarti "fajar" berasal. Dia juga mencatat bahwa organisasi itu dimaksudkan untuk bertindak sebagai unit dukungan untuk Nagato, yang ia percaya akan membawa perdamaian ke dunia.
                    </h1>
                    <h1 class="text-white pt-0 pb-10 px-10"><span class="font-bold text-lg">Setelah Kematian Yahiko: </span>
                        tujuan yang sebenarnya Nagato untuk rencana ini tidak melibatkan Akatsuki menaklukkan bangsa-bangsa lain, melainkan menggunakan kekuatan monster berekor sebagai sarana untuk menakut-nakuti dunia menjadi tidak ada pertempuran lagi. Dengan memanfaatkan chakra monster berekor untuk menciptakan kinjutsu kuat, Akatsuki bisa segera menghancurkan satu sisi perang dan menakut-nakuti sisi lain dari melanjutkan pertarungan. Ini adalah sampai mereka akhirnya lupa ketakutan ini dan keniscayaan perang mengarah ke pertempuran untuk melanjutkan, di mana kinjutsu akan digunakan lagi. Dengan demikian siklus akan terlulang, menciptakan periode kecil perdamaian di rantai tak berujung kebencian.
                    </h1>
                </div>

                <div class="p-6">
                    <div class="flex flex-wrap justify-center p-6">
                        <img
                            src={aka}
                            class="p-3 bg-gray-300 border rounded-lg max-w-sm"
                            alt="..."
                        />
                    </div>
                    <h1 class="text-2xl font-bold text-white px-4">✧ Simbol</h1>
                    <h1 class="text-white pt-10 pb-10 px-10"><span class="font-bold text-lg">Seragam: </span>
                        Anggota Akatsuki memiliki seragam yang sangat khas, yang bisa memberitahukan mereka datang ke setiap desa-desa dan diperingatkan kehadiran mereka. Anggota memakai lengan panjang, jubah gelap dengan awan merah, interior merah, dan kerah dagu-tinggi. Tobi dan anggota Taka memakai mantel berkerudung yang sama. Awan merah mewakili hujan darah yang jatuh di Amegakure selama perang tersebut, dan dipandang sebagai simbol keadilan oleh anggota aslinya. Semua anggota memakai cat kuku hitam di jari dan kuku mereka, meskipun warna bervariasi dalam anime, dan mungkin memakai topi jerami berbentuk kerucut dengan torsi hias kecil dan jumbai menggantung ke bawah wajah mereka. Topi dapat digunakan untuk memasuki suatu desa atau ketika cuaca tak menentu. Beberapa anggota mencoret simbol pada pelindung dahi mereka untuk melambangkan hubungan yang rusak dengan desa mereka, sebuah adat yang berasal dengan Nagato dan faksi saingannya dalam perang sipil Amegakure. Semua orang juga memakai cincin di jari dengan tulisan kanji yang berbeda, tergantung pada siapa anggota tersebut.
                    </h1>
                    <div class="flex flex-wrap justify-center p-6">
                        <img
                            src="https://i.pinimg.com/564x/6a/2d/cb/6a2dcbfaf2f86c113e20db0739ce0892.jpg"
                            class="p-3 bg-gray-300 border rounded-lg max-w-sm"
                            alt="..."
                        />
                    </div>
                    <h1 class="text-white pt-0 pb-10 px-10"><span class="font-bold text-lg">Cincin: </span>
                        <ul>
                            <li>✧ Jempol kanan: "nol" (零, rei); dikenakan oleh Pain. Warnanya keunguabu-abuan.</li>
                            <li>✧ Jari telunjuk kanan: "biru", "hijau" (青, ao, shō); dikenakan oleh Deidara. Warnanya adalah ungu.</li>
                            <li>✧ Jari tengah kanan: "putih" (白, bya); dikenakan oleh Konan. Warnanya putih.</li>
                            <li>✧ Jari manis kanan: "merah terang", "merah" (朱, shu); dikenakan oleh Itachi Uchiha. Warnanya merah.</li>
                            <li>✧ Jari kelingking kanan: "tanda babi hutan" (亥, gai); dikenakan oleh Zetsu. Warnanya hijau.</li>
                            <li>✧ Jari kelingking kiri: "langit", "kekosongan" (空, ku); dikenakan oleh Orochimaru. Warnanya adalah biru sabak.</li>
                            <li>✧ Jari manis kiri: "selatan" (南, nan); dikenakan oleh Kisame Hoshigaki. Warnanya kuning.</li>
                            <li>✧ Jari tengah kiri: "utara" (北, hoku); dikenakan oleh Kakuzu. Warnanya hijau tua.</li>
                            <li>✧ Jari telunjuk kiri: "tiga" (三, san); dikenakan oleh Hidan. Warnanya oranye.</li>
                            <li>✧ Jempol kiri: "permata", "bola", juga raja hitam di shogi (玉, gyoku); dikenakan oleh Sasori dan kemudian oleh Tobi. Warnanya ungu.</li>
                        </ul>
                    </h1>
                </div>
                <div class="p-6">
                    <div class="flex flex-wrap justify-center p-6">
                        <img
                            src="https://i.pinimg.com/564x/36/35/a6/3635a63370af4da4a52cc282a3f22756.jpg"
                            class="p-3 bg-gray-300 border rounded-lg max-w-sm"
                            alt="..."
                        />
                    </div>
                    <h1 class="text-2xl font-bold text-white px-4">✧ Saingan</h1>
                    <h1 class="text-white py-10 px-10"><span class="font-bold text-lg">Saingan Saat ini: </span>
                        Berbeda dengan sebelum Perang Dunia Shinobi 4. Saat ini, Akatsuki harus menghadapi musuh yang cukup tangguh, para Ultra. Mereka berasal dari Planet Ultra, dengan tujuan untuk mengalahkan Akatsuki. Ayah Ultra, selaku pemimpin para Ultra, memerintahkan para Ultra untuk bersiap-siap melawan Akatsuki. Namun entah apa tujuan mereka yang sebnarnya. Entah itu akan menjadi perebutan kekuasaan, ataupun memperbesar pengaruh. Mungkin saat ini Akatsuki akan sedikit kewalahan melawan musuh antar dimensi tersebut. Tapi kita harus percaya bahwa Akatsuki tidak akan tenggelam:)</h1>

                </div>

            </div>
            <Footer />
        </>
    )
}