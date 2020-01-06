//import { Home, Brush, Work, Web, ContactMail } from "@material-ui/icons";
//import { SvgIconProps, Icon } from "@material-ui/core";

//interface T_TabItems {
//    name: string,
//    iconName: menuIconName,
//    link: string,
//    //icon: JSX.Element
//}

//export enum menuIconName {
//    CONTACT,
//    PROJECTS,
//    EXPERIENCE,
//    SKILLS,
//    HOME
//}


//export const tabItems: T_TabItems[] = [
//    {
//        name: "home",
//        iconName: menuIconName.HOME,
//        link: "/",
//        //icon: <Home/>
//    },
//    {
//        name: "skills",
//        iconName: menuIconName.SKILLS,
//        link: "/skills",
//        //icon: Brush
//    },
//    {
//        name: "experience",
//        iconName: menuIconName.EXPERIENCE,
//        link: "/experience",
//        //icon: Work
//    },
//    {
//        name: "projects",
//        iconName: menuIconName.PROJECTS,
//        link: "/projects",
//        //icon: Web
//    },
//    {
//        name: "contact",
//        iconName: menuIconName.CONTACT,
//        link: "/contact",
//        //icon: ContactMail
//    }
//];

//interface T_SkillItem {
//    name: string,
//    progress: number
//}

//enum SkillType {
//    PRIMARY,
//    SECONDARY
//}

//interface T_Skills {
//    category: string,
//    type: SkillType
//    skillItems: T_SkillItem[]
//}

//export const skills: T_Skills[] = [
//    {
//        category: "Languages",
//        type: SkillType.PRIMARY,
//        skillItems: [
//            {
//                name: "Javascript",
//                progress: 8
//            },
//            {
//                name: "Typescript",
//                progress: 8
//            },
//            {
//                name: "HTML",
//                progress: 9
//            },
//            {
//                name: "CSS & SCSS",
//                progress: 8
//            }
//        ]
//    },
//    {
//        category: "Frameworks",
//        type: SkillType.PRIMARY,
//        skillItems: [
//            {
//                name: "React",
//                progress: 8
//            },
//            {
//                name: "Node/Express",
//                progress: 7
//            },
//            {
//                name: "Ember",
//                progress: 8
//            },
//            {
//                name: ".NET",
//                progress: 5
//            },
//        ]
//    },
//    {
//        category: "Test Framework",
//        type: SkillType.PRIMARY,
//        skillItems: [
//            {
//                name: "Jest",
//                progress: 8
//            },
//            {
//                name: "Mocha",
//                progress: 7
//            }
//        ]
//    },
//    {
//        category: "Cloud Services",
//        type: SkillType.PRIMARY,
//        skillItems: [
//            {
//                name: "Azure",
//                progress: 6.5
//            }
//        ]
//    },
//    {
//        category: "CI/CD",
//        type: SkillType.SECONDARY,
//        skillItems: [
//            {
//                name: "Jenkins",
//                progress: 6
//            },
//            {
//                name: "Azure Dev Ops",
//                progress: 6.5
//            }
//        ]
//    },
//    {
//        category: "Version Control",
//        type: SkillType.SECONDARY,
//        skillItems: [{
//            name: "Git",
//            progress: 8
//        }]
//    },
//    {
//        category: "Other Tools",
//        type: SkillType.SECONDARY,
//        skillItems: [{
//            name: "ES Lint",
//            progress: 8
//        },
//        {
//            name: "Prettier",
//            progress: 8
//        }, {
//            name: "Webpack",
//            progress: 7
//        }, {
//            name: "React - intl",
//            progress: 7
//        }
//        ]

//    }
//];



export interface T_MainSkill {
    name: string,
    progress: number
}

export const mainSkill: T_MainSkill[] = [
    {
        name: "frontend",
        progress: 8.5
    },
    {
        name: "testing",
        progress: 7
    },
    {
        name: "backend",
        progress: 6
    },
    {
        name: "design",
        progress: 4
    }

]


export const allSkills = {
    skillSet1: [{
        name: "Javascript",
        progress: 8
        },
        {
            name: "Typescript",
            progress: 8
        },
        {
            name: "HTML",
            progress: 9
        },
        {
            name: "CSS & SCSS",
            progress: 8
        },
        {
            name: "React",
            progress: 8
        }],
    skillSet2: [{
        name: "Node/Express",
        progress: 7
        },
        {
            name: ".NET",
            progress: 5
        },
        {
            name: "Jest",
            progress: 8
        },
        {
            name: "Mocha",
            progress: 7
        },
        {
            name: "Azure Cloud",
            progress: 6.5
        }]
}
    
export const toolsList1 = [
    {
        name: "ES Lint",
        progress: 8
    },
    {
        name: "Prettier",
        progress: 8
    },
    {
        name: "Webpack",
        progress: 7
    },
    {
        name: "React - intl",
        progress: 7
    }
]

export const toolsList2 = [
    {
        name: "Git",
        progress: 8
    },
    {
        name: "Jenkins",
        progress: 6
    },
    {
        name: "Azure Dev Ops",
        progress: 6.5
    }
]

interface T_ContentStyle {
    background: string,
    color?: string
}

export interface T_WorkExperience {
    
    contentStyle: T_ContentStyle,
    date: string,
    iconStyle: T_ContentStyle,
    type: 'Education'| 'Work' | 'Current'
    h3Content?: string,
    h4Content?: string,
    pContent?: string,
    hasLink?: boolean,
    linkeText?: string,
    link?: string
}


export const workExperience: T_WorkExperience[] = [
    {
        contentStyle: { background: '#fff' },
        date: 'June 2014',
        iconStyle: { background: '#17E9E0', color: '#fff' },
        type: "Education",
        h3Content: 'Education',
        h4Content: 'Bangalore, India',
        pContent: 'Graduated from B.M.S College of Engineering with Bachelor of Engineering in Information Science'
    },
    {
        contentStyle: { background: '#fff' },
        //contentArrowStyle: { borderRight: '7px solid  #fff' },
        date: 'July 2014 - May 2017',
        type: "Work",
        iconStyle: { background: '#FCCD04', color: '#fff' },
        h3Content: 'Software Engineer',
        h4Content: 'Tektronix',
        pContent: 'Front End Developer, for the product',
        hasLink: true,
        linkeText: 'Waveform Form Monitor - Prism',
        link: 'https://www.telestream.net/video/prism.htm'
    },
    {
        contentStyle: { background: '#fff' },
        //contentArrowStyle: { borderRight: '7px solid  #fff' },
        date: 'May 2017 - October 2017',
        type: "Work",
        iconStyle: { background: '#FCCD04', color: '#fff' },
        h3Content: 'Full Stack Developer',
        h4Content: 'Cisco',
        pContent: 'Full Stack developer for the produce Cisco Spark Care',
        hasLink: true
    },
    {
        contentStyle: { background: '#fff' },
        //contentArrowStyle: { borderRight: '7px solid  #fff' },
        date: 'March 2018',
        type: "Work",
        iconStyle: { background: '#FCCD04', color: '#fff' },
        h3Content: 'Full Stack Developer',
        h4Content: 'Bright River',
        pContent: 'Full Stack developer working on products which provides web-based solution to streamline workflow at ',
        hasLink: true,
        link: 'https://www.bright-river.com/',
        linkeText: 'Bright River'
    },
    {
        contentStyle: { background: '#fff' },
        date: 'Current',
        type: "Current",
        iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' }

    },

];

export interface T_Projects {
    name: string,
    labels: string[],
    description: string,
    link: string
}

export const projectsList: T_Projects[] = [{
        name: 'React Spotify',
        labels: ['react', 'redux', 'nodejs'],
        description: 'An SPA to browse recommendations based on selected tracks from Spotify',
        link: 'https://github.com/AparnaPrasad/react-spotify'
    },
    {
        name: 'Weather App',
        labels: ['nodejs', 'express'],
        description: 'Application takes in a location and displays weather information',
        link: 'https://github.com/AparnaPrasad/WeatherApp'
    },
    {
        name: 'Bikes Network',
        labels: ['react', 'redux', 'hooks', 'enzyme', 'jest'],
        description: 'Uses citybik.es API end point to display list of bike networks. Displays list of all the netwoks grouped by country.',
        link: 'https://github.com/AparnaPrasad/bike-networks'
    },
    {
        name: 'Twitter post',
        labels: ['react', 'redux'],
        description: 'Uses citybikes API end point to display list of bike networks. Displays list of all the netwoks grouped by country.',
        link: 'https://github.com/AparnaPrasad/twitter-posts'
    },
    {
        name: 'Notes App',
        labels: ['nodejs', 'express'],
        description: 'A node application to add, delete, modify, get notes.',
        link: 'https://github.com/AparnaPrasad/notes-app'
    },
    {
        name: 'Bookshelf',
        labels: ['react', 'react-router'],
        description: 'My Reads is a book tracking app, that allows you to select and categorize books you have read, are currently reading, or want to read.',
        link: 'https://github.com/AparnaPrasad/Bookshelf-starter-proj'
    },

] 

export const graphColors = ['#17E9E0', '#FCCD04', '#FFB48F', '#A0DEAD']