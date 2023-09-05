<template>
    <div>
        <app-pdf-items-sidebar v-model:images="images" v-if="isItemsSideBarVisible" @addImage="openAddImagePopup"
            @addImageFast="addImageFast" @deleteImage="deleteImg"></app-pdf-items-sidebar>
        <app-add-image-popup v-if="isAddImagePopupVisible" @closePopup="closeAddImagePopup"></app-add-image-popup>
    </div>
</template>

<script>
import { subscribeToImage, unsubscribeFromImage, getImages, postImage, deleteImage } from "@/core/api/api.js";
import AppPdfItemsSidebar from '../components/AppPdfItemsSidebar.vue';
import TextItem from "@/features/pdf-edit/models/TextItem.js";
import ImageItem from "@/features/pdf-edit/models/ImageItem.js";
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
            isAddImagePopupVisible: false,
            textItems: [],
            images: []
        }
    },
    created() {
        this.getStartImages();
    },
    methods: {
        openAddImagePopup() {
            this.isAddImagePopupVisible = true;
        },

        closeAddImagePopup() {
            this.isAddImagePopupVisible = false;
        },

        async getStartImages() {
            const imagesData = await getImages();
            if (imagesData) {
                this.images = [...imagesData];
                this.images.forEach(i =>
                    subscribeToImage(i.id, i =>
                        this.updateImage(i.id, i)
                    )
                )
            }
        },

        addImage() {
            this.$emit('addImage');
        },

        updateImage(id, image) {
            this.images.filter(i => i.id === id)
                .forEach(i => {
                    const { xPos, yPos, rotation, opacity } = image;
                    i.xPos = xPos;
                    i.yPos = yPos;
                    i.rotation = rotation;
                    i.opacity = opacity;
                });
        },

        async deleteImg(imageId) {
            await deleteImage(imageId);
            this.images = this.images.filter(i => i.id !== imageId);
            unsubscribeFromImage(imageId);
        },

        async addImageFast() {
            const currentImage = new ImageItem(54, "Image 5458", 80, 80, 5, 0, true, 1);

            await postImage(currentImage);

            this.images.push(new ImageItem(currentImage.id));

            subscribeToImage(currentImage.id, (currentImage) => {
                this.updateImage(currentImage.id, currentImage);
            });
        },
    },
}
</script>