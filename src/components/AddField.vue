<template>
    <!-- Добавление поля к контактной информации -->
    <div>
        <h3>Добавить поле</h3>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="name" placeholder="Название">
            :
            <input type="text" v-model="value" placeholder="Значение">
            <button type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['maxId'],
    data() {
        return {
            name: '',
            value: ''
        }
    },
    methods: {
        onSubmit() {
            let valid = true

            if(!this.name.trim()) {
                valid = false
            }
            if(!this.value.trim()) {
                valid = false
            }

            if(valid) {
                this.$emit('add-field', { name: this.name, value: this.value })
                this.name = ''
                this.value = ''
            } else {
                alert('Не все поля заполнены!')
            }
        }
    }
}
</script>

<style scoped>
    form {
        font-size: 16px;
    }

    form input {
        width: 150px;
        font-size: 16px;
    }

    form button {
        font-size: 16px;
        margin-left: 10px;
    }
</style>