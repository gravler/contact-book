<template>
    <!-- Контактная информация -->
    <table>
        <tbody>
            <ContactDetailsItem
                :name="'Имя'"
                :value="contact.name"
                :unremoveble="true"
                @change-field="changeField"
            />
            <ContactDetailsItem
                v-for="field of contact.fields"
                :key="field.name"
                :name="field.name"
                :value="field.value"
                @change-field="changeField"
                @remove-field="removeField"
            />
        </tbody>
    </table>
</template>

<script>
import ContactDetailsItem from '@/components/ContactDetailsItem'
export default {
    props: ['contact'],
    components: {
        ContactDetailsItem
    },
    methods: {
        changeField(field) {
            this.$emit('change-field', { id: this.contact.id, field })
        },
        removeField(name) {
            this.$emit('remove-field', { id: this.contact.id, name })
        }
    }
}
</script>

<style scoped>
    table {
        margin: 0 auto;
        border-collapse: collapse;
    }
</style>