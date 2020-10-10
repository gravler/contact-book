<template>
    <!-- Добавить контакт -->
    <form @submit.prevent="onSubmit">
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="name">
        <button type="submit">Добавить</button>
    </form>
</template>

<script>
export default {
    props: ['maxId'],
    data() {
        return {
            name: ''
        }
    },
    methods: {
        onSubmit() {
            if(this.name.trim()) {
                const newContact = {
                    id: this.maxId + 1,
                    name: this.name,
                    fields: []
                }
                this.$emit('add-contact', newContact)
                this.name = ''
            } else {
                alert('Введите имя!')
            }
        }
    }
}
</script>

<style scoped>
    form {
        margin-top: 30px;
        font-size: 20px;
    }

    form input {
        width: 300px;
        margin: 0 15px;
        font-size: 20px;
    }

    form button {
        font-size: 20px;
    }
</style>