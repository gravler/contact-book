<template>
  <div id="app">
    <h1>Книга контактов</h1>
    <hr>
    <router-view
      :maxId="maxId"
      :contacts="contacts"
      :lastAction="lastAction"
      @remove-contact="removeContact"
      @add-contact="addContact"
      @change-field="changeField"
      @remove-field="removeField"
      @add-field="addField"
      @cancel-last="cancelLast"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxId: 4,
      contacts: [
      ],
      lastAction: {} //Информация о последнем действии
    }
  },
  methods: {
    removeContact(id) {
      this.contacts = this.contacts.filter(c => c.id !== id)
    },
    addContact(contact) {
      if(!this.contacts.find(c => c.name === contact.name)) {
        this.contacts.push(contact)
        this.maxId++
      } else {
       alert('Контакт с таким именем уже существует!')
      }
    },
    changeField({ id, field: { name, value } }) {
      const idx = this.contacts.findIndex(c => c.id === id)
      if(name === 'Имя') {
        this.lastAction = { name: 'change-name', id, data: { name: this.contacts[idx].name } }
        this.contacts[idx].name = value
      } else {
        const fields = this.contacts[idx].fields
        const fieldsIdx = fields.findIndex(f => f.name === name)

        this.lastAction = { name: 'change', id, data: { fieldsIdx, value: fields[fieldsIdx].value } }

        fields[fieldsIdx].value = value
      }
    },
    removeField({ id, name }) {
      const idx = this.contacts.findIndex(c => c.id === id)
      const fields = this.contacts[idx].fields
      const fieldsIdx = fields.findIndex(f => f.name === name)
      const removedField = fields[fieldsIdx]
      const newFields = [
        ...fields.slice(0, fieldsIdx),
        ...fields.slice(fieldsIdx + 1),
      ]
      this.contacts[idx].fields = newFields

      this.lastAction = { name: 'remove', id, data: { fieldsIdx, removedField } }
    },
    addField({ id, field }) {
      const idx = this.contacts.findIndex(c => c.id === id)

      if(this.contacts[idx].fields.find(f => f.name === field.name) || field.name === 'Имя') {
        alert('Такое поле уже существует!')
      } else {
        this.contacts[idx].fields.push(field)
        this.lastAction = { name: 'add', id }
      }
    },
    // Отмена последнего действия
    cancelLast() {
      const { name, id, data } = this.lastAction
      const idx = this.contacts.findIndex(c => c.id === id)
      const fields = this.contacts[idx].fields

      switch(name) {
        case 'add':
          fields.pop()
          break;
        case 'remove':
          this.contacts[idx].fields = [
            ...fields.slice(0, data.fieldsIdx),
            data.removedField,
            ...fields.slice(data.fieldsIdx)
          ]
          break;
        case 'change':
          fields[data.fieldsIdx].value = data.value
          break;
        case 'change-name':
          this.contacts[idx].name = data.name
      }

      this.lastAction = {}
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  button {
    cursor: pointer;
  }
</style>