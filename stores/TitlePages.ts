// store/page.js
export const useTitlePagesStore = defineStore('TitlePages', {
  state: () => ({
    pageTitle: '',
    drawerstate:true,
    counter:0
  }),
  actions: {
    setPageTitle(title:string) {
      this.pageTitle = title;
    },

    setDrawerState(status:boolean) {
      this.drawerstate = status;
    },

    setcounterState(status:boolean) {
      this.counter++ ;
    }
  }
  
});