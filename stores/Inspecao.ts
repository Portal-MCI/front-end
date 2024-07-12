export const useInspecaoStore = defineStore('Inspecao', {
  state: () => ({
    name: 'teste',
    
  }),
  actions: {
    setPageTitle(title:string) {
      this.name = title;
    },

  },
  persist:true
});