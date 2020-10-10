<template>
    <!-- Список контактов -->
    <table>
        <thead>
            <th>№</th>
            <th>Имя</th>
            <th>Информация</th>
            <th>Удалить</th>
        </thead>
        <ContactsTableItem
            @remove-contact="removeContact"
            v-for="(contact, i) of contacts"
            :key="contact.id"
            :contact="contact"
            :index="i"
        />
    </table>
</template>

<script>
import ContactsTableItem from '@/components/ContactsTableItem'
export default {
    props: ['contacts'],
    components: {
        ContactsTableItem
    },
    methods: {
        removeContact(id) {
            this.$emit('remove-contact', id)
        }
    }
}
</script>

<style scoped>
    table {
        margin: 0 auto;
        border-collapse: collapse;
    }

    table th {
        border: 1px solid #000;
        padding: 10px;
    }
</style>