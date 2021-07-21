<template>
    <the-main>
        <div class="echo-p-pagehead echo-p-pagehead-home">
            <div class="echo-hero echo-hero-fit echo-hero-inverse">
                <div class="echo-hero-image">
                    <picture>
                        <source
                            media="(max-width:640px)"
                            srcset="https://picsum.photos/640/640 640w"
                            sizes="100vw">
                        <source
                            srcset="https://picsum.photos/1200/800"
                            sizes="100vw">
                        <img
                            src="https://picsum.photos/1200/800"
                            alt=""
                        >
                    </picture>
                </div><!-- /.echo-hero-image -->
                <div class="echo-hero-contents">
                    <div class="echo-hero-contents-inner">
                        <div class="echo-hero-header">
                            <h2 class="echo-p-pagehead-title echo-hero-title echo-title echo-title-lebel-1 echo-margin-bottom-sm">Minecraft Movies</h2>
                            <p class="echo-p-pagehead-subtitle echo-hero-subtitle echo-title echo-title-lebel-5">マインクラフトムービーズ</p>
                        </div><!-- /.echo-hero-header -->
                        <div class="echo-p-pagehead-body echo-hero-body">
                            <p><span class="echo-label">Minecraft動画アーカイブ</span></p>
                        </div><!-- /.echo-hero-body -->
                    </div><!-- /.echo-hero-contents-inner -->
                </div><!-- /.echo-hero-contents -->
            </div><!-- /.echo-hero -->
        </div><!-- /.echo-p-pagehead -->



        <section class="echo-p-posts echo-container echo-margin-y-lg">
            <div class="echo-cards">
                <posts-list-card
                    v-for="(post, index) in posts"
                    :id="post.id"
                    :key="index"
                    :eyecatch-sm="post.eyecatchSm"
                    :eyecatch-sm-url="post.eyecatchSm.url"
                    :youtube-id="post.youtubeId"
                    :title="post.title"
                    :date="post.createdAt"
                    :time="post.time"
                />
            </div><!-- /.echo-cards -->
        </section><!-- /.echo-p-posts -->
    </the-main>
</template>

<script>
export default {
    data() {
        return {
            posts: [
{
    "id": "qnfoxodef",
    "createdAt": "2021-07-14T09:19:53.231Z",
    "updatedAt": "2021-07-14T09:19:53.231Z",
    "publishedAt": "2021-07-14T09:19:53.231Z",
    "revisedAt": "2021-07-14T09:19:53.231Z",
    "youtubeId": "CcuXdLpaQQ8",
    "eyecatchSm": {},
    "title": "吾輩は人間と同居して彼等を観察すればするほど",
    "body": "<p>吾輩の尊敬する筋向の白君などは逢う度毎に人間ほど不人情なものはないと言っておらるる。<br>白君は先日玉のような子猫を四疋産まれたのである。ところがそこの家の書生が三日目にそいつを裏の池へ持って行って四疋ながら棄てて来たそうだ。<br><br>白君は涙を流してその一部始終を話した上、どうしても我等猫族が親子の愛を完くして美しい家族的生活をするには人間と戦ってこれを剿滅せねばならぬといわれた。一々もっともの議論と思う。</p>",
    "time": '15:45',
    "tags": ''
},
{
    "id": "x6djeyto7u59",
    "createdAt": "2021-07-13T10:02:17.998Z",
    "updatedAt": "2021-07-13T10:02:17.998Z",
    "publishedAt": "2021-07-13T10:02:17.998Z",
    "revisedAt": "2021-07-13T10:02:17.998Z",
    "youtubeId": "8nxaZ69ElEc",
    "eyecatchSm": {},
    "title": "彼等は我儘なものだと断言せざるを得ないようになった。ことに吾輩が時々同衾する小供のごときに至っては",
    "body": "<p>吾輩の尊敬する筋向の白君などは逢う度毎に人間ほど不人情なものはないと言っておらるる。<br>白君は先日玉のような子猫を四疋産まれたのである。ところがそこの家の書生が三日目にそいつを裏の池へ持って行って四疋ながら棄てて来たそうだ。<br><br>白君は涙を流してその一部始終を話した上、どうしても我等猫族が親子の愛を完くして美しい家族的生活をするには人間と戦ってこれを剿滅せねばならぬといわれた。一々もっともの議論と思う。</p>",
    "time": '15:45',
    "tags": ''
},
{
    "id": "d6ywxhisz",
    "createdAt": "2021-07-13T10:01:37.010Z",
    "updatedAt": "2021-07-13T10:01:37.010Z",
    "publishedAt": "2021-07-13T10:01:37.010Z",
    "revisedAt": "2021-07-13T10:01:37.010Z",
    "youtubeId": "Bgbmcz6A",
    "title": "言語同断である。自分の勝手な時は人を逆さにしたり",
    "eyecatchSm": {
        "url": "https://picsum.photos/800/600",
        "height": 600,
        "width": 800
    },
    "body": "<p>吾輩の尊敬する筋向の白君などは逢う度毎に人間ほど不人情なものはないと言っておらるる。<br>白君は先日玉のような子猫を四疋産まれたのである。ところがそこの家の書生が三日目にそいつを裏の池へ持って行って四疋ながら棄てて来たそうだ。<br><br>白君は涙を流してその一部始終を話した上、どうしても我等猫族が親子の愛を完くして美しい家族的生活をするには人間と戦ってこれを剿滅せねばならぬといわれた。一々もっともの議論と思う。</p>",
    "time": '15:45',
    "tags": ''
},
{
    "id": "t3ngb6n9a",
    "createdAt": "2021-07-13T09:59:13.937Z",
    "updatedAt": "2021-07-13T09:59:13.937Z",
    "publishedAt": "2021-07-13T09:59:13.937Z",
    "revisedAt": "2021-07-13T09:59:13.937Z",
    "youtubeId": "6IbFTBdJloc",
    "eyecatchSm": {},
    "title": "頭へ袋をかぶせたり、抛り出したり、へっついの中へ押し込んだりする",
    "body": "<p>吾輩の尊敬する筋向の白君などは逢う度毎に人間ほど不人情なものはないと言っておらるる。<br>白君は先日玉のような子猫を四疋産まれたのである。ところがそこの家の書生が三日目にそいつを裏の池へ持って行って四疋ながら棄てて来たそうだ。<br><br>白君は涙を流してその一部始終を話した上、どうしても我等猫族が親子の愛を完くして美しい家族的生活をするには人間と戦ってこれを剿滅せねばならぬといわれた。一々もっともの議論と思う。</p>",
    "time": '15:45',
    "tags": ''
},
{
    "id": "k8cgb19xs0",
    "createdAt": "2021-07-13T09:58:00.341Z",
    "updatedAt": "2021-07-13T09:58:38.284Z",
    "publishedAt": "2021-07-13T09:58:00.341Z",
    "revisedAt": "2021-07-13T09:58:00.341Z",
    "youtubeId": "nBqXSBxOH-A",
    "eyecatchSm": {},
    "title": "しかも吾輩の方で少しでも手出しをしようものなら家内総がかりで追い廻して迫害を加える",
    "body": "<p>吾輩の尊敬する筋向の白君などは逢う度毎に人間ほど不人情なものはないと言っておらるる。<br>白君は先日玉のような子猫を四疋産まれたのである。ところがそこの家の書生が三日目にそいつを裏の池へ持って行って四疋ながら棄てて来たそうだ。<br><br>白君は涙を流してその一部始終を話した上、どうしても我等猫族が親子の愛を完くして美しい家族的生活をするには人間と戦ってこれを剿滅せねばならぬといわれた。一々もっともの議論と思う。</p>",
    "time": '15:45',
    "tags": ''
}

            ]
        }
    }
}
</script>

<style scoped>
.echo-p-pagehead.echo-p-pagehead-home .echo-p-pagehead-title {
    color: #999;
    font-family: 'Press Start 2P', sans-serif;
    text-shadow:
        -.03em -.03em 0 #fff,
        -.075em .075em 0 #000,
        .075em -.075em 0 #000,
        -.075em -.075em 0 #000,
        .15em .15em 0 #000;
    text-transform: uppercase;
}
.echo-p-pagehead.echo-p-pagehead-home .echo-p-pagehead-subtitle {
    font-weight: bold;
    text-shadow:
        -.05em .05em 0 #000,
        .05em -.05em 0 #000,
        -.05em -.05em 0 #000,
        .15em .15em 0 #000;
}
.echo-p-pagehead.echo-p-pagehead-home .echo-p-pagehead-body .echo-label {
    font-weight: bold;
    font-size: 1em;
    border-color: #000;
    border-width: .1em;
    background-color: green;
    color: #fff;
    padding-top: .05em;
}
@media (min-width: 62.5rem) {
.echo-p-pagehead.echo-p-pagehead-home .echo-hero-fit .echo-hero-image {
    padding-bottom: 25%;
}
}
.echo-p-pagehead.echo-p-pagehead-home .echo-hero-fit .echo-hero-image {
    opacity: .5;
}
</style>
