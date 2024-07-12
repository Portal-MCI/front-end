<template >
    <div >
      <v-container>
        <v-main>
          <div>
            <dashboard-infocards />
            <dashboard-grafico />
            <dashboard-tabela />
          </div>
        </v-main>
      </v-container>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';


const TitlePages = useTitlePagesStore()
const nome = ref('João Pedro')
onMounted(() => {
  TitlePages.setPageTitle(`${nome.value}, Empresa 1`);
  TitlePages.setDrawerState(false)
});
</script>

