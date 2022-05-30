<template>
  <div>
      <v-list-item
      :class="{'cyan lighten-4':tarefa.Concluido}" 
      @click="tarefa.Concluido = !tarefa.Concluido"
      >
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.Concluido"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
              :class="{'text-decoration-line-through': tarefa.Concluido}"
              >{{tarefa.Titulo}}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn 
              icon
              @click.stop="handleRemoveTarefa(tarefa.id)">
                <v-icon color="red accent-2">mdi-trash-can</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props:['tarefa'],
  methods:{
    handleRemoveTarefa(id){
      this.$store.commit('removeTarefa', id)
    }
  }
}
</script>

<style>

</style>