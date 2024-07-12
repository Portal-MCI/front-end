<template>
    <div>
        <v-btn variant="flat" color="grey" @click="dialog = true" >Inserir Foto</v-btn>
        <!--Modal-->
        <v-dialog
        v-model="dialog"
        width="auto"
        persistent
        >
            <v-card
                max-width="400"
                height="400"
            >
                <v-card-title
                class="bg-indigo-darken-4"
                >Registrar Evidência</v-card-title>

                <v-card-item >
                    <div class="border border-md mx-auto border-dashed d-flex justify-center align-center" style="height: 250px; width: 300px; position: relative;">
                        
                        <v-img
                        v-if="imageUrl"
                        :src="imageUrl"
                        height="300"
                        width="250"
                        contain
                        class="my-4"
                        ></v-img>
                        <v-icon icon="mdi-file-image-plus" class="text-h4" v-else></v-icon>
                        <input
                        type="file"
                        accept="image/*"
                        @change="onFileChange"
                        style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0;"
                        class="hover-foto"
                        />
                        
                       
                    </div>
                </v-card-item>

                <v-card-item >
                    <hr>
                    <div class="text-end mt-2">
                        <v-btn size="small" variant="text" color="red" @click="dialog = false">Cancelar</v-btn>
                        <v-btn size="small" class="ml-4" color="indigo-darken-4" variant="flat">Salvar</v-btn>
                    </div>
                </v-card-item>

            </v-card>

        </v-dialog>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref (false)
const imageUrl = ref(null)

const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageUrl.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>