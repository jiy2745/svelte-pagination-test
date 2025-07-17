import allPosts from "$lib/data/posts.json";
import type { PostSummary } from "$lib/types";
import type { PageServerLoad } from "./$types";

const POSTS_PER_PAGE: number = 10;

export const load: PageServerLoad = async ({ url }) => {
    const currentPage: number = parseInt(url.searchParams.get("page") || "1");
    const totalPages: number = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    const offset: number = (currentPage - 1) * POSTS_PER_PAGE;
    const slicedPostSummary: PostSummary[] = allPosts.slice(
        offset,
        offset + POSTS_PER_PAGE,
    );

    return { slicedPostSummary, currentPage, totalPages };
};
