'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export const Divisions = () => {
	const [isMore, setIsMore] = useState<number | null>(null)

	const [isDivision, setIsDivision] = useState<number>(0)
	return (
		<Section titlePosition='text-left' title='Выбери подразделение:'>
			<div className='flex flex-wrap gap-[10px]'>
				{divisions.map((division, i) => (
					<div
						onClick={() => setIsDivision(i)}
						className={`flex items-center ${
							isDivision === i ? 'bg-[#999999] text-[#212121]' : 'text-[#fff]'
						} rounded-[5px]  border-[3px]  border-[#999999] h-[30px] `}
						key={i}
					>
						<p className='text-[12px] px-[12px] font-bold'>{division}</p>
					</div>
				))}
			</div>
			<div className='flex flex-col gap-[15px]'>
				{professions.map((profession, i) => (
					<div
						className='flex flex-col items-center justify-between w-full border-[3px] border-[#999999] p-[30px] rounded-[30px] text-white font-bold text-[18px] gap-[10px] leading-[22px]'
						onClick={() => setIsMore(isMore === i ? null : i)}
						key={i}
					>
						<div className='flex items-center justify-between'>
							<div className='flex flex-col gap-[20px]'>
								<div className='flex items-center gap-[10px]'>
									<div className='relative size-[25px]'>
										<Image src={'/person.svg'} fill alt='person' />
									</div>
									<p className='w-[190px]'>{profession.title}</p>
								</div>
								<div className='flex items-center gap-[10px]'>
									<div className='relative size-[25px]'>
										<Image src={'/price.svg'} fill alt='person' />
									</div>
									<p className='text-[#21A038] w-[190px]'>
										{`от ${profession.many} РУБ`}
									</p>
								</div>
							</div>
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
								isMore === i ? 'opacity-100 h-[330px]' : 'h-0 opacity-0 z-[-1]'
							}`}
						>
							{profession.description}
						</div>
					</div>
				))}
			</div>
			<div className='text-white w-[260px]'>
				<Button title='ОТКЛИКНУТЬСЯ НА ВАКАНСИЮ' />
			</div>
		</Section>
	)
}

const divisions = [
	'СТРОИТЕЛЬНЫЙ ОТДЕЛ',
	'ОФИС',
	'ФИНАНСОВЫЙ ОТДЕЛ',
	'ОТДЕЛ ПРОДАЖ',
	'ВНЕШТАТНЫЙ СОТРУДНИК',
]

const professions = [
	{
		title: 'Прораб',
		description: (
			<div className='text-[12px] text-white'>
				<p>Задачи: </p>
				<li>описание</li>
				<li>описание</li>
				<li>описание</li>
				<p>Наши ожидания: </p>
				<li>описание</li>
				<li>описание</li>
				<p>Мы предлагаем: </p>
				<li>график 5/2 с гибким началом рабочего дня;</li>
				<li>
					оформление по ТК РФ с первого рабочего дня, полностью белую заработную
					плату;
				</li>
				<li>ежеквартальную премию по итогам работы;</li>
			</div>
		),
		many: '00 000',
	},
	{
		title: 'Специалист службы снабжения',
		description: (
			<div className='text-[12px] text-white'>
				<p>Задачи: </p>
				<li>описание</li>
				<li>описание</li>
				<li>описание</li>
				<p>Наши ожидания: </p>
				<li>описание</li>
				<li>описание</li>
				<p>Мы предлагаем: </p>
				<li>график 5/2 с гибким началом рабочего дня;</li>
				<li>
					оформление по ТК РФ с первого рабочего дня, полностью белую заработную
					плату;
				</li>
				<li>ежеквартальную премию по итогам работы;</li>
			</div>
		),
		many: '00 000',
	},
	{
		title: 'Логист',
		description: (
			<div className='text-[12px] text-white'>
				<p>Задачи: </p>
				<li>описание</li>
				<li>описание</li>
				<li>описание</li>
				<p>Наши ожидания: </p>
				<li>описание</li>
				<li>описание</li>
				<p>Мы предлагаем: </p>
				<li>график 5/2 с гибким началом рабочего дня;</li>
				<li>
					оформление по ТК РФ с первого рабочего дня, полностью белую заработную
					плату;
				</li>
				<li>ежеквартальную премию по итогам работы;</li>
			</div>
		),
		many: '00 000',
	},
	{
		title: 'Проектировщик',
		description: (
			<div className='text-[12px] text-white'>
				<p>Задачи: </p>
				<li>описание</li>
				<li>описание</li>
				<li>описание</li>
				<p>Наши ожидания: </p>
				<li>описание</li>
				<li>описание</li>
				<p>Мы предлагаем: </p>
				<li>график 5/2 с гибким началом рабочего дня;</li>
				<li>
					оформление по ТК РФ с первого рабочего дня, полностью белую заработную
					плату;
				</li>
				<li>ежеквартальную премию по итогам работы;</li>
			</div>
		),
		many: '00 000',
	},
]
