<script lang="ts">
    import PostCard from "$lib/components/PostCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    $: slicedPostSummary = data.slicedPostSummary;
    $: currentPage = data.currentPage;
    $: totalPages = data.totalPages;
    $: navArray = makeNavArray(currentPage);

    function makeNavArray(_currentPage: number): number[] {
        let _navArray: number[] = [
            Math.floor((_currentPage - 1) / 5) * 5 + 1,
            Math.floor((_currentPage - 1) / 5) * 5 + 2,
            Math.floor((_currentPage - 1) / 5) * 5 + 3,
            Math.floor((_currentPage - 1) / 5) * 5 + 4,
            Math.floor((_currentPage - 1) / 5) * 5 + 5,
        ];

        _navArray = _navArray.filter((n) => n <= totalPages);

        return _navArray;
    }
</script>

<div class="flex flex-col">
    {#each slicedPostSummary as data}
        <PostCard {data} />
    {/each}
</div>

<nav class="flex justify-center gap-x-4 my-4">
    <a href="?page={currentPage - 1}">이전</a>
    {#each navArray as n}
        <a href="?page={n}">{n}</a>
    {/each}
    <a href="?page={currentPage + 1}">다음</a>
</nav>
