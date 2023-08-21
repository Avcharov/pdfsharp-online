<template>
    <div class="add-image-popup__container">
        <div class="add-image-popup">
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
                    <button class="button button-upload" @click="uploadFiles">{{ $t('PDF.ADD_IMAGE_POPUP.UPLOAD') }}</button>
                </div>
            </div>
        </div>
        <div class="overlay" @click="closePopup()"></div>
    </div>
</template>
  
<script>
import AppButton from "@/shared/AppButton.vue";
import AppDropZone from "@/shared/AppDropZone.vue";
import AppCrossButton from "@/shared/AppCrossButton.vue";
export default {
    name: "app-add-image-popup",
    components: {
        AppButton,
        AppDropZone,
        AppCrossButton
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
  
<style scoped>

.add-image-popup__container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1052;
}

.add-image-popup {
    position: relative;
    width: 50%;
    max-width: 600px;
    background-color: #252525;
    z-index: 1;
    border-radius: 20px;
}

.add-image-popup__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 32px 16px;
}

.add-image-popup__header-title {
    color: #fff;
}

.add-image-popup__messages {
    padding: 16px;
    height: 450px;
    position: relative;
}

.drop-zone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: grey;
    opacity: 0;
}

.active-dropzone {
    padding: 50px 0;
    z-index: 1000;
    visibility: visible;
    opacity: 1;
    -webkit-animation: fadein 0.25s forwards;
    -moz-animation: fadein 0.25s forwards;
    -ms-animation: fadein 0.25s forwards;
    -o-animation: fadein 0.25s forwards;
    animation: fadein 0.25s forwards;
}

.attachment-drop-message {
    width: 100%;
    padding: 200px 16px 200px 16px;
    background: rgb(255, 255, 255);
    color: black;
    text-align: center;
    font-family: 16px;
    border: medium dashed grey;
}

.message-warning {
    background: rgba(red, 0.2);
    color: black;
}

.add-image-popup__body {
    padding: 16px;
    height: 50px;
    background-color: #83bba5;
    text-align: center;
}

.add-image-popup__footer {
    padding: 16px;
    display: flex;
    justify-content: space-between;
}

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.4)
}

.hidden {
    display: none;
}

.text-underline {
    text-decoration: underline;
}

.cursor-pointer {
    cursor: pointer;
}
</style>