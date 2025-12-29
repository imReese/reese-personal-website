import { Container } from "@/components/layout/Container"
import { ElegantIntro } from "@/components/home/ElegantIntro"
import AnimatedCareer from "@/components/home/AnimatedCareer"
import AnimatedEducation from "@/components/home/AnimatedEducation"
import { BlogCard } from "@/components/home/BlogCard"
import { getAllBlogs, type BlogType } from "@/lib/blogs"
import { techIcons } from "@/config/infoConfig"
import GitHubSnake from "@/components/home/GitHubSnake"
import IconCloud from "@/components/ui/icon-cloud"

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* 优雅的个人简介 */}
      <section className="py-16 lg:py-24">
        <Container>
          <ElegantIntro />
        </Container>
      </section>

      {/* GitHub贡献图表 */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Development Activity</h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-2">Recent coding contributions and open-source work</p>
          </div>
          <div className="bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/30 p-6">
            <GitHubSnake />
          </div>
        </Container>
      </section>

      {/* 专业经历和教育背景 */}
      <section className="py-16 bg-gray-50/30 dark:bg-gray-900/10">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Professional Journey</h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-2">My career path and academic background</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatedCareer />
            <AnimatedEducation />
          </div>
        </Container>
      </section>

      {/* 最新博客文章 */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Latest Writings</h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-2">Recent insights, tutorials, and thoughts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogList.map((blog: BlogType) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </Container>
      </section>

      {/* 技术栈展示 */}
      <section className="py-16 bg-gray-50/30 dark:bg-gray-900/10">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technologies & Tools</h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mt-2">Tools and technologies I work with daily</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/30 p-8">
                <IconCloud iconSlugs={techIcons} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 页脚CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Let&apos;s Build Something Amazing</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in working together? I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:reese_duan@outlook.com" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="/projects" 
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
