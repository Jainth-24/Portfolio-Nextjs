import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
			<script type="text/javascript">
				{`
					(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "nd8ensjtll");
				`}
			</script>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
  title: "Jainth | Full Stack Developer & Freelancer",
  keywords:
    "Next.js developer, React developer, web developer, UI/UX designer, Full Stack Developer, MERN Stack Developer, freelance web developer, JavaScript expert, TypeScript developer, frontend developer, backend developer, Shopify expert, e-commerce developer, API integration, Tailwind CSS, GraphQL, NestJS, Express.js, MongoDB, PostgreSQL, AWS, Firebase, web app development, custom website, responsive design, mobile-friendly websites, SEO-friendly websites, SaaS development, portfolio websites, business websites, web performance optimization",
  description:
    "Experienced Full Stack Developer & Freelancer specializing in Next.js, React, NestJS, and Shopify. I create high-performance, SEO-friendly web applications and e-commerce solutions.",
};


export default PagesMetaHead;
