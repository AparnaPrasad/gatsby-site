import React from 'react';
//import { Typography } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MenuBook from '@material-ui/icons/MenuBook';
import Check from '@material-ui/icons/Check';
import Work from '@material-ui/icons/Work';
import { workExperience, T_WorkExperience } from '../constants';

const experience = () => {
    return <React.Fragment>
        <VerticalTimeline>
            {workExperience.map((experience: T_WorkExperience, index: number) => (
                experience.h3Content ? <VerticalTimelineElement
                    key={index}
                    //className="vertical-timeline-element--work"
                    contentStyle={experience.contentStyle}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date={experience.date}
                    iconStyle={experience.iconStyle}
                    icon={experience.type === 'Education' ? <MenuBook /> : <Work/> }
                >
                    {experience.h3Content && <h3 className="vertical-timeline-element-title">{experience.h3Content}</h3>}
                    {experience.h4Content && <h4 className="vertical-timeline-element-subtitle">{experience.h4Content}</h4>}
                    {experience.pContent && <p>
                        {experience.pContent} {experience.hasLink && <a href={experience.link} target="_blank">{experience.linkeText}</a>}
                    </p>}
                </VerticalTimelineElement> : <VerticalTimelineElement 
                    key={index}
                    date={experience.date}
                    iconStyle={experience.iconStyle}
                    icon={<Check/>}
               />
            ))}
            </VerticalTimeline>
        </React.Fragment>
}

export default experience;