<template>
	<footer class="site-footer">
		<div class="footer-top f-14">
			<div class="container flex v-center f-space-between">
				<nav>
					<ul class="list-nostyle flex v-center f-gap-16">
						<li>
							<nuxt-link to="/bantuan">Bantuan</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/tentang-kami">Tentang Kami</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/kebijakan-privasi">Kebijakan Privasi</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/disclaimer">Disclaimer</nuxt-link>
						</li>
					</ul>
				</nav>
				<p class="mb-0">
					PT Mandiri Sekuritas terdaftar dan diawasi oleh Otoritas Jasa Keuangan
					(OJK)
				</p>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<div class="bzg v-center">
					<div class="bzg_c" data-col="m4">
						<p class="mb-0 f-14">Copyright © 2020 PT Mandiri Sekuritas</p>
					</div>
					<div class="bzg_c" data-col="m4">
						<ul class="list-nostyle flex v-centers">
							<li v-for="(item, i) in partner" :key="i">
								<a :href="item.url" target="_blank">
									<img
										:src="`assets/img/partner/${item.image}`"
										:alt="item.name"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div class="bzg_c" data-col="m4">
						<div class="sosmed-icon">
							<a href=""><i class="icon-facebook"></i></a>
							<a href=""><i class="icon-instagram"></i></a>
							<a href=""><i class="icon-twitter"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			partner: [
				{
					name: 'OJK',
					image: 'logo-ojk.png',
					url: 'https://www.ojk.go.id/'
				},
				{
					name: 'IDX',
					image: 'logo-idx.png',
					url: 'https://www.idx.co.id/'
				},
				{
					name: 'KPEI',
					image: 'logo-kpei.png',
					url: 'https://www.idclear.co.id/'
				},
				{
					name: 'KSEI',
					image: 'logo-ksei.jpg',
					url: 'https://www.ksei.co.id'
				},
				{
					name: 'SIPF',
					image: 'logo-sipf.png',
					url: 'http://www.indonesiasipf.co.id/'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.footer-top {
	padding: 24px 0;
	background: linear-gradient(0deg, #f2f2f2, #fff);
	color: #5f5f5f;
}

.footer-bottom {
	color: #bcbbbb;
	.container {
		padding: 16px 0;

		ul {
			height: 100%;
			gap: 26px;

			& > li {
				display: flex;
				align-items: center;
			}
		}

		img {
			max-height: 48px;
		}
	}

	.sosmed-icon {
		display: flex;
		justify-content: flex-end;
		gap: 24px;
	}
}
</style>
