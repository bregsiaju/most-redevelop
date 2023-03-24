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
					url: '/belajar-investasi'
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
	]
})
