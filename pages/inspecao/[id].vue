<template >
    <div class="px-6">
        <v-main>
          <inspecao />
        </v-main>
    </div>
  </template>
  
  
  <script setup>
  import { onMounted } from 'vue';
  
  const TitlePages = useTitlePagesStore()
  
  onMounted(() => {
    TitlePages.setPageTitle('S2i - Sistema Integrado de Inspeção');
    TitlePages.setDrawerState(true)
    //alert(Inspecao.name)
  });
  </script>