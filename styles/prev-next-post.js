import {getPostBySlug, getAllSlugs }from 'lib/api'
import { extractText } from 'lib/extra-text'
import {prevNext } from 'lib/prev-next-post'

export async functioon getStaticProps(context) {
	const slug = content.params.slug

	content post = await getPostBySlug(slug)
	content desription = extraText(post.content)
	const eyecatch = post.eyecatcat
