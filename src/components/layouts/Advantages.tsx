'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Section } from '../ui/Section'

export const Advantages = () => {
	const [isMore, setIsMore] = useState<number | null>(null)

	console.log('isMore', isMore)
	return (
		<Section
			bg='bg-[#111311]'
			weightCustom='w-full'
			title='Преимущества Компании'
		>
			<div className='flex flex-col mt-[-15px]'>
				{advantages.map((advantage, i) => (
					<div
						onClick={() => setIsMore(isMore === i ? null : i)}
						className='flex flex-col justify-center w-full h-fit px-[20px] text-white text-[18px] font-bold border-b-[3px] py-[15px] border-b-[#999999] leading-[22px]'
						key={i}
					>
						<div
							className={`flex justify-between duration-300  ${
								isMore === i ? 'pb-[17px]' : 'pb-0'
							}`}
						>
							<p className={`w-[280px]`}>{advantage.title}</p>
							<div
								className={`relative size-[25px] duration-300 ${
									isMore === i ? ' rotate-[135deg]' : 'rotate-0'
								}`}
							>
								<Image src={'/more.svg'} fill alt='more' />
							</div>
						</div>
						<div
							className={`font-normal leading-[22px] duration-300 ${
								isMore === i ? 'opacity-100 h-[130px]' : 'h-0 opacity-0 z-[-1]'
							}`}
						>
							{advantage.description}
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}

const advantages = [
	{
		title: 'Качество продукта',
		description:
			'Мы гордимся результатами своей работы! Мы убеждены, что именно качество — это самое главное, это то, что даёт Нам уверенность в завтрашнем дне.',
	},
	{
		title: 'Популярность бренда в сети',
		description:
			'Мы занимаем высокие позиции в поисковой выдаче и имеем многочисленные отзывы, привлекающие новых заказчиков независимо от времени года.',
	},
	{
		title: 'Передовое рабочее место',
		description:
			'Комфортный офис в центре г. Санкт-Петербург, оборудованный передовыми технологиями. Твой рабочий компьютер может быть даже в твоём смартфоне!',
	},
	{
		title: 'Свои автоматизированные системы обучения',
		description:
			'Создали и постоянно улучшаем собственные автоматизированные системы обучения специалистов и повышения их квалификации внутри компании.',
	},
	{
		title: 'Сотрудничество с ведущими Компаниями рынка',
		description:
			'Сотрудничаем с ведущими Компаниями рынка строительных материалов: «Grand Line», «Петрович», «Окна Петербурга», «КраскиДоски», «Technonicol» и другими.',
	},
]
