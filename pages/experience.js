import Head from 'next/head'
import Link from 'next/link'

export default function Experience() {
	return (
		<div className="container">
			<Head>
				<title>Yahello</title>
			</Head>
			<h1>Experience</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
		</div>
	)
}