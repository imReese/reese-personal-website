export * from './projects'
export * from './changelog'
export * from './education'


// personal info
export const name = "Reese"
export const headline = "Software engineer, Full-Stack web developer, and indie hacker."
export const introduction = "I'm Reese, a software engineer based in Beijing, China. I like coding, and building interesting things"
export const email = "reese_duan@outlook.com"
export const githubUsername = "imReese"

// about page
export const aboutMeHeadline = "I'm Reese, a software engineer based in Beijing, China."
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 18.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  "I'm working as a software develop engineer in Beijing, China now. And I'm building a lot of side projects in my spare time."
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
    href: 'https://github.com/imReese/reese-personal-website/tree/main/src/images/wechat.jpg'
  },
  {
    name: 'Email',
    icon: 'mail',
    href: `mailto:${email}`
  }
]

// https://simpleicons.org/
export const techIcons = [
  "c",
  "cplusplus",
  "python",
  "typescript",
  "react",
  "nodedotjs",
  "nextdotjs",
  "mysql",
  "nginx",
  "redis",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];


