import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        leftcurvers
      </h1>
      <p className="mb-4">
        {`We're a group of traders, builders, and thinkers who are passionate and curious. We're not financial advisors. We're not really smart. We're leftcurvers.`}
      </p>
      <p>
        {`Disclaimer: This is not financial advice.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
