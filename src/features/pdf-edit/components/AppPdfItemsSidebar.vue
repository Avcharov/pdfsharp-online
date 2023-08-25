<template>
    <AppPdfItemSidebar>
        <app-select 
            v-model:items="items" 
            v-model:isSelectOpen="isTextBarHidden" 
            :name="$t('PDF.SIDEBAR.TEXT')"
            :addItemText="$t('PDF.BUTTON.ADD_TEXT')"
        ></app-select>

        <app-select
            v-model:items="images" 
            v-model:isSelectOpen="isImageBarHidden" 
            :name="$t('PDF.SIDEBAR.IMAGES')"
            :addItemText="$t('PDF.BUTTON.ADD_IMAGE')"
            @addItem="addImage"
        ></app-select>
    </AppPdfItemSidebar>
</template>

<script>
import AppItem from '@/shared/AppItem.vue';
import AppSelect from "@/shared/AppSelect.vue";
import TextItem from "@/features/pdf-edit/models/TextItem.js"; 
import ImageItem from "@/features/pdf-edit/models/ImageItem.js"; 
import { AppPdfItemSidebar } from "@/styles/styles";

export default {
    name: "app-pdf-items-sidebar",
    components: {
        AppItem,
        AppSelect,
        AppPdfItemSidebar
    },
    data() {
        return {
            items: [
                new TextItem(1,"Text 1", 0, 10, 0, 16, false, false, false, true),
                new TextItem(2,"Text 2", 10, 20, 5, 25, false, false, false, true),
                new TextItem(3,"Text 3", 50, 20, 5, 25, false, false, false, true)
            ],
            images: [
                new ImageItem(1,"Image 1", 0, 10, 0, 0, true),
                new ImageItem(2,"Image 2", 10, 20, 5, 0, true),
                new ImageItem(3,"Image 3", 50, 20, 5, 0, true)
            ],
            isTextBarHidden: false,
            isImageBarHidden: false
        }
    },
    methods: {
        addImage(){
            this.$emit('addImage');
        }
    }
}
</script>