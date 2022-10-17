<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<main class="py-4 px-8">
	<slot />
</main>
<Footer />
