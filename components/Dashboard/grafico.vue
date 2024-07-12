<template>
    <div class="py-6 mt-6">
        <div>

        
        <v-row>
            <v-col cols="12"  sm="4">
                <p class="text-caption mb-2 ml-4 text-disabled">Tipo de Filtro</p>
                <v-select
                v-model="selectFilter"
                :items="['Filtro por Data', 'Filtro por PLocais']"
                density="compact"
              
                
                >
                    <template v-slot:selection="{ item }">
                        <p class="text-caption font-weight-bold">{{ item.title }}</p>
                    </template> 
                </v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6" sm="3">
                <p class="text-caption mb-2 ml-4 text-disabled">Data Inicial</p>
                <v-text-field type="date" density="compact"></v-text-field>
            
            </v-col>

            <v-col cols="6" sm="3">
                <p class="text-caption mb-2 ml-4 text-disabled">Data Final</p>
                <v-text-field type="date" density="compact"></v-text-field>
            </v-col>
        </v-row>
        <div class="text-end">
            <v-btn
            variant="flat"
            color="indigo-darken-4"
            >Filtrar</v-btn>
        </div>

       <v-card
       height="300"
       elevation="4"
       class="mt-4 border"
       >
       <v-card-item>
        <v-img src="/line_chart_complex.png" height="280" ></v-img>
       </v-card-item>
       </v-card>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectFilter =ref('Filtro por Data')
</script>