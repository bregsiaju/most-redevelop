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
					url: '/video-edukasi'
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
			url: '/tips-edukasi',
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
	]
})
