<template>
    <!-- Элемент списка контактов -->
    <tr>
        <td>{{index + 1}}</td>
        <td>{{contact.name}}</td>
        <td>
            <router-link :to="'/details/' + contact.id">Информация</router-link>
        </td>
        <td>
            <button v-on:click="removeContact">Удалить</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['contact', 'index'],
    methods: {
        removeContact() {
            if(confirm('Вы действительно хотите удалить контакт?')) {
                this.$emit('remove-contact', this.contact.id)
            }
        }
    }
}
</script>

<style scoped>
    td {
        border: 1px solid #000;
        padding: 10px;
    }
</style>