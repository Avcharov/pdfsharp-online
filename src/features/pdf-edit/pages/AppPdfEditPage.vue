<template>
    <div>
        <app-pdf-items-sidebar v-if="isItemsSideBarVisible" @addImage="openAddImagePopup"></app-pdf-items-sidebar>
        <app-add-image-popup v-if="isAddImagePopupVisible" @closePopup="closeAddImagePopup"></app-add-image-popup>
    </div>
</template>

<script>
import AppPdfItemsSidebar from '../components/AppPdfItemsSidebar.vue';
import AppAddImagePopup from '../components/AppAddImagePopup.vue';

export default {
    name: "app-pdf-edit-page",
    components: {
        AppPdfItemsSidebar,
        AppAddImagePopup
    },
    data() {
        return {
            isItemsSideBarVisible: true,
            isAddImagePopupVisible: false
        }
    },
    methods: {
        openAddImagePopup(){
            this.isAddImagePopupVisible = true;
        },
        closeAddImagePopup(){
            this.isAddImagePopupVisible = false;
        }
    },
}
</script>