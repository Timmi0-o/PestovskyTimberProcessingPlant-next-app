import { AboutAs } from '@/components/layouts/AboutAs'
import { Advantages } from '@/components/layouts/Advantages'
import { Banner } from '@/components/layouts/Banner'
import { Campaigning } from '@/components/layouts/Campaigning'
import { CareerProgress } from '@/components/layouts/CareerProgress'
import { Contacts } from '@/components/layouts/Contacts'
import { Divisions } from '@/components/layouts/Divisions'
import { ProductsCompany } from '@/components/layouts/ProductsCompany'

export default function Home() {
	return (
		<>
			<Banner />
			<AboutAs />
			<Divisions />
			<Advantages />
			<ProductsCompany />
			<CareerProgress />
			<Campaigning />
			<Contacts />
		</>
	)
}
