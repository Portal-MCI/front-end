<template>
       <v-row dense>
            <v-col cols="12" md="10"
            class=" pa-2"
            >
            <div
            style="position: relative; border: 1px solid black; "
            class=" rounded  mx-auto mt-4 px-4 h-100 pt-4"
            ><p style="position: absolute;  top: -10px; z-index: 1; left: 20px;" class="bg-white px-2 text-caption">Relatar Inspeção Selecionada</p>
                <v-row dense>
                    <v-col cols="8" sm="3" md="1" class="pa-0">
                        <div>
                            <p style="font-size: 10px;" class="ml-2">Modalidade</p>
                            <input type="text" style="font-size: 10px;" class="w-100 pX-2 border mt-1 rounded text-center" v-model="modalidade" readonly>
                        </div>

                    </v-col>
                    <v-col cols="4" sm="2" md="1" class="pa-0">
                        <div class="mx-1">
                            <p style="font-size: 10px;" class="ml-2">Ordem</p>
                            <input type="text"  style="font-size: 10px;" class="w-100 px-2 border mt-1 rounded text-center" v-model="ordem" readonly>
                        </div>

                    </v-col>
                    <v-col cols="12" sm="7" md="4" class="pa-0">
                        <div>
                            <p style="font-size: 10px;" class="ml-2">Descrição da Inspeção</p>
                            <input type="text"  style="font-size: 10px;" class="w-100 px-2 border mt-1 rounded" v-model="descricao" readonly>
                        </div>

                    </v-col>
                    <v-col cols="6" sm="4" md="2" class="pa-0">
                        <div class="mx-1">
                            <p style="font-size: 10px;" class="text-center">Data Inicio</p>
                            <input type="date"  style="font-size: 10px;" class="w-100 px-2 border mt-1 rounded text-center" v-model="Data_inicio" readonly>
                        </div>

                    </v-col>
                    <v-col cols="6" sm="4" md="2" class="pa-0">
                        <div>
                            <p style="font-size: 10px;" class="text-center">Data Fim</p>
                            <input type="date"  style="font-size: 10px;" class="w-100 px-2 border mt-1 rounded text-center" v-model="Data_fim" readonly>
                        </div>

                    </v-col>
                    <v-col cols="12" sm="4" md="2" class="pa-0">
                        <div class="mx-1">
                            <p style="font-size: 10px;" class="text-center">status</p>
                            <input type="text" style="font-size: 10px;" class="w-100 px-2 border mt-1 rounded text-center" v-model="status" readonly>
                        </div>

                    </v-col>
                </v-row>

            </div>
    
            </v-col>
            <v-spacer></v-spacer>

            <v-col cols="2"
            class=" d-none d-md-block pa-2"
            >
            <div
            style="position: relative; border: 1px solid black;"
            class=" rounded  mx-auto mt-4 h-100  px-2 pa-0"
            ><p style="position: absolute;  top: -10px; z-index: 1; left: 20px;" class="bg-white px-2 text-caption">Escopo/Avanço</p>
            
    
            <div class="text-caption d-flex flex-column justify-center  h-100 ">
                    <p ><span class="d-none d-lg-inline">Locais</span> Planejados = <span>{{ escopoElementos.length }}</span></p>
                    <p><span class="d-none d-lg-inline">Locais</span> Relatados = <span>0 <span >(0%)</span></span></p>
            </div>
            </div>
            </v-col>
        </v-row>

</template>


<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const id = route.params.id;
const modalidade = ref('');
const ordem = ref('');
const descricao = ref('');
const Data_inicio = ref('');
const Data_fim = ref('');
const status = ref('');
const escopoElementos = ref([]);

onMounted(() => {
  const storedCards = localStorage.getItem('cards');
  if (storedCards) {
    const cards = JSON.parse(storedCards);
    const card = cards[id];
    modalidade.value = card.Modalidade
    ordem.value = card.Ordem
    descricao.value = card.Desc_Insp
    Data_inicio.value = card.Data_inicio
    Data_fim.value = card.Data_fim
    status.value = card.status
    escopoElementos.value = card.Escopo
  }
});
</script>