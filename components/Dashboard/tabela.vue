<template>
    <div class="">
            <v-card flat class="mt-10">
                <v-card-item>
                    <v-row>
                    <v-col cols="12" sm="4">
                        <v-card-title>
                            <v-icon icon="mdi-lan" class="mr-4 text-body-2" color="indigo-darken-4" ></v-icon>
                            <v-text class="font-weight-black text-indigo-darken-4 text-caption">Locais Cadastrados</v-text>
                        </v-card-title>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="6" md="4">
                        <div
                        class="border rounded px-1 hoverfiltro"
                        >
                        <v-icon icon="mdi-magnify" class="text-caption"></v-icon>
                        <input 
                        v-model="search"
                        class="text-caption pa-1"
                        placeholder="Filtrar"
                        style="width: 90%;"
                        >
                        
                        </div>
                        
                    </v-col>
                </v-row> 

                </v-card-item>
                  

                <v-data-table-virtual
                :headers="headers"
                :items="[]"
                :search="search"
                max-height="400"
                hover
                fixed-header
                density="compact"
                class="text-caption my-10"
                no-data-text="Sem Locais Cadastrados !"
                >
                

                <template v-slot:header.tag="{ column }" >
                    <p class="text-disabled text-caption"> {{ column.title }} </p>
                </template>

                <template v-slot:header.descricao="{ column }" >
                    <p class="text-disabled text-caption"> {{ column.title }} </p>
                </template>

                <template v-slot:header.tipoEquipamento="{ column }" >
                    <p class="text-disabled text-caption"> {{ column.title }} </p>
                </template>

                <template v-slot:header.programacao="{ column }" >
                    <p class="text-disabled text-caption"> {{ column.title }} </p>
                </template>

                <template v-slot:header.inspecao="{ column }" >
                    <p class="text-disabled text-caption"> {{ column.title }} </p>
                </template>
              <!--  <template v-slot:item.codigo="{ item }" >
                    <v-text class="font-weight-black">{{item.codigo}}</v-text>
                </template>
                <template v-slot:item.tipoinstal="{ item }" >
                    <v-chip  :text=item.tipoinstal  variant="text" :color="item.tipoinstal === 'Elétrico'? 'teal-darken-4':'indigo-darken-4'"  size="small" ></v-chip>
                </template>-->

                <template v-slot:item.tag="{ item }" >
                    <v-text class="font-weight-black">{{item.tag}}</v-text>
                </template>

                <template v-slot:item.tipoEquipamento="{ item }" >
                    <v-chip  :text="item.tipoEquipamento == 'M'? 'Mecânico':'Elétrico'"  variant="tonal" :color="item.tipoEquipamento === 'M'? 'black':'indigo-darken-4'"  size="small" ></v-chip>
                </template>

                <template v-slot:item.ativoInativo="{ item }" >
                    <v-chip  :text="item.ativoInativo == 'A'? 'Ativo':'Inativo'"  variant="outlined" :color="item.ativoInativo === 'A'? 'green-accent-4':'red-accent-4'"  size="small" ></v-chip>
                </template>

                <template v-slot:item.dataRegistro="{ item }" >
                    <v-text class="text-teal-darken-4"></v-text>
                </template>

                <template v-slot:item.actions="{ item }" >
                    <v-btn  color="#1A237E" icon="mdi-pencil"  variant="text"  size="small"></v-btn>
                </template>

                </v-data-table-virtual>
            </v-card>  
    </div>
</template>



<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'dms',
});



const search = ref('');

const headers = [
  {
    align: 'start',
    key: 'tag',
    title: 'Local',
    width:'25%'
  },
  { key: 'descricao', title: 'Descrição do Local' , width:'40%'},
  { key: 'tipoEquipamento', title: 'Equipamento', align: 'center', },
  //{ key: 'details', title: 'Detalhes da Instalação' },
  { key: 'programacao', title: 'Total Programação', align: 'center' },
  { key: 'inspecao', title: 'Total Inspeção', align: 'center' },
  //{ key: 'dataAtualizacao', title: 'Últ. Atualização', align: 'center' }
];

  


</script>

<style>
.hoverfiltro:hover{
    cursor: pointer;
}
</style>