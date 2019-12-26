import { Home, Brush, Work, Web, ContactMail } from "@material-ui/icons";
import { SvgIconProps, Icon } from "@material-ui/core";

interface T_TabItems {
    name: string,
    iconName: menuIconName,
    link: string,
    //icon: JSX.Element
}

export enum menuIconName {
    CONTACT,
    PROJECTS,
    EXPERIENCE,
    SKILLS,
    HOME
}


export const tabItems: T_TabItems[] = [
    {
        name: "home",
        iconName: menuIconName.HOME,
        link: "/",
        //icon: <Home/>
    },
    {
        name: "skills",
        iconName: menuIconName.SKILLS,
        link: "/skills",
        //icon: Brush
    },
    {
        name: "experience",
        iconName: menuIconName.EXPERIENCE,
        link: "/experience",
        //icon: Work
    },
    {
        name: "projects",
        iconName: menuIconName.PROJECTS,
        link: "/projects",
        //icon: Web
    },
    {
        name: "contact",
        iconName: menuIconName.CONTACT,
        link: "/contact",
        //icon: ContactMail
    }
];

interface T_SkillItem {
    name: string,
    progress: number
}

enum SkillType {
    PRIMARY,
    SECONDARY
}

interface T_Skills {
    category: string,
    type: SkillType
    skillItems: T_SkillItem[]
}

export const skills: T_Skills[] = [
    {
        category: "Languages",
        type: SkillType.PRIMARY,
        skillItems: [
            {
                name: "Javascript",
                progress: 8
            },
            {
                name: "Typescript",
                progress: 8
            },
            {
                name: "HTML",
                progress: 5
            },
            {
                name: "CSS & SCSS",
                progress: 5
            }
        ]
    },
    {
        category: "Frameworks",
        type: SkillType.PRIMARY,
        skillItems: [
            {
                name: "React",
                progress: 8
            },
            {
                name: "Node/Express",
                progress: 7
            },
            {
                name: "Ember",
                progress: 8
            },
            {
                name: ".NET",
                progress: 5
            },
        ]
    },
    {
        category: "Test Framework",
        type: SkillType.PRIMARY,
        skillItems: [
            {
                name: "Jest",
                progress: 8
            },
            {
                name: "Mocha",
                progress: 7
            }
        ]
    },
    {
        category: "Cloud Services",
        type: SkillType.PRIMARY,
        skillItems: [
            {
                name: "Azure",
                progress: 6.5
            }
        ]
    },
    {
        category: "CI/CD",
        type: SkillType.SECONDARY,
        skillItems: [
            {
                name: "Jenkins",
                progress: 6
            },
            {
                name: "Azure Dev Ops",
                progress: 6.5
            }
        ]
    },
    {
        category: "Version Control",
        type: SkillType.SECONDARY,
        skillItems: [{
            name: "Git",
            progress: 8
        }]
    },
    {
        category: "Other Tools",
        type: SkillType.SECONDARY,
        skillItems: [{
            name: "ES Lint",
            progress: 8
        },
        {
            name: "Prettier",
            progress: 8
        }, {
            name: "Webpack",
            progress: 7
        }, {
            name: "React - intl",
            progress: 7
        }
        ]

    }
];

