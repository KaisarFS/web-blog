<template>
    <header class="site-header">
        <div class="header-wrap">
            <Navbar />
        </div>

        <h1 class="site-title">Mulai curahkan isi hatimu disini bersama kami!</h1>
    </header>

    <div class="content-wrap">
        <main class="main-posts-list row">
            <div class="col-sm-8 col-lg-12">
                <CardPost
                    v-if="posts.length"
                    v-for="post in $store.state.posts"
                    :key="post.id"
                    :post="post"
                />
                <div v-else style="margin-left: 200px;">
                    <img src="../assets/preloader.gif" alt="loading-image">
                </div>
            </div>
        </main>
    </div>

    <footer>
        <div>
            <p class="copyrights">
                Maaf ya mas / mba belum sempat responsive dan belum cantik, karena ada tabrakan sama
                beberapa techical test lain jadi tampilannya nda bisa maksimal. sama perlu waktu
                buat ngeksplore di vuex nya.
            </p>
        </div>
    </footer>
</template>

<script>
import CardPost from '../components/CardPost.vue'
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        CardPost,
        Navbar
    },
    computed: {
        posts() {
            return this.$store.state.posts
        }
    },
    mounted() {
        this.$store.dispatch('fetchPosts')
    }
}
</script>
