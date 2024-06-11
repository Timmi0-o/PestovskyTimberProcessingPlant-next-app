'use client'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
	EffectCoverflow,
	Navigation,
	Pagination,
	Scrollbar,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section } from '../ui/Section'

export const ProductsCompany = () => {
	const [isCheck, setIsCheck] = useState<number>(0)
	return (
		<>
			<Section title='продукты компании'>
				<div>
					<div className='flex gap-[5px]'>
						{variables.map((variable, i) => (
							<div
								onClick={() => setIsCheck(i)}
								key={i}
								className={`w-[100px] h-[30px] border-[2px] text-center ${
									isCheck === i ? 'bg-[#999999]' : 'text-[#999999]'
								}  border-[#999999] rounded-[5px]`}
							>
								<p>{variable}</p>
							</div>
						))}
					</div>
				</div>
			</Section>
			<div className='w-full bg-[#212121]'>
				<Swiper
					effect={'coverflow'}
					navigation={true}
					modules={[Navigation, Scrollbar, Pagination, EffectCoverflow]}
					centeredSlides
					slidesPerView={1.9}
					spaceBetween={10}
					pagination={true}
				>
					{build.map((build) => (
						<div key={build}>
							<SwiperSlide>
								<div className='w-[165] h-[182px] border-[3px] border-[#999999] bg-[#D9D9D9] rounded-[10px]'></div>
							</SwiperSlide>
						</div>
					))}
				</Swiper>
			</div>
		</>
	)
}

const variables = ['Бани', 'Дома']
const build = [1, 2, 3, 4, 5, 6, 7]
