'use client'
import Image from 'next/image'
import 'swiper/css'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Section } from '../ui/Section'

export const CareerProgress = () => {
	return (
		<Section bg='bg-[#111311]' title='Карьерный рост'>
			<div className='flex flex-col w-full text-white gap-[35px]'>
				<p className='leading-[20px]'>
					Наша Компания является ярким примером, где достойные люди смело
					и заслуженно поднимаются по карьерной лестнице. <br /> <br />
					Мы ценим стремление к развитию и предоставляем все необходимые
					для этого условия.
				</p>
				<div className='w-full'>
					<Swiper
						navigation={true}
						modules={[Navigation, Scrollbar]}
						centeredSlides
						slidesPerView={1.2}
						spaceBetween={40}
					>
						{build.map((build) => (
							<div key={build}>
								<SwiperSlide>
									<div className='flex flex-col items-center gap-[15px] h-fit'>
										<div className='relative size-[240px]'>
											<Image src={build.img} fill alt='oleg' />
										</div>
										<div className='leading-[20px] text-center'>
											<p className='font-bold'>{build.author}</p>
											<p className='text-[14px] font-normal'>
												{build.profession}
											</p>
										</div>
										<div>{build.description}</div>
									</div>
								</SwiperSlide>
							</div>
						))}
					</Swiper>
				</div>
			</div>
		</Section>
	)
}

const build = [
	{
		author: 'Олег Воробьёв',
		profession: 'Прораб',
		description: (
			<div className='flex flex-col gap-[15px] text-[12px] text-white list-disc'>
				<li>
					В Компании с 2018 года. Начал с позиции плотника в строительной
					бригаде.
				</li>
				<li>
					В течение года работы Олег стал бригадиром и был приглашён в офис
					Компании на должность штатного Производителя строительных работ.{' '}
				</li>
				<li>
					На данный момент в Его подчинении находятся 9 строительных бригад.
					Олег вносит весомый вклад в итоговый результат Компании,
					а это реализация 100 объектов в год!
				</li>
			</div>
		),
		img: '/oleg.webp',
	},
	{
		author: 'Даниил Басенков',
		profession: 'Менеджер по снабжению',
		description: (
			<div className='flex flex-col gap-[15px] text-[12px] text-white list-disc'>
				<li>
					В декабре 2018 года заступил на должность Менеджера отдела продаж.
				</li>
				<li>
					После 9 месяцев стабильных результатов, зарекомендовав себя
					как надёжный сотрудник, получил ответственную должность Логиста.
				</li>
				<li>
					Через год Даниил занял должность Специалиста службы снабжения, взяв
					на себя помимо закупа материала ещё и крайне важную роль Сметчика.
				</li>
			</div>
		),
		img: '/maksim.webp',
	},
	{
		author: 'Мария Обухова',
		profession: 'Руководитель финансовой службы',
		description: (
			<div className='flex flex-col gap-[15px] text-[12px] text-white list-disc'>
				<li>
					В декабре 2018 года заступил на должность Менеджера отдела продаж.
				</li>
				<li>
					После 9 месяцев стабильных результатов, зарекомендовав себя
					как надёжный сотрудник, получил ответственную должность Логиста.
				</li>
				<li>
					Через год Даниил занял должность Специалиста службы снабжения, взяв
					на себя помимо закупа материала ещё и крайне важную роль Сметчика.
				</li>
			</div>
		),
		img: '/maria.webp',
	},
]
