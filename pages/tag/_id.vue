<template>
    <the-main>
        <base-pagehead
            :eyecatch-lg-url="movie.eyecatchLg !== undefined ? movie.eyecatchLg.url : null"
            :eyecatch-sm-url="movie.eyecatchSm !== undefined ? movie.eyecatchSm.url : null"
            :title="tag.label"
            :body="tag.description"
            :youtube-id="movie.youtubeId"
        />
        <section class="echo-p-posts echo-container echo-margin-y-lg">
            <div class="echo-cards">
                <posts-list-card
                    v-for="(movie, index) in movies"
                    :id="movie.id"
                    :key="index"
                    :eyecatch-sm-url="movie.eyecatchSm !== undefined ? movie.eyecatchSm.url : null"
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
    async asyncData({ $config, params }) {
        const tagData = await axios.get(
            `${$config.apiUrl}/tags?filters=id%5Bequals%5D${params.id}&limit=1`, {
                headers: { 'X-API-KEY': $config.apiKey }
        })
        const moviesData = await axios.get(
            `${$config.apiUrl}/movies?filters=tag%5Bcontains%5D${params.id}&limit=9&orders=-publishedAt`, {
                headers: { 'X-API-KEY': $config.apiKey }
        })
        return {
            tag: tagData.data.contents[0],
            movies: moviesData.data.contents,
            movie: moviesData.data.contents[ Math.floor( Math.random() * moviesData.data.contents.length ) ]
        }
    },
    head() {
        return {
            title: 'タグ: ' + this.tag.label
        }
    },
    data() {
        return {
            blank: {
                url: '',
                width: 0,
                height: 0
            }

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