<template>
    <AppAddImagePopup>
        <div class=" add-image-popup__container">
            <div class="add-image-popup__header">
                <h2 class="add-image-popup__header-title">{{ $t('PDF.ADD_IMAGE_POPUP.ADD_IMAGE') }}</h2>
                <app-cross-button @click="closePopup"></app-cross-button>
            </div>
            <div class="add-image-popup__messages">
                <app-drop-zone @drop.prevent="addImageFile" @change="selectImageFromExplorer"></app-drop-zone>
            </div>
            <div class="add-image-popup__body">
                <span class="file-info">{{ $t('PDF.ADD_IMAGE_POPUP.FILE') }} : {{ dropzoneFile.name }}</span>
            </div>
            <div class="add-image-popup__footer">
                <div class="button-container full-padding"></div>
                <div class="button-container full-padding">
                    <app-button class="button button-upload" @click="uploadFiles">{{ $t('PDF.ADD_IMAGE_POPUP.UPLOAD') }}</app-button>
                </div>
            </div>
        </div>
        <div class="overlay" @click="closePopup()"></div>
    </AppAddImagePopup>
</template>
  
<script>
import AppButton from "@/shared/AppButton.vue";
import AppDropZone from "@/shared/AppDropZone.vue";
import AppCrossButton from "@/shared/AppCrossButton.vue";
import { AppAddImagePopup } from "@/styles/styles";
export default {
    name: "app-add-image-popup",
    components: {
        AppButton,
        AppDropZone,
        AppCrossButton,
        AppAddImagePopup
    },
    data() {
        return {
            dropzoneFile: {}
        };
    },
    methods: {
        addImageFile(e) {
            this.dropzoneFile = e.dataTransfer.files[0];
        },
        selectImageFromExplorer() {
            this.dropzoneFile = document.querySelector(".dropzoneFile").files[0];
        },
        closePopup() {
            this.$emit('closePopup');
        },
        uploadFiles() {
            console.log("Files updated");
        }
    }
};
</script>