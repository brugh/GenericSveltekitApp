import { json } from '@sveltejs/kit'

export const prerender = true

const getPosts = () => {
	return [{ title: 'asdf' }, { title: 'qwer' }]
}

export const GET = async () => {
	const posts = await getPosts()
	return json(posts)
}
