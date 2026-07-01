export type GuideEntryLike = {
  id: string;
  slug?: string;
  data: {
    title: string;
    description: string;
    category: string;
    section?: string;
    sidebar: {
      label?: string;
      order: number;
    };
  };
};

export type SidebarItem = {
  href: string;
  label: string;
  title: string;
  slug: string;
  order: number;
};

export type SidebarGroup = {
  category: string;
  items: SidebarItem[];
};

const byOrderThenTitle = (a: GuideEntryLike, b: GuideEntryLike) => {
  const orderDelta = a.data.sidebar.order - b.data.sidebar.order;
  if (orderDelta !== 0) return orderDelta;
  return a.data.title.localeCompare(b.data.title, "es");
};

export function entrySlug(entry: GuideEntryLike) {
  return entry.slug ?? entry.id.replace(/\.mdx?$/, "");
}

export function guidePath(slug: string) {
  return `/guia/${slug}`;
}

export function groupGuideEntries(entries: GuideEntryLike[]): SidebarGroup[] {
  const sortedEntries = [...entries].sort(byOrderThenTitle);
  const groups = new Map<string, SidebarItem[]>();

  for (const entry of sortedEntries) {
    const slug = entrySlug(entry);
    if (slug.split("/").length > 2) continue;
    const item: SidebarItem = {
      href: guidePath(slug),
      label: entry.data.sidebar.label ?? entry.data.title,
      title: entry.data.title,
      slug,
      order: entry.data.sidebar.order
    };
    groups.set(entry.data.category, [...(groups.get(entry.data.category) ?? []), item]);
  }

  return [...groups.entries()].map(([category, items]) => ({ category, items }));
}

export function getFirstGuidePath(entries: GuideEntryLike[]) {
  const [firstGroup] = groupGuideEntries(entries);
  return firstGroup?.items[0]?.href ?? "/guia";
}

export function isActivePath(currentPath: string, href: string) {
  return currentPath.replace(/\/$/, "") === href.replace(/\/$/, "");
}
