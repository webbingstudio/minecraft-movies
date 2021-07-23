<template>
    <the-main>
        <base-pagehead
            :eyecatch-lg="post.eyecatchLg ? post.eyecatchLg : null"
            :eyecatch-lg-url="post.eyecatchLg ? post.eyecatchLg.url : null"
            :eyecatch-sm="post.eyecatchSm ? post.eyecatchSm : null"
            :eyecatch-sm-url="post.eyecatchSm ? post.eyecatchSm.url : null"
            :title="post.title"
            :youtube-id="post.youtubeId"
            :date="post.createdAt"
        />
        <post-body
            :id="post.id"
            :title="post.title"
            :youtube-id="post.youtubeId"
            :date="post.createdAt"
            :body="post.body"
            :tags="post.tags"
        />
        <section class="echo-p-posts echo-container echo-margin-top-xl echo-margin-bottom-lg">
            <h2 class="echo-p-posts-title echo-title echo-title-style-b echo-title-level-4 echo-margin-bottom-lg">More</h2>
            <div class="echo-cards">
                <posts-list-card
                    v-for="(post, index) in posts"
                    :id="post.id"
                    :key="index"
                    :eyecatch-sm="post.eyecatchSm ? post.eyecatchSm : null"
                    :eyecatch-sm-url="post.eyecatchSm ? post.eyecatchSm.url : null"
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
import axios from 'axios'
export default {
  async asyncData({ $config, params, error }) {
    try {
      const { data } = await axios.get(
        `${$config.apiUrl}/movies/${params.id}`, {
          headers: { 'X-API-KEY': $config.apiKey }
      })
      return {
        post: data
      }
    } catch (err) {
      error({
        errorCode: 404
      })
    }
  },
  head() {
    return {
      title: this.post.title
    }
  },



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
    "title": "吾輩は人間と同居して彼等を観察すればするほど",
    "eyecatchSm": {},
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
    "title": "彼等は我儘なものだと断言せざるを得ないようになった。ことに吾輩が時々同衾する小供のごときに至っては",
    "eyecatchSm": {},
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
    "title": "頭へ袋をかぶせたり、抛り出したり、へっついの中へ押し込んだりする",
    "eyecatchSm": {},
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
.echo-p-posts-title {
    font-family: 'Press Start 2P', sans-serif;
    text-transform: uppercase;
}
</style>