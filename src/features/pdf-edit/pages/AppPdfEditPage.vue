<template>
    <div>
        <app-pdf-items-sidebar v-if="isItemsSideBarVisible" 
            v-model:images="images" 
            @addImage="openAddImagePopup"
            @addImageFast="addImageFast" 
            @deleteImage="deleteImg"
        ></app-pdf-items-sidebar>
        <app-add-image-popup v-if="isAddImagePopupVisible"
            @closePopup="closeAddImagePopup"
        ></app-add-image-popup>
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
            images: [],
            idGenerator: this.generateUniqueId(),
            imageItemIndex: 0
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
                this.imageItemIndex = this.images[this.images.length - 1].id + 1;
            }
        },

        addImage() {
            this.$emit('addImage');
        },

        updateImage(id, image) {
            this.images.filter(i => i.id === id)
                .forEach(i => {
                    const {name, xPos, yPos, rotation, opacity } = image;
                    i.name = name;
                    i.xPos = xPos;
                    i.yPos = yPos;
                    i.rotation = rotation;
                    i.opacity = opacity;
                });
        },

        async deleteImg(imageId) {
            await deleteImage(imageId);
            this.images = this.images.filter(i => i.id !== imageId);
            this.imageItemIndex = this.images[this.images.length - 1].id + 1;
            unsubscribeFromImage(imageId);
        },

        async addImageFast() {
            const newItemId = this.idGenerator.next().value;
            const currentImage = new ImageItem(newItemId, "Image " + newItemId, 80, 80, 5, 0, true, 1);

            await postImage(currentImage);

            this.images.push(new ImageItem(currentImage.id));

            subscribeToImage(currentImage.id, (currentImage) => {
                this.updateImage(currentImage.id, currentImage);
            });
        },

        *generateUniqueId() {
            let id = this.imageItemIndex;
            while (true) {
                yield id++;
            }
        },
    },
}
</script>