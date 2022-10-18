<script>
	export let title;
	export let date;
</script>

<article>
	<h1>{title}</h1>

	<p>Published: {date}</p>

	<slot />
</article>
