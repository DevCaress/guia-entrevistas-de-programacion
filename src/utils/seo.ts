const SITE_TITLE = "Guia de entrevistas tecnicas";

export type PageMetaInput = {
  title: string;
  description: string;
  slug: string;
};

export function buildPageMeta({ title, description, slug }: PageMetaInput) {
  return {
    title: `${title} | ${SITE_TITLE}`,
    description,
    canonicalPath: `/guia/${slug}`
  };
}
