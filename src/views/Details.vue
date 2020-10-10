<template>
    <!-- Страница с контактной информацией -->
    <div>
        <ContactDetails
            :contact="contacts.find(c => c.id == id)"
            @change-field="changeField"
            @remove-field="removeField"
        />
        <AddField
            @add-field="addField"
        />
        <button class="cancel-btn" v-if="lastAction.name && lastAction.id == id" v-on:click="$emit('cancel-last')">Отменить</button>
    </div>
</template>

<script>
import ContactDetails from '@/components/ContactDetails'
import AddField from '@/components/AddField'
export default {
    props: ['id', 'contacts', 'lastAction'],
    components: {
        ContactDetails,
        AddField
    },
    methods: {
        changeField(changes) {
            this.$emit('change-field', changes)
        },
        removeField(removeInfo) {
            this.$emit('remove-field', removeInfo)
        },
        addField(field) {
            this.$emit('add-field', { id: +this.id, field })
        }
    }
}
</script>

<style scoped>
    .cancel-btn {
        margin-top: 20px;
        font-size: 16px;
    }
</style>