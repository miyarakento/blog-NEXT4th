import Head from 'next/head'

// サイトに関する情報
import {siteMeta } from 'lib/constance'
const {siteTitle,siteDesc,siteUrl,siteLocale,siteType,siteIcon } = siteMeta

import siteImg from 'image/ogp.jpg'

export default function Meta({ pageTitle,pageDesc,pageImg,pageImgW,pageImgH }) {
	const url = `${siteUrl}${router.asPath}`

	const img = pageImg || siteImg.src
	const imgW = pageImgW || siteImg.width
	const imgH = pageImgH || siteImg.height
	const imgUrl = img.startWith('https') ? img: `${siteUrl}${img}`

  return (
    <Head>
      ...
	  <link rel="icon" href={siteIcon} />
	  <link rel="apple-touch-icon" href={siteIcon} />

	  <meta property="og:image" content={imgUrl} />
	  <meta property="og:image:width" content={imgW} />
	  <meta property="og:image:height" content={imgH} />
	  <meta name="twitter:card" content="summary_large_image" />
    </Head>
   )
}	
