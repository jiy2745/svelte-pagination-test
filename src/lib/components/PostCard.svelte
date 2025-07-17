<script lang="ts">
    import type { PostSummary } from "$lib/types";

    export let data: PostSummary;
</script>

<a href="./" class="flex gap-x-6 m-4" aria-label="Post Card">
    <div class="w-40 flex-shrink-0 overflow-hidden">
        <img src={data.thumbnailUrl} class="w-full h-full rounded-lg" alt="" />
    </div>
    <div class="flex flex-col">
        <h2 class="text-xl font-bold">{data.title}</h2>
        <p class="text-sm">{data.excerpt}</p>
        <div class="text-xs">
            <span>{data.author}</span>
            <span>{data.publishedAt}</span>
        </div>
    </div>
</a>
