export * from "./projects"
export * from "./friends"
export * from "./changelog"
export * from "./education"
export * from "./career"
export * from "./activity"


// personal info
export const name = "Reese"
export const headline = "Software engineer, Full-Stack web developer, and indie hacker."
export const introduction = "I'm Reese, a software engineer based in Shenzhen, China. I like coding, and building interesting things"
export const email = "reese_duan@outlook.com"
export const githubUsername = "imReese"

// about page
export const aboutMeHeadline = "I'm Reese, a software engineer based in Shenzhen, China."
export const aboutParagraphs = [
  "I love coding. I learned programming in college and wrote my first program in Java when I was 18.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, and music.",
  "I'm working as a software develop engineer in Shenzhen, China now. And I'm building interesting side projects in my spare time."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/imReese'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://github.com/imReese/reese-personal-website'
  }
]

// https://simpleicons.org/
export const techIcons = [
  "C",
  "cplusplus",
  "python",
  "go",
  "shell",
  "typescript",
  "swift",
  "mysql",
  "nginx",
  "redis",
  "memcached",
  "react",
  "nodedotjs",
  "nextdotjs",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "pycharm",
  "xcode",
  "ios",
  "wechat",
  "mcdonalds"
];


