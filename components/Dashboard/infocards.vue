<template>
    <v-row dense>
            <v-col cols="12" sm="6" md="4">
                <v-card 
                height="150"
                elevation="6"
                color="indigo-darken-4"
                >
                    <v-card-item  class="h-100">
                        <div class="d-flex h-100 align-center">
                            <div class="w-50 d-flex flex-column justify-center pa-2">
                                <p class="text-caption">Qtde. Locais Cadastrados</p>
                                <p class="text-h3 mt-4">0</p>
                            </div>
                            <div class="w-50 text-end"><v-icon icon="mdi-database-cog-outline" class="text-h2"></v-icon></div>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>


            <v-col cols="12" sm="6" md="4">
                <v-card 
                height="150"
                elevation="6"
                color="indigo-darken-4"
                >
                    <v-card-item >
                        <div class="d-flex h-100 align-center">
                            <div class="w-50 d-flex flex-column justify-center pa-2">
                                <p class="text-caption">Qtde. Locais Programadas</p>
                                <p class="text-h3 mt-4">0</p>
                            </div>
                            <div class="w-50 text-end"><v-icon icon="mdi-timer-sand" class="text-h2"></v-icon></div>
                            </div>
                    </v-card-item>
                </v-card>
            </v-col>


            <v-col cols="12" sm="6" md="4">
                <v-card 
                height="150"
                elevation="6"
                color="indigo-darken-4"
                >
                    <v-card-item >
                        <div class="d-flex h-100 align-center">
                            <div class="w-50  d-flex flex-column justify-center pa-2">
                                <p class="text-caption">Qtde. Locais Concluídas</p>
                                <p class="text-h3 mt-4">0</p>
                            </div>
                            <div class="w-50 text-end"><v-icon icon="mdi-check-circle" class="text-h2"></v-icon></div>
                            </div>
                    </v-card-item>
                </v-card>
            </v-col>


            <v-col cols="12" sm="6" md="4">
                <v-card 
                height="150"
                elevation="6"
                color="indigo-darken-4"
                >
                    <v-card-item >
                        <div class="d-flex h-100 align-center">
                            <div class="w-50 h-100 d-flex flex-column justify-center pa-2">
                                <p class="text-caption">Total anomalia detetada</p>
                                <p class="text-h3 mt-4">0</p>
                            </div>
                            <div class="w-50 text-end"><v-icon icon="mdi-flash-alert-outline" class="text-h2"></v-icon></div>
                            </div>
                    </v-card-item>
                </v-card>
            </v-col>


            <v-col cols="12" sm="6" md="4">
                <v-card 
                height="150"
                elevation="6"
                color="indigo-darken-4"
                >
                    <v-card-item >
                        <div class="d-flex h-100 align-center">
                            <div class="w-50 h-100 d-flex flex-column justify-center pa-2">
                                <p class="text-caption">Total anomalia pendente</p>
                                <p class="text-h3 mt-4">0</p>
                            </div>
                            <div class="w-50 text-end"><v-icon icon="mdi-alert-remove" class="text-h2"></v-icon></div>
                            </div>
                    </v-card-item>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card 
                height="150"
                elevation="6"
                color="indigo-darken-4"
                >
                    <v-card-item >
                        <div class="d-flex h-100 align-center">
                            <div class="w-50 h-100 d-flex flex-column justify-center pa-2">
                                <p class="text-caption">Total anomalia concluída</p>
                                <p class="text-h3 mt-4">0</p>
                            </div>
                            <div class="w-50 text-end"><v-icon icon="mdi-check-all" class="text-h2"></v-icon></div>
                            </div>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
</template>