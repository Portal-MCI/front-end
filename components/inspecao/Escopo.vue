<template >
   
        <!--Inspeção-->
        <v-row>
            <v-col cols="12" md="5"
            class="pa-2 "
            
            >
                <div
                style="position: relative; border: 1px solid black; height: 400px"
                class=" rounded  mx-auto mt-4 elevation-4 px-2"
                ><p style="position: absolute;  top: -10px; z-index: 1; left: 20px;" class="bg-white px-2 text-caption">Escopo</p>
                <div class="d-flex text-caption w-100">
                    
                    <div class="my-2 w-100">
                            <v-icon icon="mdi-magnify"></v-icon>
                            <input type="search" v-model="procurar" class="border mt-2 px-2 py-1 rounded text-caption w-50" placeholder="procurar...">
                    </div>
                    
                </div>  
                    <v-data-table-virtual
                    :items="escopoElementos"
                    :headers="headers"
                    :search="procurar"
                    height="300"
                    show-select
                    hover
                    fixed-header
                    density="compact"
                    class=""
                    no-data-text="Sem dados Correspondentes!"
                    loading-text="Carregando os Dados!"
                    return-object
                    v-model="selectedPosicoesJson"
                    select-strategy="single"
                    >  
                 


                    <template v-slot:item.title="{ value }">
                            <div  style="font-size: 10px">
                                    {{ value }}
                            </div>
                    </template>

                    <template v-slot:item.status="{ value }">
                       

                            <v-chip
                            size="x-small"
                            label                            
                            >
                            Aguardando
                            </v-chip>

                            


                    </template>
                            
                    </v-data-table-virtual> 
                </div>
            </v-col>





                 <v-spacer></v-spacer>

                <v-col cols="12" md="7"
                class="pa-2"
                >
                
                    <div
                    style="position: relative; border: 1px solid black; height: 400px"
                    class=" rounded  mx-auto mt-4 elevation-4 px-2"
                    ><p style="position: absolute;  top: -10px; z-index: 1; left: 20px;" class="bg-white px-2 text-caption">Relatar Local Selecionado</p>
                        
               

                       
                        <v-row  dense class="pt-6">
                          

                            
                            <v-col cols="12" sm="6" md="5" lg="6">
                            
                                <p  class=" ml-2 font-weight-black " style="font-size: 10px;">Local</p>
                                <input type="text"  style="font-size: 10px;" class="w-100 border px-3 py-1 rounded " readonly :value="ProgramacaoLocal"> 
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="6" sm="3" md="4" lg="3" v-if="ProgramacaoLocal!=='Aguardando Seleção...'">
                                <p  class=" ml-2 font-weight-black" style="font-size: 10px;" >Situação</p>
                                <v-select
                                v-model="Situacao"
                                :items="['Com anomalia', 'Perfeitas Condições', 'Indisponivel']"
                                density="compact"
                                variant="outlined"
                                size="x-small"
                                >
                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 9px;" class="font-weight-black ">{{ item.title }}</span>
                                </template>

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
                                </v-select>
                            </v-col>

                            

                            <v-col cols="6" sm="3"  v-if="Situacao == 'Indisponivel'">
                                <p  class="  ml-2 font-weight-black d-lg-none" style="font-size: 10px;">Motivo</p>
                                <p  class=" ml-2 font-weight-black d-none d-lg-block" style="font-size: 10px;">Motivo Indisponibilidade</p>
                                <v-select
                                :items="['Bloqueado', 'Carga baixa', 'Desativado', 'Desligado', 'Difícil acesso', 'Não localizado']"
                                density="compact"
                                variant="outlined"
                                >
                                <template v-slot:selection="{ item}">
                                    <span style="font-size: 9px;" class="font-weight-black ">{{ item.title }}</span>
                                </template>

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
                            
                                </v-select>
                                
                            </v-col>
                       
                        </v-row>



                        <!--CAMPO RESULTADO-->
                        <div class="" style="max-height: 220px" v-if="Situacao">
                     
                                
                          
                        </div>

                        <div class="text-end d-flex justify-end" v-if="Situacao" style="position: absolute; bottom: 10px; right: 10px;">
                            <InspecaoModalinspecaoRegistrofoto v-if="Situacao == 'Perfeitas Condições'" />
                            <InspecaoModalinspecaoRegistroanomalia v-if="Situacao == 'Com anomalia'" />
                            <v-btn variant="flat"  color="indigo-darken-4" class="ml-2">Salvar</v-btn>
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
const escopoElementos = ref([])

onMounted(() => {
  const storedCards = localStorage.getItem('cards');
  if (storedCards) {
    const cards = JSON.parse(storedCards);
    const card = cards[id];
    modalidade.value = card.Modalidade
    escopoElementos.value = card.Escopo

  }
});






const procurar = ref('');
const ProgramacaoLocal = ref('Aguardando Seleção...')
const selectedPosicoesJson  = ref(null)
const Situacao = ref('')
const imageUrl = ref(null)




const headers= [
        {title: 'Locais', align: 'start', key: 'title',   },
        { title: 'status', key: 'status', width: "30%", align: 'center',},
 ]


const elements = [
    {title: 'Espaço reservado para os Locais s2i-PO00001', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00002', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00003', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00004', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00005', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00006', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00007', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00008', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00009', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00010', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00011', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00012', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00013', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00014', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00015', status: 'Aguardando'},
    {title: 'Espaço reservado para os Locais s2i-PO00016', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00017', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00018', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00019', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00020', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00021', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00022', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00023', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00024', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00025', status: 'Sem anomalia'},
    {title: 'Espaço reservado para os Locais s2i-PO00026', status: 'Indisponivel'},
    {title: 'Espaço reservado para os Locais s2i-PO00027', status: 'Indisponivel'},
    {title: 'Espaço reservado para os Locais s2i-PO00028', status: 'Indisponivel'},
    {title: 'Espaço reservado para os Locais s2i-PO00029', status: 'Indisponivel'},
    {title: 'Espaço reservado para os Locais s2i-PO00030', status: 'Indisponivel'}
];


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


watch(selectedPosicoesJson, (newValue) => {
    Situacao.value = '';
    ProgramacaoLocal.value = 'Aguardando Seleção...';
    imageUrl.value = null;
  if (newValue.length>0) {
    ProgramacaoLocal.value = newValue[0].title
    return
  }
})






</script>


<style>
        input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        }

        .hover-foto:hover{
            cursor: pointer;
        }
        .hiddenscrool::-webkit-scrollbar { 
	        display: none;
        }

        .menu-selects:hover{
            background-color: #E0E0E0;
            cursor: pointer;
        }

</style>