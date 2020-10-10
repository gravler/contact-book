<template>
    <!-- Страница со списком контактов -->
    <div>
        <ContactsTable
            v-if="contacts.length"
            :contacts="contacts"
            @remove-contact="removeContact"
        />
        <h3 v-else>Нет контактов</h3>
        <AddContact
            :maxId="maxId"
            @add-contact="addContact"
        />
    </div>
</template>

<script>
import ContactsTable from '@/components/ContactsTable'
import AddContact from '@/components/AddContact'

export default {
    name: 'App',
    props: ['maxId', 'contacts'],
    methods: {
        removeContact(id) {
            this.$emit('remove-contact', id)
        },
        addContact(contact) {
            this.$emit('add-contact',  contact)
        }
    },
    components: {
        ContactsTable,
        AddContact
    }
}
</script>

<style scoped>
    .add-contacts-btn {
        margin-top: 30px;
        font-size: 16px;
        padding: 6px 12px;
    }
</style>