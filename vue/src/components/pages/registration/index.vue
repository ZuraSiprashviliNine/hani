<template>
    <div id="registration" class="page">
        <div class="container">
            <div class="row">
                <div class="col-4 offset-8">
                    <form 
                        @submit.prevent="_action">
                        <div class="input-group my-1">
                            <input v-model="email" type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="input-group my-1">
                            <input v-model="password" type="password" class="form-control" placeholder="password">
                        </div>
                        <div class="input-group my-1">
                            <button type="submit" class="btn-block btn btn-primary">
                                register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        _action(){
            this.$store.dispatch('User/registration', {
                email: this.email,
                password: this.password
            });
        }
    }
}
</script>

<style>

</style>
