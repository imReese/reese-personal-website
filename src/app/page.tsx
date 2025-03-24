import { Container } from "@/components/layout/Container"
import Newsletter from "@/components/home/Newsletter"
import Feed from "@/components/home/Feed"
import Career from "@/components/home/Career"
import Education from "@/components/home/Education"
import SocialLinks from "@/components/home/SocialLinks"
import { headline, introduction } from "@/config/infoConfig"
import { BlogCard } from "@/components/home/BlogCard"
import { getAllBlogs, type BlogType } from "@/lib/blogs"
import { ProjectCard } from "@/components/project/ProjectCard"
import { GithubProjectCard } from "@/components/project/GithubProjectCard"
import { projectHeadLine, projectIntro, projects, githubProjects, blogHeadLine, blogIntro, techIcons, activityHeadLine, activityIntro } from "@/config/infoConfig"
import GithubContributions from "@/components/home/GithubCalendar"
import GitHubSnake from "@/components/home/GitHubSnake"
import { CustomIcon } from "@/components/shared/CustomIcon"
import IconCloud from "@/components/ui/icon-cloud"
import { TweetGrid } from "@/components/home/TweetGrid"

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 4)
  // console.log('blogList: ', blogList)

  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className='md:mt-20'>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headline}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {introduction}
            </p>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          {/* <GithubContributions /> */}
          <GitHubSnake />
        </div>
      </Container>
    </>
  )
}
