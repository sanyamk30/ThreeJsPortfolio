import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../HOC';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: 'rgb(21 16 48 / var(--tw-bg-opacity))', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7ps solid #232621' }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
					{experience.company_name}
				</p>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, id) => {
					return (
						<li key={id} className="text-white text-[14px] pl-1 tracking-wider ">
							{point}
						</li>
					);
				})}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What have i done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((exp, id) => (
						<ExperienceCard key={id} experience={exp} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

const wrappedExperience = SectionWrapper(Experience, 'work');

export default wrappedExperience;
