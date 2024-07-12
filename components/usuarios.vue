<template >
    <div>
        <v-card max-width="90%" class="mx-auto mt-6" flat>
            <v-card-item>
                <v-row>
                    <v-col cols="4" class="py-4">
                        <v-text-field
                        :loading="loading"
                        append-inner-icon="mdi-magnify"
                        density="comfortable"
                        label="Pesquisar"
                        variant="solo"
                        hide-details
                        single-line
                        size="x-small"
                        v-model="procurar"
                        ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="2">
                        <v-btn append-icon="mdi-plus" block color="#1A237E">Novo</v-btn>
                    </v-col>
                </v-row>
            </v-card-item>

                
            <v-card-item>
                <v-data-table-virtual
                :items="listUsuarios"
                :headers="headersUsuarios"
                :search="procurar"
                height="370"
                hover
                fixed-header
                density="compact"
                class="text-caption border-0"
                no-data-text="Sem dados Correspondentes!"
                loading-text="Carregando os Dados!"
                >                  
                    <template v-slot:item="{ item }">
                    <tr class="border-0">
                        <td class="border-0 bg-white">
                            <div class="border pa-1">{{ item.nome }}</div>
                          
                        </td>
                        <td class="border-0">
                            <div class="border pa-1 ">
                                {{ item.email }}
                            </div>
                       
                        </td>
                        <td class="border-0 text-center">
                            <div class="border pa-1">
                                {{ item.telefone }}
                            </div>
                            
                        </td>
                        <td class="border-0 text-center ">
                            <div class="border pa-1">
                                {{ item.empresa }}
                            </div>
                        </td>
                        <td class="border-0 text-center">
                            <v-chip variant="outlined" size="x-small" :text="item.status?'Ativo':'Inativo'" :color="item.status?'success':'error'"></v-chip>
                        </td>    
                        <td class="border-0 d-flex justify-center align-center" :id="item.status">
                            <v-icon icon="mdi-book-account" @click="dialog = true"></v-icon>
                            <v-icon icon="mdi-square-edit-outline" @click="dialog = true"></v-icon>
                            <v-icon icon="mdi-trash-can" @click="dialog = true"></v-icon>
                        </td>    
                    </tr>
                    </template>
                </v-data-table-virtual>
            </v-card-item>





            

                <!--modal-->
                <v-dialog
                v-model="dialog"
                class="px-16"
                >
                    <v-card  width="95%" class="mx-auto pb-4 " density="compact">
                        <div class="bg-indigo-darken-4 mb-6" style="height: 50px;">
                            <v-card-title class="text-h6">S2i - Linceça de Uso</v-card-title>
                        </div>
                        
                        <div
                        style="position: relative; border: 1px solid black; max-height: 153px; "
                        class=" rounded  mx-4 elevation-1 px-2 "
                        >
                            <v-row  dense class="mt-1">
                                <v-col cols="3">
                                    <h1 class="text-caption mx-2 ">Nome</h1>
                                    <v-text-field
                                    placeholder="Digite seu nome..."
                                    density="compact"
                                    type="text"
                                    variant="outlined"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="3">
                                    <h1 class="text-caption mx-2">E-mail</h1>
                                    <v-text-field
                                    placeholder="Digite seu e-mail..."
                                    density="compact"
                                    type="email"
                                    variant="outlined"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <h1 class="text-caption mx-2">Telefone</h1>
                                    <v-text-field
                                    placeholder="Celular..."
                                    density="compact"
                                    type="number"
                                    variant="outlined"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="3">
                                    <h1 class="text-caption mx-2">Empresa</h1>
                                    <v-text-field
                                    placeholder="Sua empresa..."
                                    density="compact"
                                    type="text"
                                    variant="outlined"
                                    class="text-caption"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-card-actions v-if="true" class=" ma-0 pa-0">
                           
                            <v-switch label="Status" inset  color="success" class="ma-0 pa-0"></v-switch>

                            <v-spacer></v-spacer>

                            <v-btn
                                color="indigo-darken-4"
                                variant="flat"
                                text="Salvar"
                                append-icon="mdi-check-circle"
                                @click="dialog = false"
                            ></v-btn>
                            </v-card-actions>
                            <p style="position: absolute;  top: -10px; z-index: 1; left: 20px;" class="bg-white px-2 text-caption">Dados do Usuário</p>
                        </div>







                        <!--lincenças-->

                        <v-div
                        style="position: relative; border: 1px solid black;   "
                        class=" rounded  mx-4 mt-4 elevation-4 px-2 "
                        
                        >
                            <v-row dense class="mt-2 ">
                                <v-col cols="3">
                                    <h1 class="text-caption mx-2 ">Sistema</h1>
                                </v-col>
                                <v-col cols="2">
                                    <h1 class="text-caption mx-2">Prazo da Lincença</h1>
                                </v-col >
                                <v-col cols="3">
                                    <h1 class="text-caption ml-14">Dados Mestre</h1>
                                </v-col>
                                <v-col cols="2">
                                    <h1 class="text-caption ml-14">Logomarca</h1>
                                </v-col>
                            </v-row>

                            <v-row dense 
                            v-for="(listSistema, i) in listSistemas"
                            :key="i"
                            
                            >
                                <v-col cols="3"  >
                                    <div class="border py-2 px-4 rounded w-100">
                                        <span class="text-caption ">{{ listSistema.nome }}</span>
                                    </div>
                                
                                </v-col>


                                <v-col cols="2" class="d-flex align-center">
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                            density="compact"
                                            type="text"
                                            variant="outlined"
                                            class="text-caption "
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-select
                                                :items="['dias','mês', 'anos']"
                                                density="compact"
                                                variant="outlined"
                                                flat
                                                class="text-caption"
                                                chips    
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col cols="3">
                                    <div class="d-flex justify-center align-center">
                                    <v-btn icon="mdi-eye" variant="plain"></v-btn>
                                   
                                    <v-file-input
                                    v-model="fileexcel"
                                        accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                        density="compact"
                                        label="Carregar..."
                                        prepend-inner-icon="mdi-microsoft-excel"
                                        flat
                                        prepend-icon=""
                                        variant="outlined"
                                        clearable
                                        chips
                                        hide-details
                                        single-line
                                    ></v-file-input>
                                    </div>
                                </v-col>

                                <v-col cols="3" >  
                                    <div class="d-flex justify-center align-center">
                                    <v-btn icon="mdi-eye" variant="plain"></v-btn>
                                   
                                    <v-file-input
                                        v-model="file"
                                        accept="image/png, image/jpeg, image/bmp"
                                        density="compact"
                                        label="logo"
                                        prepend-inner-icon="mdi-camera"
                                        flat
                                        prepend-icon=""
                                        variant="outlined"
                                        clearable
                                        chips
                                        hide-details
                                        single-line
                                    ></v-file-input>
                                    </div>
                                </v-col>
                                <v-col class="mt-2">
                                    <v-icon icon="mdi-plus" @click="dialog = true" color="success"></v-icon>
                                    <v-icon icon="mdi-square-edit-outline" @click="dialog = true"></v-icon>
                                    <v-icon icon="mdi-trash-can" @click="dialog = true" ></v-icon>
                                </v-col>
                            </v-row>
                            <p style="position: absolute;  top: -10px; z-index: 1; left: 20px;" class="bg-white px-2 text-caption">Lincença Concedida</p>
                        </v-div>
                    </v-card>
                </v-dialog>
        </v-card>
    </div>
</template>



<script setup>
import { ref } from 'vue'

const procurar = ref('');
const headersUsuarios = [
        {
          title: 'Nome',
          align: 'start',
          key: 'nome',
          width: "30%",
          
        },
        { title: 'E-mail', key: 'email', width: "10%"},
        { title: 'Telefone', key: 'telefone', width: "20%", align: 'center' },
        { title: 'Empresa', key: 'empresa' , width: "25%", align: 'center'},
        { title: 'Status', key: 'status', align: 'center'},
        { title: '', key: 'actions', align: 'center', sortable:false},
]

const listUsuarios = [
    { nome: 'Pedro Sanzes alvaro', email: 'pedro@outlook.com', telefone: '27 99999999', empresa: 'Vivo', status: true },
    { nome: 'Ana Garcia', email: 'ana@gmail.com', telefone: '31 88888888', empresa: 'Oi', status: false },
    { nome: 'João Oliveira', email: 'joao@yahoo.com', telefone: '11 77777777', empresa: 'Claro', status: true },
    { nome: 'Mariana Costa', email: 'mariana@hotmail.com', telefone: '21 66666666', empresa: 'TIM', status: false },
    { nome: 'Carlos Santos', email: 'carlos@icloud.com', telefone: '41 55555555', empresa: 'NET', status: true },
    { nome: 'Laura Almeida', email: 'laura@outlook.com', telefone: '22 44444444', empresa: 'Sky', status: false },
    { nome: 'José Pereira', email: 'jose@gmail.com', telefone: '48 33333333', empresa: 'Nextel', status: true },
    { nome: 'Camila Lima', email: 'camila@yahoo.com', telefone: '16 22222222', empresa: 'Embratel', status: false },
    { nome: 'Felipe Silva', email: 'felipe@hotmail.com', telefone: '35 11111111', empresa: 'GVT', status: true },
    { nome: 'Aline Rodrigues', email: 'aline@gmail.com', telefone: '61 99999999', empresa: 'Algar Telecom', status: false },
    { nome: 'Lucas Sousa', email: 'lucas@yahoo.com', telefone: '28 88888888', empresa: 'Oi', status: true },
    { nome: 'Fernanda Martins', email: 'fernanda@hotmail.com', telefone: '17 77777777', empresa: 'Vivo', status: false },
    { nome: 'Gabriel Ferreira', email: 'gabriel@icloud.com', telefone: '51 66666666', empresa: 'Claro', status: true },
    { nome: 'Juliana Gomes', email: 'juliana@outlook.com', telefone: '42 55555555', empresa: 'TIM', status: false },
    { nome: 'Rafaela Barbosa', email: 'rafaela@gmail.com', telefone: '14 44444444', empresa: 'NET', status: true },
    { nome: 'Daniel Rocha', email: 'daniel@yahoo.com', telefone: '36 33333333', empresa: 'Sky', status: false },
    { nome: 'Thiago Costa', email: 'thiago@hotmail.com', telefone: '25 22222222', empresa: 'Nextel', status: true },
    { nome: 'Marcela Santos', email: 'marcela@gmail.com', telefone: '38 11111111', empresa: 'Embratel', status: false },
    { nome: 'Bruno Lima', email: 'bruno@yahoo.com', telefone: '71 99999999', empresa: 'GVT', status: true },
    { nome: 'Tatiane Almeida', email: 'tatiane@hotmail.com', telefone: '81 88888888', empresa: 'Algar Telecom', status: false },
    { nome: 'Diego Oliveira', email: 'diego@outlook.com', telefone: '24 77777777', empresa: 'Oi', status: true },
    { nome: 'Fábio Sousa', email: 'fabio@icloud.com', telefone: '34 66666666', empresa: 'Vivo', status: false },
    { nome: 'Renata Silva', email: 'renata@gmail.com', telefone: '54 55555555', empresa: 'Claro', status: true },
    { nome: 'Vanessa Pereira', email: 'vanessa@yahoo.com', telefone: '85 44444444', empresa: 'TIM', status: false },
    { nome: 'Paulo Martins', email: 'paulo@hotmail.com', telefone: '41 33333333', empresa: 'NET', status: true },
    { nome: 'Carla Gomes', email: 'carla@gmail.com', telefone: '77 22222222', empresa: 'Sky', status: false },
    { nome: 'Rodrigo Barbosa', email: 'rodrigo@yahoo.com', telefone: '18 11111111', empresa: 'Nextel', status: true },
    { nome: 'Amanda Rocha', email: 'amanda@hotmail.com', telefone: '32 99999999', empresa: 'Embratel', status: false },
    { nome: 'Luciana Lima', email: 'luciana@outlook.com', telefone: '27 88888888', empresa: 'GVT', status: true },
    { nome: 'Guilherme Almeida', email: 'guilherme@hotmail.com', telefone: '19 77777777', empresa: 'Algar Telecom', status: false }
];


const listSistemas = [
    {nome: 'S2i - Sistema de Inspeção Avulsa', situacao: true},
    {nome: 'DM254 - Arvore de Falha', situacao: true},
    {nome: 'DM242 - Plano Mestre de Inspeção', situacao: false},
    {nome: 'S3i® - Sistema Inteligente de Inspeção', situacao: false},
]



const dialog = ref (false)


</script>

<style>
.custom-text-size {
  font-size: 10px;
}

.custom-text-size .v-input__control .v-input__slot input {
  font-size: 10px;
}
</style>