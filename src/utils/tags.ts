import { getCollection } from 'astro:content';
import { PAGES } from '../config';

async function getActiveTaggedCollections() {
    const collections = [];

    if (PAGES.publications.isActive !== false) {
        collections.push(...(await getCollection('publications')).map(e => ({ ...e, collection: 'publications' })));
    }
    if (PAGES.talks.isActive !== false) {
        collections.push(...(await getCollection('talks')).map(e => ({ ...e, collection: 'talks' })));
    }
    if (PAGES.projects.isActive !== false) {
        collections.push(...(await getCollection('projects')).map(e => ({ ...e, collection: 'projects' })));
    }
    if (PAGES.blog.isActive !== false) {
        collections.push(...(await getCollection('posts')).map(e => ({ ...e, collection: 'posts' })));
    }
    if (PAGES.teaching.isActive !== false) {
        collections.push(...(await getCollection('teaching')).map(e => ({ ...e, collection: 'teaching' })));
    }

    return collections;
}

export async function getAllTags() {
    const allEntries = await getActiveTaggedCollections();
    const tags: Record<string, number> = {};

    allEntries.forEach(entry => {
        const entryTags = (entry.data as any).tags || [];
        entryTags.forEach((tag: string) => {
            const normalizedTag = tag.trim().toLowerCase();
            if (normalizedTag) {
                tags[normalizedTag] = (tags[normalizedTag] || 0) + 1;
            }
        });
    });

    return Object.entries(tags)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getContentByTag(tag: string) {
    const normalizedSearchTag = tag.toLowerCase();
    const allEntries = await getActiveTaggedCollections();

    const filterFn = (entry: any) => {
        const entryTags = (entry.data as any).tags || [];
        return entryTags.some((t: string) => t.toLowerCase() === normalizedSearchTag);
    };

    return allEntries.filter(filterFn).sort((a, b) => {
        const dateA = new Date((a.data as any).date || 0);
        const dateB = new Date((b.data as any).date || 0);
        return dateB.getTime() - dateA.getTime();
    });
}
