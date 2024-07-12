<template >
    <div>  
        <v-card max-width="900" class="mx-auto mt-6" flat>

            <v-card-item class="">
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            prepend-inner-icon="mdi-magnify"
                            single-line
                            flat                       
                            variant="outlined"
                            rounded-lg
                            placeholder="Pesquisar..."
                            density="comfortable"
                            ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-btn append-icon="mdi-plus" block color="#1A237E" @click="abrirModal('novo', null)">Novo</v-btn>
                    </v-col>
                </v-row>
            </v-card-item>

            <v-card-item class="pa-0">
                <v-table density="compact" hover fixed-header class="border rounded-t-lg" height="330">
                    <thead>
                        <tr>
                            <th class=" pa-4 text-center border-e-thin bg-indigo-lighten-5 text-h6">Nome</th>
                            <th class=" pa-4 text-center border-e-thin bg-indigo-lighten-5 text-h6">Situação</th>
                            <th class=" pa-4 text-center  bg-indigo-lighten-5 text-h6">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(sistema, i) in listSistemas"
                        :key="i"
                        >
                            <td class="text-body-1 border-e-thin">{{ sistema.nome}}</td>
                            <td class="border-e-thin"><v-switch inset color="success" width="50%"  density="compact" style="height: 70%;" class="mx-auto" v-model="sistema.situacao" ></v-switch></td>
                            <td class="text-center"> 
                                <v-icon icon="mdi-file-sign" class="mr-2" @click="abrirEditar(sistema.nome, sistema.situacao, 'edit',i)"></v-icon> 
                                <v-icon icon="mdi-trash-can" @click="abrirModal('delete', i)"></v-icon>
                            </td>
                        </tr>                       
                    </tbody>
                </v-table>
            </v-card-item>
        </v-card>










        <!--modal-->
        <v-dialog
        v-model="dialog"
        width="auto"
        :persistent="opcao !== 'novo'"
        >
        <!-- Excluir -->
        <v-card
            min-width="400"
            prepend-icon="mdi-delete"
            text="Tem certeza que pretende excluir permanentemnete esse item?"
            title="Mensagem do Sistema"
            v-if="opcao=='delete'"
            
        >
            <template v-slot:actions>
            
            <v-btn
                class="ms-auto"
                text="Confirmar"
                @click="removerSistema(index)"
                color="red"
                variant="flat"
            ></v-btn>
            <v-btn @click="dialog = false">
            Cancelar
            </v-btn>
            </template>
        </v-card>


        <!--Editar-->
        <v-card
            v-else-if="opcao=='edit'"
            width="600"
            prepend-icon="mdi-update"
            title="Editar"
        >

        <v-card-item class="mt-4">
            <v-row>
                <v-col cols="8"><v-text-field
                v-model="nomeForm"
        
                required
                variant="outlined"
                density="compact"
                placeholder="Nome*"
              ></v-text-field></v-col>
            
            <v-spacer></v-spacer>
            <v-col cols="4">
                <v-select
                :items="['Ativo', 'Desativado']"
                variant="outlined"
                density="compact"
                required
                v-model="situacaoForm"
                placeholder="Situação"
              ></v-select>
            </v-col>
        </v-row>
        </v-card-item>

           <template v-slot:actions>
            <v-btn
                class="ms-auto"
                text="Atualizar"
                :disabled="!validateForm() || validateEditar()"
                @click="editarSistema()"
                :variant="validateEditar()? 'default':'flat'"
                :color="validateEditar()? 'black':'yellow'"
            ></v-btn>
            <v-btn @click="dialog = false">
            Cancelar
            </v-btn>
            </template>
        </v-card>



         <!--Adicionar-->
         <v-card
            v-else
            width="600"
            prepend-icon="mdi-pencil"
            title="Adicionar novo Sistema"
        >
        <v-card-item class="mt-4">
            <v-row>
                <v-col cols="8"><v-text-field
                v-model="nomeForm"
                required
                variant="outlined"
                density="compact"
                placeholder="Nome*"
              ></v-text-field></v-col>
            
            <v-spacer></v-spacer>
            <v-col cols="4">
                <v-select
                :items="['Ativo', 'Desativado']"
                variant="outlined"
                density="compact"
                required
                v-model="situacaoForm"
                placeholder="Situação"
              ></v-select>
            </v-col>
        </v-row>
        </v-card-item>
        




            <template v-slot:actions>
            <v-btn
                class="ms-auto"
                text="Salvar"
                :disabled="!validateForm()"
                @click="onSubmit"
                color="success"
                variant="flat"
            ></v-btn>
            <v-btn @click="dialog = false">
            Cancelar
            </v-btn>
            </template>
        </v-card>




        </v-dialog>
        
      


    </div>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref (false)

const listSistemas = ref([
    {nome: 'S2i - Sistema de Inspeção Avulsa', situacao: true},
    {nome: 'DM254 - Arvore de Falha', situacao: true},
    {nome: 'DM242 - Plano Mestre de Inspeção', situacao: false},
    {nome: 'S3i® - Sistema Inteligente de Inspeção', situacao: false},
])


const opcao = ref('')
const index = ref(null)
const nomeForm = ref ('')
const situacaoForm = ref (null)

const nomeForm1 = ref ('')
const situacaoForm1 = ref (null)

const removerSistema = (index) => {
    listSistemas.value.splice(index, 1)
    dialog.value = false;
}

const abrirModal = (op, i) => {
    nomeForm.value = ''
    situacaoForm.value = null
    opcao.value = op;
    index.value = i
    dialog.value = true;
    
}

const abrirEditar = (sistemaNome, sistemaSituacao, op, i) => {
    nomeForm.value = sistemaNome
    situacaoForm.value = sistemaSituacao ? 'Ativo' : 'Desativado'
    opcao.value = op;
    index.value = i
    nomeForm1.value = sistemaNome
    situacaoForm1.value = sistemaSituacao ? 'Ativo' : 'Desativado'
    dialog.value = true;
}


const editarSistema = () => {
    const opcoes = situacaoForm.value === 'Ativo' ? true : false;
    listSistemas.value[index.value] = { nome: nomeForm.value, situacao: opcoes };
    dialog.value = false;
};




const adicionarSistema = () => {
    const opcoes = situacaoForm.value === 'Ativo' ? true : false;
    const nomeNew = nomeForm.value;
    listSistemas.value.push({nome: nomeNew , situacao: opcoes} )
    dialog.value = false;
   
}

const onSubmit = () => {
  if (!validateForm()) return;
  adicionarSistema()
  dialog.value = false;
};


const validateForm = () => {
  return (
    nomeForm.value.trim() !== '' &&
    situacaoForm.value.trim() !== ''
  );
};

const validateEditar = () =>{
    return (
    (nomeForm.value === nomeForm1.value) &&
    (situacaoForm.value === situacaoForm1.value)
  );
}
</script>

