import Image from 'next/image'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export const Campaigning = () => {
	return (
		<Section paddingCustom='pb-[35px]' weightCustom='w-full'>
			<div className='relative w-full h-[567px]'>
				<Image
					className=' object-cover'
					src={'/CampaigningTheme.svg'}
					fill
					alt='CampaigningTheme'
				/>
				<div className='flex flex-col items-center absolute w-full h-[567px] text-white px-[20px] mt-[45px]'>
					<h1 className='text-[18px] font-bold leading-[24px] uppercase'>
						Наши успехи — это заслуга замечательных людей, работающих в нашей
						Команде. <br /> <br /> У Нас всегда есть вакансии для сильных
						кандидатов
					</h1>
					<div className='flex flex-col gap-[20px] justify-center items-center w-[313px] h-[188px] bg-[#000000bb] border-[3px] border-[#36853B] px-[26.5px] rounded-[20px] mt-[140px] accentShadow'>
						<p className='font-bold text-[18px] leading-[22px]'>
							Если чувствуешь в Себе потенциал и здоровые амбиции — ждём рядом
							с Нами!
						</p>
						<Button title='ПРИСОЕДИНИТЬСЯ К КОМАНДЕ' />
					</div>
				</div>
			</div>
		</Section>
	)
}
