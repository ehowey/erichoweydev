declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"writing": {
"10-reasons-to-use-theme-ui-in-your-next-gatsby-project/index.mdx": {
  id: "10-reasons-to-use-theme-ui-in-your-next-gatsby-project/index.mdx",
  slug: "10-reasons-to-use-theme-ui-in-your-next-gatsby-project",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"adding-global-script-and-stylesheets-to-gatsby-head/index.mdx": {
  id: "adding-global-script-and-stylesheets-to-gatsby-head/index.mdx",
  slug: "adding-global-script-and-stylesheets-to-gatsby-head",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"advanced-internationalization-with-nextjs-and-middleware/index.mdx": {
  id: "advanced-internationalization-with-nextjs-and-middleware/index.mdx",
  slug: "advanced-internationalization-with-nextjs-and-middleware",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"advanced-mapping-with-gatsby-and-react-leaflet/index.mdx": {
  id: "advanced-mapping-with-gatsby-and-react-leaflet/index.mdx",
  slug: "advanced-mapping-with-gatsby-and-react-leaflet",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"building-a-sub-menu-with-gatsby/index.mdx": {
  id: "building-a-sub-menu-with-gatsby/index.mdx",
  slug: "building-a-sub-menu-with-gatsby",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"ch-ch-changesets-turn-and-face-the-changelog/index.mdx": {
  id: "ch-ch-changesets-turn-and-face-the-changelog/index.mdx",
  slug: "ch-ch-changesets-turn-and-face-the-changelog",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"examples-of-using-options-in-gatsby-themes/index.mdx": {
  id: "examples-of-using-options-in-gatsby-themes/index.mdx",
  slug: "examples-of-using-options-in-gatsby-themes",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"form-submission-using-gatsby-sanity-netlify-react-hook-form/index.mdx": {
  id: "form-submission-using-gatsby-sanity-netlify-react-hook-form/index.mdx",
  slug: "form-submission-using-gatsby-sanity-netlify-react-hook-form",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"gatsby-theme-catalyst-in-2021/index.mdx": {
  id: "gatsby-theme-catalyst-in-2021/index.mdx",
  slug: "gatsby-theme-catalyst-in-2021",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"gatsby-themes-pros-and-cons/index.mdx": {
  id: "gatsby-themes-pros-and-cons/index.mdx",
  slug: "gatsby-themes-pros-and-cons",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"geocoding-with-gatsby-and-sanity/index.mdx": {
  id: "geocoding-with-gatsby-and-sanity/index.mdx",
  slug: "geocoding-with-gatsby-and-sanity",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"getting-started-with-gatsby-theme-catalyst-writer/index.mdx": {
  id: "getting-started-with-gatsby-theme-catalyst-writer/index.mdx",
  slug: "getting-started-with-gatsby-theme-catalyst-writer",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"how-to-display-alternate-content-in-dark-mode-using-theme-ui/index.mdx": {
  id: "how-to-display-alternate-content-in-dark-mode-using-theme-ui/index.mdx",
  slug: "how-to-display-alternate-content-in-dark-mode-using-theme-ui",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"how-to-setup-a-gatsby-themes-monorepo/index.mdx": {
  id: "how-to-setup-a-gatsby-themes-monorepo/index.mdx",
  slug: "how-to-setup-a-gatsby-themes-monorepo",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"how-to-setup-a-staging-website-with-SANITY/index.mdx": {
  id: "how-to-setup-a-staging-website-with-SANITY/index.mdx",
  slug: "how-to-setup-a-staging-website-with-sanity",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"how-to-use-theme-ui-variants/index.mdx": {
  id: "how-to-use-theme-ui-variants/index.mdx",
  slug: "how-to-use-theme-ui-variants",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"introduction-to-catalyst-themes-for-gatsby/index.mdx": {
  id: "introduction-to-catalyst-themes-for-gatsby/index.mdx",
  slug: "introduction-to-catalyst-themes-for-gatsby",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"load-more-button-and-infinite-scroll-in-gatsby/index.mdx": {
  id: "load-more-button-and-infinite-scroll-in-gatsby/index.mdx",
  slug: "load-more-button-and-infinite-scroll-in-gatsby",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"notes-from-css-for-js-course/index.mdx": {
  id: "notes-from-css-for-js-course/index.mdx",
  slug: "notes-from-css-for-js-course",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"reflections-on-redwoodjs/index.mdx": {
  id: "reflections-on-redwoodjs/index.mdx",
  slug: "reflections-on-redwoodjs",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"should-we-be-thinking-differently-about-imposter-syndrome/index.mdx": {
  id: "should-we-be-thinking-differently-about-imposter-syndrome/index.mdx",
  slug: "should-we-be-thinking-differently-about-imposter-syndrome",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"understanding-latent-component-shadowing-in-gatsby-themes/index.mdx": {
  id: "understanding-latent-component-shadowing-in-gatsby-themes/index.mdx",
  slug: "understanding-latent-component-shadowing-in-gatsby-themes",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"using-conditional-fields-in-sanity-for-better-links/index.mdx": {
  id: "using-conditional-fields-in-sanity-for-better-links/index.mdx",
  slug: "using-conditional-fields-in-sanity-for-better-links",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"using-theme-ui-with-redwoodjs/index.mdx": {
  id: "using-theme-ui-with-redwoodjs/index.mdx",
  slug: "using-theme-ui-with-redwoodjs",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"using-theme-ui-with-sanity/index.mdx": {
  id: "using-theme-ui-with-sanity/index.mdx",
  slug: "using-theme-ui-with-sanity",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
"validation-snippets-for-sanity-io/index.mdx": {
  id: "validation-snippets-for-sanity-io/index.mdx",
  slug: "validation-snippets-for-sanity-io",
  body: string,
  collection: "writing",
  data: InferEntrySchema<"writing">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
