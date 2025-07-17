<script lang="ts">
    import Page from "../../routes/+page.svelte";

    export const data: PostSummary = {
        title: "pwntools - 페이로드 패킹 및 전송",
        excerpt:
            "패킹 때문에 오늘 하루를 꼬박 날려서 정리해둔다. 예전에도 send랑 sendline 때문에 못 풀었던 적이 있어서 같이 정리하기로 했다. pwntools 파이썬 모듈에는 p32, p64 함수가 존재한다. 간단하게 이분법적으로 생각하면 문자열 자체를 입력할 때에는 str() 함수를 사용하고, 메모리 주소를 입력할 때에는 p32 또는 p64 함수를 사용한다. 근데 이렇게만 생각했다가 오늘 시간을 잡아먹혔기 때문에 무조건적이라 생각하면 안 된다..  p64 vs p32둘 다 패킹 함수이지만 저장할 데...",
        author: "kgd",
        publishedAt: new Date(),
        thumbnailUrl:
            "https://images.unsplash.com/photo-1457195740896-7f345efef228?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUVCJUIwJTk0JUVCJThCJUE0JTIwJUVEJTkyJThEJUVBJUIyJUJEfGVufDB8fDB8fHww",
    };
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
