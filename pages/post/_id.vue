<template>
    <the-main>
        <base-pagehead
            :eyecatch-lg="post.eyecatchLg"
            :eyecatch-lg-url="post.eyecatchLg.url"
            :eyecatch-sm="post.eyecatchSm"
            :eyecatch-sm-url="post.eyecatchSm.url"
            :title="post.title"
            :date="post.createdAt"
        />
        <post-body
            :id="post.id"
            :title="post.title"
            :date="post.createdAt"
            :body="post.body"
            :tags="post.tags"
        />
    </the-main>
</template>

<script>
export default {
    data() {
        return {
            post: {
    "id": "qnfoxodef",
    "createdAt": "2021-07-14T09:19:53.231Z",
    "updatedAt": "2021-07-14T09:19:53.231Z",
    "publishedAt": "2021-07-14T09:19:53.231Z",
    "revisedAt": "2021-07-14T09:19:53.231Z",
    "title": "吾輩は人間と同居して彼等を観察すればするほど",
    "eyecatchLg": {
        "url": "https://picsum.photos/1200/800",
        "height": 800,
        "width": 1200
    },
    "eyecatchSm": {
        "url": "https://picsum.photos/640/480",
        "height": 480,
        "width": 640
    },
    "body": "<p>吾輩の尊敬する筋向の白君などは逢う度毎に人間ほど不人情なものはないと言っておらるる。<br>白君は先日玉のような子猫を四疋産まれたのである。ところがそこの家の書生が三日目にそいつを裏の池へ持って行って四疋ながら棄てて来たそうだ。<br><br>白君は涙を流してその一部始終を話した上、どうしても我等猫族が親子の愛を完くして美しい家族的生活をするには人間と戦ってこれを剿滅せねばならぬといわれた。一々もっともの議論と思う。</p>",
    "tags": ''
            }
        }
    }
}
</script>
