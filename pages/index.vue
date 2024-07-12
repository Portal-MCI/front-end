<template>
   

    <div 
    style="background-image: url('/fundo.png'); background-size: cover;" 
    class="h-screen w-100 d-flex justify-end align-center pa-3"
    >
      
    <v-card
      class="mx-auto px-2 pb-8 pt-6"
      elevation="8"
      max-width="400"
      min-height="70%"
      rounded
    >
      <v-card-title class="mb-4"><v-img src="/logo.webp" width="100" class="mx-auto"></v-img></v-card-title>
      <v-card-item>
      <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>

      <v-text-field
        density="comfortable"
        placeholder="Endereço de e-mail"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
       
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Senha

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Esqueceu a senha?</a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye' :  'mdi-eye-off'"
        :type="visible ? 'text' : 'password'"
        density="comfortable"
        placeholder="Entre com a sua senha"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Aviso: Após 5 tentativas consecutivas de login sem sucesso, sua conta será temporariamente bloqueada por uma hora. Se você precisa fazer login agora, você também pode clicar em "Esqueceu a senha?" para redefinir a senha de login.
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="indigo-darken-4"
        size="large"
        to="/programacao"
        block
      >
        Iniciar a Sessão
      </v-btn>
    </v-card-item>
    
    </v-card>
      
    </div>
     
  </template>
  
  <script setup>
  import { ref } from 'vue'
  definePageMeta({
    layout: false,
  });

  const visible = ref(false)
  </script>