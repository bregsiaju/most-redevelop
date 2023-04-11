export const state = () => ({
	menus: [
		{
			id: 1,
			title: 'Produk',
			url: '/saham',
			submenu: [
				{
					title: 'Saham',
					url: '/saham'
				},
				{
					title: 'Reksa Dana',
					url: '/reksa-dana'
				},
				{
					title: 'Syariah',
					url: '/syariah'
				},
				{
					title: 'Obligasi',
					url: '/obligasi'
				},
				{
					title: 'Fasilitas Margin',
					url: '/fasilitas-margin'
				}
			]
		},
		{
			id: 2,
			title: 'Aplikasi',
			url: '/fitur',
			submenu: [
				{
					title: 'Fitur',
					url: '/fitur'
				},
				{
					title: 'Unduh',
					url: '/unduh'
				}
			]
		},
		{
			id: 3,
			title: 'Belajar',
			url: '/belajar',
			submenu: [
				{
					title: 'Belajar Investasi',
					url: '/belajar-investasi/mulai-investasi'
				},
				{
					title: 'Kelas Investasi',
					url: '/kelas-investasi'
				},
				{
					title: 'Video Edukasi',
					url: '/video-edukasi#saham'
				},
				{
					title: 'Tips Investasi',
					url: '/tips-investasi'
				},
				{
					title: 'Istilah Investasi',
					url: '/istilah-investasi'
				}
			]
		},
		{
			id: 4,
			title: 'Riset & Berita',
			url: '/riset-berita',
			submenu: [
				{
					title: 'Riset & Stockpick',
					url: '/riset'
				},
				{
					title: 'Berita',
					url: '/berita'
				}
			]
		}
	],
	materials: [
		{
			id: 1,
			title: 'Training Investasi',
			desc: 'Ikuti webinar, live streaming, dan traning offline dari MOST.',
			url: '/kelas-investasi',
			cardType: 'basic',
			contents: [
				{
					img: 'training-online.png',
					label: 'Training Online',
					info: 'Pelajari investasi langsung dari para ahlinya secara online.'
				},
				{
					img: 'training-offline.png',
					label: 'Training Offline',
					info: 'Jadi nasabah MOST dan daftar untuk mengikuti training offline.'
				}
			]
		},
		{
			id: 2,
			title: 'Video Edukasi',
			desc: 'Tonton video-video edukasi seputar MOST dan produk-produk kami.',
			url: '/video-edukasi',
			cardType: 'video',
			contents: [
				{
					img: 'training-online.png',
					category: 'Tentang Aplikasi',
					title: 'Success Story Komunitas Investor Mandiri Sekuritas'
				},
				{
					img: 'training-offline.png',
					category: 'Tentang Aplikasi',
					title: 'Investasi Dalam Genggaman Bersama MOST'
				},
				{
					img: 'training-offline.png',
					category: 'Reksa Dana',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
				},
				{
					img: 'training-online.png',
					category: 'Saham',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
				}
			]
		},
		{
			id: 3,
			title: 'Tips & Trik Investasi',
			desc: 'Simak artikel-artikel terkait keuangan, investasi, dan promo MOST.',
			url: '/tips-investasi',
			cardType: 'article',
			contents: [
				{
					img: 'training-online.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				},
				{
					img: 'training-online.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				},
				{
					img: 'training-offline.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				}
			]
		}
	],
	listCategory: [
		{
			title: 'Mulai Investasi',
			url: '/mulai-investasi'
		},
		{
			title: 'Akun & Rekening Efek',
			url: '/akun-dan-rekening-efek'
		},
		{
			title: 'Dokumen & Pajak',
			url: '/dokumen-dan-pajak',
			questions: [
				{
					id: 1,
					title: 'Penarikan Dana',
					content: ''
				},
				{
					id: 2,
					title: 'Klaim waris atau efek',
					content: ''
				},
				{
					id: 3,
					title: 'Apakah Nasabah bisa melakukan transaksi margin ?',
					content: `
					<h3>Apakah Nasabah bisa melakukan transaksi margin ?</h3>
					<p>Fasilitas Margin adalah dimana nasabah mendapatkan pinjaman/ pembiayaan untuk penyelesian transaksi. Nasabah bisa melakukan transaksi margin dengan rekening yang terpisah dari rekening sebelumnya yang sudah dimiliki, baik itu rekening Online ataupun rekening Full Service. Nasabah bisa menghubungi Cabang terdekat atau Care Center untuk informasi dan pembukaan rekening margin.</p>
					<h4>Fasilitas ini diberikan dengan ketentuan sebagai berikut :</h4>
					<ol>
						<li>Mengajukan permohonan fasilitas transaksi margin.</li>
						<li>Telah menjadi Nasabah Sekuritas selama 3 bulan, diikuti penilaian dan persetujuan dari pihak Mandiri Sekuritas</li>
						<li>Deposit awal minimal senilai Rp 200.000.000,00</li>
						<li>Efek yang diperdagangkan termasuk marginable share</li>
						<li>Limit trading-nya adalah : (2.81x cash) + (1.81x portfolio)</li>
						<li>Biaya yang dikenakan untuk transaksi baik beli maupun jual mengikuti biaya transaksi rekening reguler</li>
					</ol>
					`
				},
				{
					id: 4,
					title: 'Pemindahan Saham dari sekuritas lain',
					content: ''
				},
				{
					id: 5,
					title: 'Ketentuan umum bank transfer',
					content: ''
				}
			]
		},
		{
			title: 'Saham',
			url: '/saham'
		},
		{
			title: 'Reksa Dana',
			url: '/reksa-dana'
		},
		{
			title: 'Obligasi',
			url: '/obligasi'
		},
		{
			title: 'Syariah',
			url: '/syariah'
		}
	]
})
