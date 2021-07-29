<template>
    <the-main>
        <base-pagehead
            :eyecatch-lg-url="movie.eyecatchLg !== undefined ? movie.eyecatchLg.url : null"
            :eyecatch-sm-url="movie.eyecatchSm !== undefined ? movie.eyecatchSm.url : null"
            :title="currentTag.label"
            :body="currentTag.description"
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

        <section class="echo-p-tags echo-container echo-padding-top-xl echo-padding-bottom-lg">
            <h2 class="echo-p-posts-title echo-title echo-title-style-b echo-title-level-4 echo-margin-bottom-lg">More?</h2>
            <nav class="echo-labels echo-text-xxl">
                <ul class="echo-labels-list">
                    <tag-list
                        v-for="(tag, index) in usedTags"
                        :id="tag.id"
                        :key="index"
                        :label="tag.label"
                        :exclude="currentTag.id"
                    />
                </ul><!-- /.echo-labels-list -->
            </nav><!-- /.echo-labels -->
        </section><!-- /.echo-p-tags -->

    </the-main>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData({ $config, params }) {
        const moviesData = await axios.get(
            `${$config.apiUrl}/movies?filters=tag%5Bcontains%5D${params.id}&limit=9&orders=-publishedAt`, {
                headers: { 'X-API-KEY': $config.apiKey }
        })
        const tagsData = await axios.get(
            `${$config.apiUrl}/movies?fields=tag&filters=tag[exists]`, {
                headers: { 'X-API-KEY': $config.apiKey }
        })
        const tagList = tagsData.data.contents.map( item => item.tag ).flat(1)
        return {
            currentTag: tagList.find( tag => tag.id === params.id ),
            movies: moviesData.data.contents,
            movie: moviesData.data.contents[ Math.floor( Math.random() * moviesData.data.contents.length ) ],
            tags: tagsData.data.contents
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
    },
    head() {
        return {
            title: 'タグ: ' + this.currentTag.label
        }
    },
    computed: {
        usedTags() {
            return this.$getUsedTags( this.tags )
        },
    }
}
</script>

<style scoped>
.echo-p-tags .echo-labels-list {
    justify-content: center;
}
</style>