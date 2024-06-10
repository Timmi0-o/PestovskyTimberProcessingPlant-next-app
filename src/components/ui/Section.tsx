import { ReactNode } from 'react'

interface SectionProps {
	title?: string
	children: ReactNode
	titlePosition?: string
	weightCustom?: string
	bg?: string
}

export const Section = ({
	title,
	children,
	titlePosition,
	weightCustom,
	bg,
}: SectionProps) => {
	return (
		<div className={`relative w-full ${bg ? bg : 'bg-[#212121]'} `}>
			<div
				className={`mx-auto flex flex-col gap-[35px] items-center ${
					weightCustom ? weightCustom : 'w-[320px]'
				} py-[45px]`}
			>
				{title && (
					<p
						className={`w-full text-[18px] font-bold text-[#999999] ${
							titlePosition ? titlePosition : 'text-center'
						} uppercase`}
					>
						{title}
					</p>
				)}
				{children}
			</div>
		</div>
	)
}
