<template >
    <div>
        <v-btn variant="flat" color="grey" @click="dialog = true" >Registrar Anomalia</v-btn>
   
     <v-dialog
        v-model="dialog"
        width="auto"
        persistent
        >

        <v-card
            max-width="400"
            height="700"
            >
                <v-card-title
                class="bg-indigo-darken-4"
                >Registro de Anomalia</v-card-title>
                
                <v-card-item>
                    <v-row dense>
                        <v-col cols="9">
                            <span class="" style="font-size: 10px;">Local</span>
                            <input type="text" readonly class="border rounded px-2 w-100" style="font-size: 10px;" v-model="local">
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="3">
                            <span class="text-center w-100" style="font-size: 10px;">Modalidade</span>
                            <input type="text" readonly class="border rounded px-2  w-100 text-center" v-model="modalidade" style="font-size: 10px;">
                        </v-col>
                    </v-row>


                    <!--inspeção e foto-->
                    <v-row dense > 
                        <v-col cols="6" >
                            <div style="height: 280px; overflow-y: auto" class="hiddenscrool">

                            
                            <div class="w-100 pa-0 " style="height: 40px;">
                                <p class=" ml-2 " style="font-size: 10px;">Técnica</p>
                                <v-select
                                :items="modalidade == 'Elétrico'?['Sensitiva', 'Termografia', 'Ultrassom']:['Sensitiva', 'Análise de Vibração']"
                                density="compact"
                                size="small"
                                variant="outlined"
                                single-line
                              
                                >
                                <template v-slot:item="{ item, props }">
                               
                                    <p
                                    @click="props.onClick"
                                    @mouseenter="props.onMouseenter"
                                    @mouseleave="props.onMouseleave"
                                    v-bind="props"
                                    style="font-size: 10px;"
                                    class="tex-center w-100 py-1 px-2 menu-selects"
                                    >
                                    {{ item.title }}
                                    </p>
                              
                                </template>

                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 10px;" >{{ item.title }}</span>
                                </template>
                                </v-select>
                            </div>

                            <div class="w-75 pa-0" style="height: 40px;">
                                <p class=" ml-2 " style="font-size: 10px;">Status</p>
                                <v-select
                                :items="['Sanada', 'Pendente']"
                                density="compact"
                                size="small"
                                variant="outlined"
                                single-line
                                >
                                <template v-slot:item="{ item, props }">
                               
                                    <p
                                    @click="props.onClick"
                                    @mouseenter="props.onMouseenter"
                                    @mouseleave="props.onMouseleave"
                                    v-bind="props"
                                    style="font-size: 10px;"
                                    class="tex-center w-100 py-1 px-2 menu-selects"
                                    >
                                    {{ item.title }}
                                    </p>
                         
                                </template>

                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 10px;" >{{ item.title }}</span>
                                </template>
                                </v-select>

                            </div>
                            <div class="w-100 pa-0" style="height: 40px;">
                                <p class=" ml-2 " style="font-size: 10px;">Ponto</p>
                                <v-select
                                :items="['Acoplamento', 'Acumulador', 'Arrastador', 'Balança', 'Bandejamento de cabo', 'Barragem', 'Base metálica', 'Base civil']"
                                density="compact"
                                size="small"
                                variant="outlined"
                                single-line
                                no-data-text="sem dados equivalentes"
                                class="text-caption"
                                >

                                <template v-slot:item="{ item, props }">
                               
                                    <p
                                    @click="props.onClick"
                                    @mouseenter="props.onMouseenter"
                                    @mouseleave="props.onMouseleave"
                                    v-bind="props"
                                    style="font-size: 10px;"
                                    class="tex-center w-100 py-1 px-2 menu-selects"
                                    >
                                    {{ item.title }}
                                    </p>
                                
                                </template>

                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 10px;">{{ item.title }}</span>
                                </template>
                                </v-select>

                            </div>
                            <div class="w-100 pa-0" style="height: 40px;">
                                <p class=" ml-2 " style="font-size: 10px;">Sintoma</p>
                                <v-select
                                :items="['Acionamento anormal', 'Alargamento', 'Amassado(a)', 'Aterramento elétrico', 'Atrito', 'Ausente', 'Baixa vazão', 'Cabo de terra irregular']"
                                density="compact"
                                size="small"
                                variant="outlined"
                                single-line
                                no-data-text="sem dados equivalentes"
                                class="text-caption"
                                >

                                <template v-slot:item="{ item, props }">
                               
                                    <p
                                    @click="props.onClick"
                                    @mouseenter="props.onMouseenter"
                                    @mouseleave="props.onMouseleave"
                                    v-bind="props"
                                    style="font-size: 10px;"
                                    class="tex-center w-100 py-1 px-2 menu-selects"
                                    >
                                    {{ item.title }}
                                    </p>
                         
                                </template>

                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 10px;" >{{ item.title }}</span>
                                </template>
                                </v-select>

                            </div>

                            <div class="w-100 pa-0" style="height: 40px;" v-if="false">
                                <p class=" ml-2 " style="font-size: 10px;">Causa</p>
                                <v-select
                                :items="['Sensitiva', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                density="compact"
                                size="small"
                                variant="outlined"
                                single-line
                                no-data-text="sem dados equivalentes"
                                class="text-caption"
                                >
                                <template v-slot:item="{ item, props }">
                               
                                    <p
                                    @click="props.onClick"
                                    @mouseenter="props.onMouseenter"
                                    @mouseleave="props.onMouseleave"
                                    v-bind="props"
                                    style="font-size: 10px;"
                                    class="tex-center w-100 py-1 px-2 menu-selects"
                                    >
                                    {{ item.title }}
                                    </p>
                                
                                </template>

                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 10px;" >{{ item.title }}</span>
                                </template>
                                </v-select>

                            </div>

                            <div class="w-100 pa-0" style="height: 40px;">
                                <p class=" ml-2 " style="font-size: 10px;">Recomendação</p>
                                <v-select
                                :items="['Ajustar', 'Alinhar', 'Aliviar', 'Analisar óleo', 'Aterrar', 'Balancear', 'Calibrar', 'Checar projeto', 'Completar', 'Desamassar', 'Destravar rolo', 'Drenar', 'Esfriar temperatura', 'Fixar', 'Identificar', 'Instalar', 'Instalar parafuso', 'Limpar', 'Lubrificar', 'Modificar projeto', 'Monitorar', 'Montar', 'Normalizar', 'Normalizar nível', 'Padronizar', 'Pintar', 'Projetar', 'Reapertar', 'Reavaliar', 'Recuperar', 'Regularizar', 'Reparar', 'Reposicionar', 'Retirar umidade', 'Sanar vazamento', 'Substituir', 'Tensionar']"
                                density="compact"
                                size="small"
                                variant="outlined"
                                single-line
                                no-data-text="sem dados equivalentes"
                                class="text-caption"
                                >
                                <template v-slot:item="{ item, props }">
                               
                                    <p
                                    @click="props.onClick"
                                    @mouseenter="props.onMouseenter"
                                    @mouseleave="props.onMouseleave"
                                    v-bind="props"
                                    style="font-size: 10px;"
                                    class="tex-center w-100 py-1 px-2 menu-selects"
                                    >
                                    {{ item.title }}
                                    </p>
                                
                                </template>

                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 10px;" >{{ item.title }}</span>
                                </template>
                                </v-select>

                            </div>

                            <div class="w-75 pa-0" style="height: 40px;">
                                <p class=" ml-2 " style="font-size: 10px;">Prazo (dias)</p>
                                <v-select
                                :items="['10 dias', '21 dias', '3 dias', '90 dias', '30 dias']"
                                density="compact"
                                size="small"
                                variant="outlined"
                                single-line
                                >
                                <template v-slot:item="{ item, props }">
                               
                                    <p
                                    @click="props.onClick"
                                    @mouseenter="props.onMouseenter"
                                    @mouseleave="props.onMouseleave"
                                    v-bind="props"
                                    style="font-size: 10px;"
                                    class="tex-center w-100 py-1 px-2 menu-selects"
                                    >
                                    {{ item.title }}
                                    </p>
                                
                                </template>

                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 10px;" >{{ item.title }}</span>
                                </template>
                                </v-select>
                            </div>
                        </div>
                        </v-col>

                        <v-spacer></v-spacer>
                        <v-col cols="6" >
                            <div style="height: 280px;" class="d-flex justify-center align-center" >
                                <div class="w-100 border border-md border-dashed d-flex justify-center align-center flex-column" style="height: 230px;">
                                    <v-icon icon="mdi-image-plus-outline" class="text-h4"></v-icon>
                                    <p class="text-caption font-weight-thin text-disabled">Anexar imagem aqui</p>
                                </div>
                            </div>
                          
                        </v-col>
                    </v-row>


                    <v-row dense>
                        <v-col cols="12">
                            <span class="ml-2" style="font-size: 10px;">Detalhes Adicionais</span>
                            <input type="text"  class="border rounded px-2 py-1 w-100" style="font-size: 10px;">
                        </v-col>
                    </v-row>
                </v-card-item>





                <v-card-item >
                    <hr>
                    <div class="text-end mt-1">
                        <v-btn size="small" variant="text" color="red" @click="dialog = false">Cancelar</v-btn>
                        <v-btn size="small" class="ml-4" color="indigo-darken-4" variant="flat">Salvar</v-btn>
                    </div>
                </v-card-item>


            </v-card>


        </v-dialog>
    </div>

</template>



<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const id = route.params.id;
const modalidade = ref('');
const escopoElementos = ref([])
const local = ref('Espaço reservado para os Locais s2i-PO00001')

onMounted(() => {
  const storedCards = localStorage.getItem('cards');
  if (storedCards) {
    const cards = JSON.parse(storedCards);
    const card = cards[id];
    modalidade.value = card.Modalidade
    escopoElementos.value = card.Escopo

  }
});


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