import { config } from '$lib'

export const prerender = true

export const GET = async ({ fetch }) => {
	const response = await fetch('/api')
	const posts = await response.json()
	const headers = { 'Content-Type': 'application/xml' }
	const xml = `
  <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${config.title}</title>
    <description>${config.description}</description>
    <link>${config.url}</link>
    <atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
			.map(
				(post: { title: string }) => `
        <item>
          <title>${post.title}</title>
        </item>
      `
			)
			.join('')}
  </channel>
</rss>
  `
	return new Response(xml, { headers })
}
