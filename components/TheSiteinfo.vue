<template>
<section class="echo-p-siteinfo echo-container echo-container-sm echo-padding-y-lg">
    <div class="echo-p-siteinfo-contents echo-box echo-box-style-a">
        <h2 class="echo-p-siteinfo-title echo-title echo-title-style-b echo-title-level-6 echo-margin-bottom-md">About this site</h2>

        <div class="echo-media">
            <div class="echo-media-inner">
                <div class="echo-media-object">
                    <figure class="echo-thumbnail">
                        <img alt="holyKurka" src="~/assets/images/avatar_holyKurka.jpg">
                    </figure><!-- /.echo-thumbnail -->
                </div><!-- /.echo-media-object -->
                <div class="echo-media-contents">
                    <div class="echo-media-body">
                        <p>このウェブサイトは、Minecraftだいすきおばさん「holyKurka」がYouTubeのMinecraft動画を紹介しています。<br>
                        編集が美しく演出が過激すぎない、比較的大人向けの動画を集めています。お好みの動画を「タグ」で探してみてください。</p>
                        <p>holyKurkaの本業はエンジニアです。このサイトを運営しているのは、<a href="https://jamstack.org/" target="_blank">とある回路</a>の勉強のためでもあるらしいです。なので表示が遅くなることがたまにあるかもしれません。そのときはすみません。</p>

                        <p>
                            <a href="https://twitter.com/webbingstudio" target="_blank">holyKurkaのTwitter</a>
                            &nbsp;|&nbsp;
                            <a href="https://github.com/webbingstudio/minecraft-movies" target="_blank">このサイトのリポジトリ</a>
                        </p>
                    </div>
                </div><!-- /.echo-media-contents -->
            </div><!-- /.echo-media-inner -->
        </div><!-- /.echo-media -->

    </div><!-- /.echo-p-siteinfo-contents -->
</section><!-- /.echo-p-siteinfo -->
</template>

<script>
export default {
}
</script>

<style scoped>
.echo-p-siteinfo-contents {
    color: #fff;
    background-color: #449624;
}
.echo-p-siteinfo-contents a {
    color: #ffee00;
}
.echo-p-siteinfo-title {
    font-family: 'Press Start 2P', sans-serif;
    text-transform: uppercase;
}
.echo-media-object {
    max-width: 150px;
}
</style>