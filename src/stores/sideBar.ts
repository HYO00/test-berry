import { defineStore } from 'pinia';
import { ref  } from 'vue';
// Define your store
export const useCommonStore = defineStore('SidebarStore', () => {
  const isOpenSidebar = ref({
    isOpen: false
  })
  
  const setIsOpenSideBar = (isOpen: any) => {
    console.log(isOpen, "store", isOpenSidebar.value)
    isOpenSidebar.value.isOpen = isOpen
  }

  return { isOpenSidebar, setIsOpenSideBar}

});
