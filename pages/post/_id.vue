<template>
    <the-main>
        <base-pagehead
            :eyecatch-lg-url="post.eyecatchLg !== undefined ? post.eyecatchLg.url : null"
            :eyecatch-sm-url="post.eyecatchSm !== undefined ? post.eyecatchSm.url : null"
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
            :tag="post.tag"
        />

        <section v-if="movies" class="echo-p-posts echo-container echo-padding-y-lg">
            <h2 class="echo-p-posts-title echo-title echo-title-style-b echo-title-level-4 echo-margin-bottom-lg">More?</h2>
            <div class="echo-cards">
                <posts-list-card
                    v-for="(movie, index) in movies"
                    :exclude="post.id"
                    :id="movie.id"
                    :key="index"
                    :eyecatch-sm="movie.eyecatchSm ? movie.eyecatchSm : null"
                    :eyecatch-sm-url="movie.eyecatchSm ? movie.eyecatchSm.url : null"
                    :youtube-id="movie.youtubeId"
                    :title="movie.title"
                    :date="movie.createdAt"
                    :time="movie.time"
                />
            </div><!-- /.echo-cards -->
        </section><!-- /.echo-p-posts -->

    </the-main>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData({ $config, params, error, $shuffle }) {
        const { data } = await axios.get(
            `${$config.apiUrl}/movies/${params.id}`, {
                headers: { 'X-API-KEY': $config.apiKey }
        })
        const moviesData = await axios.get(
            `${$config.apiUrl}/movies?limit=50&orders=-publishedAt`, {
                headers: { 'X-API-KEY': $config.apiKey }
        })
        const moviesShuffle = $shuffle( moviesData.data.contents )

        return {
            post: data,
            movies: moviesShuffle.slice( 0, 8 )
        }
    },
    head() {
        return {
            title: this.post.title,
            meta: [
                { property: 'og:title', content: (this.post.title ? `${this.post.title} | ` : '') + process.env.npm_package_name },
                { property: 'og:url', content: `https://minecraft.webbingstudio.net${this.$route.fullPath}` },
                { property: 'op:image', content: 'https://minecraft.webbingstudio.net/share/ogimage.jpg' },
                { property: 'og:type', content: 'article' },
                { property: 'twitter:image', content: 'https://minecraft.webbingstudio.net/share/ogimage.jpg' }
            ],
            link: [
                { rel: 'canonical', href: `https://minecraft.webbingstudio.net${this.$route.fullPath}` }
            ]
        }
    }
}
</script>

<style scoped>
</style>