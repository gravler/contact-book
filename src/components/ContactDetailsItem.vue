<template>
    <!-- Элемент контактной информации -->
    <tr>
        <th>{{name}}</th>
        <td>
            <input type="text" v-if="change" v-model="newValue">
            <span v-else>{{value}}</span>
        </td>
        <td>
            <button v-if="!change" v-on:click="setChanges(true)">Изменить</button>
            <div v-else>
                <button v-on:click="saveChanges">Сохранить</button> <br>
                <button v-on:click="cancelChanges">Отменить</button>
            </div>
        </td>
        <td v-if="!unremoveble">
            <button v-on:click="removeField">Удалить</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['name', 'value', 'unremoveble'],
    data() {
        return {
            change: false,
            newValue: this.value
        }
    },
    methods: {
        setChanges(change) {
            this.change = change
            this.newValue = this.value
        },
        saveChanges() {
            this.$emit('change-field', { name: this.name, value: this.newValue })
            this.change = false
            this.newValue = this.value
        },
        cancelChanges() {
            if(confirm('Отменить изменения?')) {
                this.setChanges(false)
            }
        },
        removeField() {
            if(confirm('Вы действительно хотите удалить поле?')) {
                this.$emit('remove-field', this.name)
            }
        }
    }
}
</script>

<style scoped>
    th, td {
        border: 1px solid #000;
        padding: 10px;
    }
</style>