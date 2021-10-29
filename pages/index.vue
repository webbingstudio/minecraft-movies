<template>
    <the-main>
        <div class="echo-p-pagehead echo-p-pagehead-home">
            <div class="echo-hero echo-hero-fit echo-hero-inverse">
                <div class="echo-hero-image">
                    <picture>
                        <source
                            v-if="movie.eyecatchSm !== undefined"
                            media="(max-width:640px)"
                            :srcset="movie.eyecatchSm.url + ' 640w'"
                            sizes="100vw">
                        <source
                            v-else
                            media="(max-width:640px)"
                            :srcset="'https://img.youtube.com/vi/' + movie.youtubeId + '/mqdefault.jpg 640w'"
                            sizes="100vw">
                        <source
                            v-if="movie.eyecatchLg !== undefined"
                            :srcset="movie.eyecatchLg.url + ' 100vw'"
                            sizes="100vw">
                        <source
                            v-else
                            :srcset="'https://img.youtube.com/vi/' + movie.youtubeId + '/maxresdefault.jpg 100vw'"
                            sizes="100vw">
                        <img
                            v-if="movie.eyecatchLg !== undefined"
                            :src="movie.eyecatchLg.url"
                            :alt="'「' + movie.title + '」のサムネイル'"
                        >
                        <img
                            v-else
                            :src="'https://img.youtube.com/vi/' + movie.youtubeId + '/maxresdefault.jpg'"
                            :alt="'「' + movie.title + '」のサムネイル'"
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
                            <p><span class="echo-label">MinecraftのYouTube動画倉庫</span></p>
                        </div><!-- /.echo-hero-body -->
                    </div><!-- /.echo-hero-contents-inner -->
                </div><!-- /.echo-hero-contents -->
            </div><!-- /.echo-hero -->
        </div><!-- /.echo-p-pagehead -->


        <section class="echo-p-tags echo-container echo-padding-top-xl echo-padding-bottom-lg">
            <h2 class="echo-p-posts-title echo-title echo-title-style-b echo-title-level-4 echo-margin-bottom-lg">Tags</h2>
            <nav class="echo-labels echo-text-xxl">
                <ul class="echo-labels-list">
                    <tag-list
                        v-for="(tag, index) in usedTags"
                        :id="tag.id"
                        :key="index"
                        :label="tag.label"
                    />
                </ul><!-- /.echo-labels-list -->
            </nav><!-- /.echo-labels -->
        </section><!-- /.echo-p-tags -->


        <section class="echo-p-posts echo-container echo-padding-y-lg">
            <h2 class="echo-p-posts-title echo-title echo-title-style-b echo-title-level-4 echo-margin-bottom-lg">What's New</h2>
            <div class="echo-cards">
                <posts-list-card
                    v-for="(movie, index) in movies"
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
    async asyncData({ $config, $shuffle }) {
        const moviesData = await axios.get(
            `${$config.apiUrl}/movies?limit=50&orders=-publishedAt`, {
                headers: { 'X-MICROCMS-API-KEY': $config.apiKey }
        })
        const moviesShuffle = $shuffle( moviesData.data.contents )
        const tagsData = await axios.get(
            `${$config.apiUrl}/movies?fields=tag&filters=tag[exists]`, {
                headers: { 'X-MICROCMS-API-KEY': $config.apiKey }
        })
        return {
            movies: moviesData.data.contents.slice( 0, 24 ),
            movie: moviesShuffle[ Math.floor( Math.random() * moviesData.data.contents.length ) ],
            tags: tagsData.data.contents
        }
    },
    head() {
        return {
            title: 'MinecraftのYouTube動画倉庫 - マインクラフトムービーズ',
            meta: [
                { property: 'og:title', content: 'MinecraftのYouTube動画倉庫 - マインクラフトムービーズ' },
                { property: 'og:url', content: 'https://minecraft.webbingstudio.net' },
                { property: 'og:image', content: 'https://minecraft.webbingstudio.net/share/ogimage.jpg' },
                { property: 'og:type', content: 'website' },
                { property: 'twitter:image', content: 'https://minecraft.webbingstudio.net/share/ogimage.jpg' }
            ],
            link: [
                { rel: 'canonical', href: 'https://minecraft.webbingstudio.net' }
            ]
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
.echo-p-pagehead-home .echo-p-pagehead-title {
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
.echo-p-pagehead-home .echo-p-pagehead-subtitle {
    font-weight: bold;
    text-shadow:
        -.05em .05em 0 #000,
        .05em -.05em 0 #000,
        -.05em -.05em 0 #000,
        .15em .15em 0 #000;
}
.echo-p-pagehead-home .echo-p-pagehead-body .echo-label {
    font-weight: bold;
    font-size: 1em;
    border-color: #000;
    border-width: .1em;
    background-color: green;
    color: #fff;
    padding-top: .05em;
}
@media (min-width: 62.5rem) {
.echo-p-pagehead-home .echo-hero-fit .echo-hero-image {
    padding-bottom: 25%;
}
}
.echo-p-pagehead-home .echo-hero-fit .echo-hero-image {
    opacity: .25;
}
.echo-p-pagehead-home .echo-hero-fit .echo-hero-image img {
    width: 120%;
    height: 200%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(-5deg);
    transform-origin: center;
    object-position: top center;
}
.echo-p-tags .echo-labels-list {
    justify-content: center;
}
</style>
