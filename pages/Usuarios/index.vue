<template >
    <div >
      <v-container>
        <v-main>
          <usuarios />
        </v-main>
        
      </v-container>
        
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const TitlePages = useTitlePagesStore()

onMounted(() => {
  TitlePages.setPageTitle('MCI - Cadastro de Usuários');
  TitlePages.setDrawerState(true)
});
</script>

