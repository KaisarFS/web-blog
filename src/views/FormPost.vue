<template>
    <p>{{ post }}</p>

    <section class="container">
        <div class="row">
            <div class="col-12 text-center" v-if="$route.path === '/posts/create'">
                <h1 class="mb-3 mt-5">Create Post</h1>
                <span>Please fill Title, Description and the author name below.</span>
            </div>
            <div class="col-12 text-center" v-else>
                <h1 class="mb-3 mt-5">Edit Post</h1>
            </div>
            <div class="col-12 col-lg-8 offset-lg-2 my-5">
                <div class="row">
                    <div class="col-12">
                        <div class="m-auto">
                            <form id="post-form" @submit.prevent="condition">
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between">
                                        <label for="input-title">Title</label>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="input-title"
                                        placeholder="Enter your title ..."
                                        autocomplete="off"
                                        required
                                        v-model="formPost.title"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="input-authorName">Author Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="input-authorName"
                                        placeholder="Enter author name ..."
                                        autocomplete="off"
                                        required
                                        v-model="formPost.authorName"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="input-description">Description</label>
                                    <textarea
                                        id="input-description"
                                        class="form-control"
                                        rows="3"
                                        placeholder="Enter your description ..."
                                        autocomplete="off"
                                        required
                                        v-model="formPost.description"
                                    ></textarea>
                                </div>
                                <button
                                    class="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                                    type="submit"
                                >
                                    Publish
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formPost: {
                title: '',
                description: '',
                authorName: ''
            }
        }
    },
    mounted() {
        if (this.$route.path === '/posts/edit/' + this.$route.params.id) {
            this.$store.dispatch('fetchById', this.$route.params.id)
        } else if (this.$route.path === '/posts/create') {
            this.formPost.title = ''
            this.formPost.description = ''
            this.formPost.authorName = ''
        }
    },
    computed: {
        post() {
            if (this.$route.path === '/posts/create') {
                this.formPost.title = ''
                this.formPost.description = ''
                this.formPost.authorName = ''
            }

            console.log(this.$store.state.post, '<===== HERE POST')
            this.formPost.title = this.$store.state.post.title
            this.formPost.description = this.$store.state.post.description
            this.formPost.authorName = this.$store.state.post.authorName

            // if (!this.$route.path === '/posts/create') {
            //     this.formPost.title = this.$store.state.post.title
            //     this.formPost.description = this.$store.state.post.description
            //     this.formPost.authorName = this.$store.state.post.authorName
            //     return this.$store.state.post
            // } else {
            //     this.formPost.title = ''
            //     this.formPost.description = ''
            //     this.formPost.authorName = ''
            // }
        }
    },
    methods: {
        async createPost() {
            await this.$store.dispatch('createPost', this.formPost)
            await this.$router.push('/')
            await this.$store.dispatch('fetchPosts')
        },

        async editPost() {
            console.log(this.formPost, '<======= HERE')
            await this.$store.dispatch('editPost', {
                formPost: this.formPost,
                paramId: this.$route.params.id
            })
            await this.$router.push('/')
            await this.$store.dispatch('fetchPosts')
        },

        async fetchById() {
            this.$store.dispatch('fetchById', this.$route.params.id)
        },

        async condition() {
            if (this.$route.path === '/posts/create') {
                await this.createPost()
            } else {
                await this.editPost()
            }
        }
    }
}
</script>
