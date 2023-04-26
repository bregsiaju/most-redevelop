<template>
	<main class="site-main">
		<div
			v-if="$route.params.static === 'disclaimer'"
			class="container"
			v-html="disclaimer"
		></div>
		<div v-else class="container" v-html="privacyPolicy"></div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			disclaimer: `
				<h1 class="title">Disclaimer</h1>
				<div class="note">
					<p>Situs web ini dimiliki oleh PT Mandiri Sekuritas. Situs web ini dioperasikan atas nama PT Mandiri Sekuritas berikut badan-badan korporasi dan afiliasi-afiliasinya (bersama-sama, “kami” atau “kita”).</p>
				</div>
				<p>Informasi berikut ini tidak boleh diperbanyak atau didistribusikan kepada pihak lain dengan cara apapun tanpa izin tertulis dari PT. Mandiri Sekuritas. PT. Mandiri Sekuritas melarang redistribusi dari informasi ini, baik secara elektronik ataupun melalui cara-cara lain, dan tidak bertanggung jawab atas tindakan pihak ketiga berkaitan dengan hal-hal tersebut. Walaupun informasi ini dihasilkan dari materi dan sumber-sumber yang terpercaya dan dapat menggambarkan opini PT. Mandiri Sekuritas, namun PT. Mandiri Sekuritas tidak menjamin akurasi dan isi informasi tersebut.</p>
			`,
			privacyPolicy: `
				<h1 class="title">Kebijakan Privasi</h1>
				<p>PT Mandiri Sekuritas (<strong>&ldquo;Mandiri&rdquo;</strong>) senantiasa berupaya menjaga privasi maupun keamanan data pribadi nasabah maupun calon nasabahnya sedemikian rupa sehingga memenuhi ketentuan perundang-undangan yang berlaku.</p>
				<p>Halaman ini menjelaskan kepada Anda terkait kebijakan kami dalam hal pengumpulan, penggunaan, dan pengungkapan data pribadi saat Anda menggunakan dan atau mengakses Sistem Elektronik* kami termasuk atas data terkait yang berhubungan dengan pilihan Anda di dalamnya.</p>
				<p>Kami menggunakan data Anda dalam rangka untuk meningkatkan kehandalan dan memperbaiki kualitas <strong>Sistem Elektronik</strong> kami. Dengan menggunakan dan mengakses Sistem Elektronik kami berarti Anda telah menyetujui pengumpulan dan penggunaan data/informasi sesuai dengan Kebijakan Privasi ini.</p>
				<h1><span style="font-size:16px">A. PENGUMPULAN DAN PENGGUNAAN INFORMASI</span></h1>
				<p>Kami mengumpulkan beberapa jenis jenis informasi sesuai dengan kebutuhan kami guna peningkatan pelayanan kami kepada Anda, antara lain :</p>
				<h2><span style="font-size:16px">1. Data Pribadi</span></h2>
				<p>Saat Anda menggunakan Sistem Elektronik kami, mungkin Anda juga diminta untuk memberikan kepada kami informasi pribadi tertentu yang dapat digunakan untuk menghubungi atau mengidentifikasi Anda termasuk tetapi tidak terbatas pada nama, tanggal lahir, KTP, NPWP, paspor atau nomor atau keterangan identifikasi lain, alamat, alamat email, nomor telepon, rincian kontak dan informasi keuangan, deskripsi dan foto pribadi, informasi portofolio produk dan layanan, profil resiko, latar belakang keuangan, latar belakang pendidikan dan data kependudukan.</p>
				<h2><span style="font-size:16px">2. Data Penggunaan</span></h2>
				<p>Ketika Anda mengakses Sistem Elektronik kami, baik melalui perangkat seluler maupun perangkat lainnya, maka kami dapat mengumpulkan informasi tertentu secara otomatis, termasuk, tetapi tidak terbatas pada, jenis perangkat yang Anda gunakan, ID unik perangkat yang digunakan, alamat Internet Protocol, jenis sistem operasi, jenis penelusuran yang Anda gunakan, pengidentifikasi perangkat unik, dan data diagnostik lainnya.</p>
				<p>Setiap informasi dan data tersebut diatas dihasilkan dan/atau diberikan kepada kami selama Anda mengakses Sistem Elektronik dan melakukan aktivitas didalamnya. Contohnya, username terdaftar Anda, hasil pencarian dan sejarah untuk produk dan layanan yang tersedia, catatan transaksi, maupun jawaban Anda atas pertanyaan-pertanyaan yang ditujukan untuk verifikasi.</p>
				<h2><span style="font-size:16px">3. Pelacakan &amp; Data Cookie</span></h2>
				<p>Kami menggunakan Cookie dan teknologi pelacakan serupa untuk melacak aktivitas di Sistem Elektronik kami dan menyimpan informasi tertentu. Dengan Cookie maka kami dapat mengidentifikasi Anda, akun atau perangkat Anda melalui Sistem Elektronik kami (contohnya www.mandirisekuritas.co.id , www.most.co.id , termasuk semua domain dan sub-domain yang terkait daripadanya)</p>
				<p>Cookie dikirim ke browser Anda dari situs web dan disimpan di perangkat Anda. Teknologi pelacakan seperti beacons, tag dan scripts, kami gunakan untuk mengumpulkan dan melacak informasi dan untuk meningkatkan kehandalan serta menganalisis pelayanan kami.</p>
				<p>Anda dapat menginstruksikan browser Anda untuk menolak semua Cookie atau untuk menunjukkan kapan Cookie dapat dikirim. Namun, jika Anda tidak mengaksep/menyetujui Cookie, Anda mungkin tidak dapat menggunakan sebagian atau seluruh layanan dalam Sistem Elektronik kami.</p>
				<p>Apabila Anda memilih untuk menggunakan Sistem Elektronik tanpa memblokir atau menonaktifkan Cookie, artinya Anda setuju terhadap penggunaan Cookie ini dan juga penggunaan oleh kami terhadap informasi/data Anda yang kami kumpulkan melalui Cookie. Untuk memberikan pemahaman sederhana kepada Anda mengenai Cookie, dibawah ini kami informasikan jenis-jenisnya antara lain :</p>
				<ul>
					<li><strong>Session Cookies</strong><br/>Kami menggunakan Cookie ini untuk mengoperasikan Sistem Elektronik kami.</li>
					<li><strong>Preference Cookies</strong><br/>Kami menggunakan Cookie ini untuk mengingat preferensi Anda dan berbagai pengaturan</li>
					<li><strong>Security Cookies</strong><br/>Kami menggunakan Cookie ini untuk tujuan keamanan<br/>Untuk informasi lebih lanjut tentang Cookie, silahkan lihat di www.aboutCookies.org, atau www.allaboutCookies.org</li>
				</ul>
				<p>Selain Cookie kami sendiri, kami juga bekerja sama dengan perusahaan-perusahaan lain dalam menempatkan Cookie pada Situs kami untuk mengumpulkan informasi bagi kami. Perusahaan-perusahaan tersebut tidak dapat menggunakan Cookie ini untuk kepentingan internal mereka atau membagikan informasi yang dikumpulkan kepada siapapun selain Mandiri, sesuai dengan ketentuan kontrak/perjanjian dengan kami.</p>
				<h2><span style="font-size:16px">B. PENGGUNAAN DATA</span></h2>
				<p>Mandiri menggunakan data yang telah dikumpulkan untuk berbagai macam kebutuhan, yaitu untuk:</p>
				<ul>
					<li>Menyelenggarakan dan memelihara Sistem Elektronik</li>
					<li>Memberitahukan Anda tentang perubahan didalam pelayanan kami</li>
					<li>Memungkinkan Anda untuk berpartisipasi dalam fitur interaktif produk/jasa kami ketika Anda memilih untuk melakukannya</li>
					<li>Memberikan pelayanan dan dukungan pelanggan</li>
					<li>Memberikan analisis atau informasi berharga sehingga kami dapat meningkatkan Sistem Elektronik kami</li>
					<li>Memantau penggunaan Sistem Elektronik</li>
					<li>Mendeteksi, mencegah dan mengatasi masalah teknis</li>
				</ul>
				<h2><span style="font-size:16px">C. TRANSFER DATA</span></h2>
				<p>Informasi Anda, termasuk data pribadi, dapat dikirimkan maupun disimpan di media pihak ketiga yang mungkin berlokasi diwilayah diluar Indonesia. Apabila Anda berada di luar Indonesia dan memilih untuk memberikan informasi kepada kami, harap diperhatikan jika kami dapat mentransfer informasi, termasuk data pribadi, ke wilayah dan memprosesnya di Indonesia.</p>
				<p>Persetujuan Anda terhadap Kebijakan Privasi ini, kami pahami sebagai persetujuan Anda terhadap pengiriman informasi atau transfer data tersebut.</p>
				<p>Mandiri akan mengambil semua langkah yang sewajarnya diperlukan untuk memastikan informasi/data Anda diperlakukan dengan aman dan sesuai dengan Kebijakan Privasi ini.</p>
				<h2><span style="font-size:16px">D. PENGUNGKAPAN DATA</span></h2>
				<p>Mandiri dapat mengungkapkan informasi/data Anda dengan itikad baik, semata-mata tindakan tersebut diperlukan hanya dan untuk:</p>
				<ul>
					<li>Menjalankan dan mematuhi kewajiban hukum</li>
					<li>Melindungi dan mempertahankan hak atau kepemilikan Mandiri</li>
					<li>Mencegah atau menyelidiki kesalahan yang mungkin terjadi berkaitan dengan Sistem Elektronik</li>
					<li>Melindungi keamanan pribadi pengguna Sistem Elektronik atau publik</li>
					<li>Melindungi pelaksanaan tanggung jawab hukum</li>
				</ul>
				<h2><span style="font-size:16px">E. KEAMANAN DATA</span></h2>
				<p>Keamanan data Anda adalah sangat penting bagi kami, namun harap dipahami apabila tidak ada satupun metode transmisi melalui Internet, atau metode penyimpanan elektronik yang dijamin 100% aman. Oleh karenanya walaupun kami telah berupaya semaksimal mungkin dengan cara-cara yang umumnya dilakukan secara komersial untuk melindungi Data Pribadi Anda, kami tidak dapat menjamin keamanannya secara mutlak.</p>
				<h2><span style="font-size:16px">F. PENYEDIA JASA PIHAK KETIGA</span></h2>
				<p>Kami dapat mempekerjakan pihak ketiga dan individu untuk memfasilitasi Sistem Elektronik kami, menyediakan Sistem Elektronik atas nama kami, melakukan pelayanan terkait Sistem Elektronik atau membantu kami dalam menganalisis bagaimana Sistem Elektronik kami dijalankan. Oleh karenanya pihak ketiga ini dapat memiliki akses ke informasi/data Anda hanya dalam rangka menjalankan dan menyelesaikan pekerjaan untuk dan atas nama kami serta berkewajiban tidak akan mengungkapkan atau menggunakannya untuk tujuan lain apa pun.</p>
				<h2><span style="font-size:16px">G. TAUTAN KE SITUS LAIN</span></h2>
				<p>Sistem Elektronik kami mungkin dapat berisi tautan ke situs lain milik Mandiri Group maupun pihak ketiga yang tidak dioperasionalkan oleh kami. Apabila Anda mengklik tautan pihak ketiga, berarti Anda akan diarahkan ke situs pihak ketiga dimaksud. Dalam hal ini kami sangat menyarankan Anda untuk mempelajari kebijakan privasi setiap situs yang Anda kunjungi. Harap dipahami, kami tidak bertanggung jawab dan memiliki kendali atas konten, kebijakan privasi, atau pengoperasian situs atau sistem elektronik pihak ketiga mana pun.</p>
				<h2><span style="font-size:16px">H. KEBERLAKUAN DAN PERUBAHAN KEBIJAKAN PRIVASI INI</span></h2>
				<p>Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang segala perubahan dengan memposting Kebijakan Privasi yang baru di halaman ini. Anda kami sarankan untuk meninjau dan mempelajari Kebijakan Privasi ini secara berkala untuk setiap perubahan. Adapun perubahan atas sebagian atau keseluruhan Kebijakan Privasi ini akan efektif saat diposting pada halaman ini.</p>
				<h2><span style="font-size:16px">I. LAIN-LAIN</span></h2>
				<p>Mandiri tidak dapat membedakan usia pengguna yang mengakses dan menggunakan Sistem Elektronik-nya. Jika seorang anak di bawah umur (menurut hukum yang berlaku) telah memberikan informasi/data pribadinya kepada Mandiri tanpa persetujuan orang tua atau walinya, orang tua atau walinya itu dapat menghubungi Mandiri untuk menghapus data dimaksud.</p>
				<p><strong class="text-red">Keterangan :</strong></p>
				<p><strong>*Sistem Elektronik </strong>adalah serangkaian perangkat dan prosedur elektronik yang berfungsi mempersiapkan, mengumpulkan, mengolah, menganalisis, menyimpan, menampilkan, mengumumkan, mengirimkan, dan/atau menyebarkan informasi elektronik, contoh : website dan mobile application</p>
			`
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	padding: 30px 0;
}

.container {
	/deep/ .title {
		margin-bottom: 35px;
		line-height: 1;
		color: #3b3b3b;
		font-weight: 600;
	}

	/deep/ .note {
		background-color: rgba(255, 232, 175, 0.4);
		padding: 16px 56px 16px 28px;
		margin-bottom: 33px;

		p {
			margin-bottom: 0px;
		}
	}

	/deep/ h2,
	/deep/ h1 {
		margin-bottom: 4px;
	}

	/deep/ ul {
		list-style: none;

		li {
			&:not(:last-of-type) {
				margin-bottom: 16px;
			}

			&::before {
				font-family: 'bz-icon' !important;
				content: '\f058';
				margin-right: 8px;
				color: $primary;
				background: #fff;
				margin-left: -24px;
			}
		}
	}

	/deep/ * {
		color: #5d5d5d;
	}

	/deep/ .text-red {
		color: $red !important;
	}
}
</style>
