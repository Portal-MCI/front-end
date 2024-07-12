<template>
    <div class="my-6 elevation-4 px-2" style="height: 80vh; overflow-y: auto;">
        <h3 class="text-h6 ma-2">Inspeção Planejadas</h3>
        <v-expansion-panels>
            <v-expansion-panel
            v-for="(card, i) in cards"
            :key="i"
            class="mb-2"
            >
                <v-expansion-panel-title v-slot="{ expanded }">
                    <v-row no-gutters>
                        <v-fade-transition leave-absolute>
                        <p v-if="expanded" class="text-center w-100 text-caption">Rota: {{card.Ordem || 'Sem Ordem'}}</p>
                        <v-row
                            v-else
                            no-gutters
                        >
                            <v-col class="d-flex justify-start" cols="3" >
                                <span class="text-caption">Ordem: {{card.Ordem || ''}}</span> 
                            </v-col>
                            <v-col class="d-flex justify-start " cols="5" md="2">
                                <span class="text-caption">Modalidade: {{ card.Modalidade || '' }}</span> 
                            </v-col>
                            <v-spacer></v-spacer>
                       
                            <v-col class="d-flex justify-start" cols="4" md="2">
                                <span class="text-caption">Status: {{ card.status || '' }}</span> 
                            </v-col>
                           
                        </v-row>
                        </v-fade-transition>
               
                    </v-row>
                </v-expansion-panel-title>


                <v-expansion-panel-text>
                    <v-row
                    no-gutters
                    justify="space-around"
                    >
                    <v-col cols="8" sm="3" md="2" class="pa-1">
                        <span class="text-caption">Modalidade</span>
                        <v-select
                        v-model="card.Modalidade"
                        density="compact"
                        :items="['Mecânico', 'Elétrico']"
                        flat
                        required
                        style="height: 30px;"
                        >
                        </v-select>
                    </v-col>

                    <v-col cols="4" sm="2" md="1" class="pa-1">
                      <span class="text-caption">Ordem</span>
                      <v-text-field
                      density="compact"
                    
                      flat
                      required
                      v-model="card.Ordem"
                      style="height: 30px; font-size: 10px !important;"
                      class="text-caption text-center"
                      >
                      </v-text-field>
                    </v-col>


                    <v-col cols="12" sm="7" md="5" class="pa-1">
                      <span class="text-caption">Descrição</span>
                      <v-text-field
                      density="compact"
                     
                      flat
                      required
                      v-model="card.Desc_Insp"
                            style="height: 30px;"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6"   md="2" class="pa-1">
                      <span class="text-caption">Data Inicio</span>
                      <v-text-field
                      density="compact"
                     
                      flat
                      required
                      type="date"
                      v-model="card.Data_inicio"
                    style="height: 30px;"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6"  md="2" class="pa-1">
                      <span class="text-caption">Data Fim</span>
                      <v-text-field
                      density="compact"
     
                      flat
                      required
                      type="date"
                      v-model="card.Data_fim"
                            style="height: 30px;"
                      ></v-text-field>
                    </v-col>


                    <v-col cols="6" sm="6" md="2" class="pa-1">
                      <span class="text-caption">Analista</span>
                      <v-text-field
                      density="compact"
                     
                      flat
                      required
                      v-model="card.Analista"
                            style="height: 30px;"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="6" sm="6" md="2" class="pa-1">
                      <span class="text-caption">Inspetor</span>
                      <v-text-field
                      density="compact"
                   
                      flat
                      required
                       v-model="card.Inspetor"
                            style="height: 30px;"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="3"  sm="2" md="1" class="pa-1">
                      <p class="text-caption w-100 text-center my-2">Escopo</p>
                      <v-icon icon="mdi-database-search" :color="card.Escopo.length>0?'grey-lighten-1':'black'" class="text-h5  w-100 mx-auto " @click="abrirModal('escopo', i)"></v-icon>
                    </v-col>

                    <v-col cols="3" sm="2" md="1" class="pa-1">
                      <p class="text-caption  w-100 text-center my-2">Recurso</p>
                      <v-icon icon="mdi-cogs" class="text-h5 w-100 mx-auto" :color="card.recurso.length>0?'grey-lighten-1':'black'" @click="abrirModal('recurso', i)"></v-icon>
                    </v-col>

                    <v-col cols="6"  sm="3" md="2" class="pa-1 mt-2">
                      <p class="text-caption w-100 text-center">Status</p>
                      <v-text-field
                      density="compact"
                  
                      flat
                      required
                      v-model="card.status"
                      style="height: 30px;"
                      readonly
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col cols="12" sm="1" class="pa-1">
                      <div class="pt-4 h-100 d-flex justify-end align-center">
                        <v-icon icon="mdi-magnify" class="text-h6" @click="true" color="grey-lighten-1"></v-icon>
                        <v-icon icon="mdi-text-box-check" class="text-h6" @click="CarregarInspecao(i)" :color="validacaocamposatual(i)?'black':'grey-lighten-1'"></v-icon>
                        <v-icon icon="mdi-chart-box" class="text-h6" @click="true"></v-icon>
                        <v-icon icon="mdi-trash-can" class="text-h6" @click="removerProgramacao(i)"></v-icon>
                      </div>
                    </v-col>




                    </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>



<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const dialog = ref(false);
const loading = ref(false);
const selectedProgramacao = ref([]);
const recurso = ref('');
const posicao = ref(0);
const procurar = ref('');
const procurarProgramacao = ref('');
const IsvalidError = ref(false)
const headers = [{ title: 'Selecionar Todos', align: 'start', key: 'title' }];
const headersProgramacao = [
  { title: '', align: 'start', key: 'title' },
  { title: '', key: 'actions', align: 'center', sortable: false },
];

const elements = Array.from({ length: 30 }, (_, i) => ({
  title: `Espaço reservado para os Locais s2i-PO${String(i + 1).padStart(5, '0')}`,
}));

const cards = ref([]);

onMounted(() => {
  const storedCards = localStorage.getItem('cards');
  if (storedCards) {
    cards.value = JSON.parse(storedCards);
  }
});


const validacaoUltimocampos = () =>{
    const ultimoCard = cards.value[cards.value.length - 1];
    return ultimoCard.Modalidade !== '' 
      && ultimoCard.Ordem !== '' 
      && ultimoCard.Desc_Insp !== '' 
      && ultimoCard.Data_inicio !== '' 
      && ultimoCard.Data_fim !== '' 
      && ultimoCard.Inspetor !== '' 
      && ultimoCard.Escopo.length > 0;
}

const validacaocamposatual = (i) =>{
    const CardAtual = cards.value[i];
    return CardAtual.Modalidade !== '' 
      && CardAtual.Ordem !== '' 
      && CardAtual.Desc_Insp !== '' 
      && CardAtual.Data_inicio !== '' 
      && CardAtual.Data_fim !== '' 
      && CardAtual.Inspetor !== '' 
      && CardAtual.Escopo.length > 0;
}




const addCard = () => {

  IsvalidError.value = false
  if(cards.value.length>0){
    if(validacaoUltimocampos()){
        cards.value.push({
        Modalidade: '',
        Ordem: '',
        Desc_Insp: '',
        Data_inicio: '',
        Data_fim: '',
        Analista: '',
        Inspetor: '',
        Escopo: '',
        recurso: '',
        status: 'Pendente',
        });
        return
      }
      IsvalidError.value = true
      return
  }

  cards.value.push({
    Modalidade: '',
    Ordem: '',
    Desc_Insp: '',
    Data_inicio: '',
    Data_fim: '',
    Analista: '',
    Inspetor: '',
    Escopo: '',
    recurso: '',
    status: 'Pendente',
  });
};

const opcao = ref('');

const abrirModal = (op, i) => {
  posicao.value = i;
  selectedProgramacao.value = cards.value[i].Escopo || [];
  recurso.value = cards.value[i].recurso || '';
  opcao.value = op;
  dialog.value = true;
};

const removerProgramacao = (index) => {
  IsvalidError.value = false
  cards.value.splice(index, 1);
  localStorage.setItem('cards', JSON.stringify(cards.value));
};

const removerProgramacaoSelecionada = (item) => {
  const index = selectedProgramacao.value.findIndex((element) => element.title === item.title);
  if (index !== -1) {
    selectedProgramacao.value.splice(index, 1);
  }
};

const addicionarEscopo = () => {
  cards.value[posicao.value].Escopo = selectedProgramacao.value;
  dialog.value = false;
};

const addicionarRecurso = () => {
  cards.value[posicao.value].recurso = recurso.value;
  dialog.value = false;
};

watch(cards, (newValue) => {
  localStorage.setItem('cards', JSON.stringify(newValue));
}, { deep: true });

const CarregarInspecao = (index) =>{
  if(!validacaocamposatual(index))
  {
    IsvalidError.value = true
    return
  }
  router.push(`/inspecao/${index}`)
}
</script>

<style>
input:focus {
box-shadow: 0 0 0 0;
outline: 0;
}
</style>
