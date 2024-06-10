import { AboutAs } from '@/components/layouts/AboutAs'
import { Advantages } from '@/components/layouts/Advantages'
import { Banner } from '@/components/layouts/Banner'
import { CareerProgress } from '@/components/layouts/CareerProgress'
import { Divisions } from '@/components/layouts/Divisions'
import { ProductsCompany } from '@/components/layouts/ProductsCompany'

export default function Home() {
	return (
		<div>
			<Banner />
			<AboutAs />
			<Divisions />
			<Advantages />
			<ProductsCompany />
			<CareerProgress />
		</div>
	)
}
