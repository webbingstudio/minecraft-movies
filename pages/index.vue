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
    async asyncData({ $config }) {
        const moviesData = await axios.get(
            `${$config.apiUrl}/movies?limit=9&orders=-publishedAt`, {
                headers: { 'X-API-KEY': $config.apiKey }
        })
        return {
            movies: moviesData.data.contents
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
