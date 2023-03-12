<template>
    <article class="article">
        <div class="article-img-column" @click.prevent="changePage(post.id)" style="z-index: 1">
            <img
                class="article-img"
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
            />
        </div>

        <div class="article-text-column">
            <div @click.prevent="changePage(post.id)" style="z-index: 1">
                <h2 class="article-title">
                    <a class="article-title-link" href="#">{{ post.title }}</a>
                </h2>
                <time class="article-datetime" datetime="2019-06-10">{{
                    moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')
                }}</time>
                <cite class="article-author">{{ post.authorName }}</cite>
                <div class="article-content" id="testing">
                    <p>
                        {{ post.description }}
                    </p>
                </div>
            </div>

            <a href="" class="button" @click="deleteItem(post.id)" style="display: inline-block"
                >remove</a
            >
        </div>
    </article>
</template>

<script>
import moment from 'moment'

export default {
    props: ['post'],
    methods: {
        changePage(id) {
            this.$router.push(`/posts/edit/${id}`)
        },

        deletePost() {
            this.$store.dispatch('deletePost') //, this.post.id
        },

        async deleteItem(id) {
            await this.$store.dispatch('deletePost', id)
            await this.$store.dispatch('fetchPosts')
        },

        moment: function () {
            return moment()
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
$g-line-height: 1.5 !default;
$g-spacing: $g-line-height * 1em;
$black: #000;
$white: #fff;

.button {
    position: relative;
    display: table;
    padding: $g-spacing / 2 $g-spacing * 2;
    background: #000;
    color: #fff;
    text-decoration: none;
    margin-top: $g-spacing;
    margin-bottom: 20px;
    text-transform: uppercase;
    &:hover {
        background: lighten(#222, 5%);
    }
}

.h2 {
    color: red;
    max-width: 10%;
    max-height: 10%;
}
</style>
