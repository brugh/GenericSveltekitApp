import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ cookies, fetch }) => {
  const account = cookies.get('account')
  const data = await fetch('/api')
  const posts = await data.json()
	return { account, posts};
}
