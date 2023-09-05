<template>
    <AppPdfItemSidebar>
        <app-select 
            v-model:items="textItems" 
            v-model:isSelectOpen="isTextBarHidden" 
            :name="$t('PDF.SIDEBAR.TEXT')"
            :addItemText="$t('PDF.BUTTON.ADD_TEXT')"
            @deleteItem="deleteItem"
        ></app-select>

        <app-select
            :items="images" 
            v-model:isSelectOpen="isImageBarHidden" 
            :name="$t('PDF.SIDEBAR.IMAGES')"
            :addItemText="$t('PDF.BUTTON.ADD_IMAGE')"
            @addItem="addImage"
            @deleteItem="deleteImage"
        ></app-select>

        <app-button @click="addImageFast">Add Image</app-button>
    </AppPdfItemSidebar>
</template>

<script>
import AppItem from '@/shared/AppItem.vue';
import AppSelect from "@/shared/AppSelect.vue";
import { AppPdfItemSidebar } from "@/styles/styles";

export default {
    name: "app-pdf-items-sidebar",
    components: {
        AppItem,
        AppSelect,
        AppPdfItemSidebar
    },
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isTextBarHidden: false,
            isImageBarHidden: true
        }
    },
    methods: {
        addImageFast() {
            this.$emit('addImageFast');
        },
        deleteImage(itemId){
            this.$emit('deleteImage', itemId);
        }
    },
}
</script>