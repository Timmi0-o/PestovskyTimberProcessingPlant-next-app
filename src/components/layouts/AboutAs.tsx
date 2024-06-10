import { Section } from '../ui/Section'

export const AboutAs = () => {
	return (
		<Section title='О КОМПАНИИ'>
			<div className='flex flex-col gap-[35px]'>
				{aboutInfo.map((info, i) => (
					<div key={i} className='flex flex-col items-center text-center'>
						<div className='flex justify-center items-center w-[80px] h-[70px] mb-[15px] bg-[#000000a7] rounded-[5px] border-[1px] border-[#B6FFBA] text-[#21A038] text-[24px] font-bold'>
							{info.title}
						</div>
						<p className='font-normal text-white leading-[20px]'>
							{info.description}
						</p>
					</div>
				))}
			</div>
		</Section>
	)
}

const aboutInfo = [
	{
		title: '2',
		description: (
			<>
				Города присутствия: <br />
				Санкт-Петербург и Москва
			</>
		),
	},
	{
		title: '>30',
		description: 'Лет среди лидеров рынка',
	},
	{
		title: '100',
		description: 'Домов и бань сдаём ежегодно',
	},
]
