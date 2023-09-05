<template>
    <AppItem>
        <div class="item__header">
            <h4 class="item__header-text">{{ item.name }}</h4>
            <div class="item__header-buttons">
                <button class="item__header-button item__header-button--trash" @click="deleteItem">
                    <fa :icon="['fa', 'trash']" size="lg" />
                </button>
                <button class="item__header-button item__header-button--chevron" @click="toggleItem">
                    <fa v-if="item.isHidden" :icon="['fa', 'chevron-down']" size="lg" />
                    <fa v-else :icon="['fa', 'chevron-up']" size="lg" />
                </button>
            </div>
        </div>
        <div class="item__body" :hidden="item.isHidden">
            <div class="item__body-property">
                <p class="item__body-property-name"> {{ $t("PDF.ITEM.X") }} </p>
                <input class="item__body-property-value" type="number" v-model="item.xPos" />
            </div>
            <div class="item__body-property">
                <p class="item__body-property-name"> {{ $t("PDF.ITEM.Y") }} </p>
                <input class="item__body-property-value" type="number" v-model="item.yPos" />
            </div>
            <div class="item__body-property">
                <p class="item__body-property-name"> {{ $t("PDF.ITEM.ROTATION") }} </p>
                <input class="item__body-property-value" type="number" v-model="item.rotation" />
            </div>
            <div class="item__body-property" v-if="isTextItem">
                <p class="item__body-property-name"> {{ $t("PDF.ITEM.FONT_SIZE") }} </p>
                <input class="item__body-property-value" type="number" v-model="item.fontSize" />
            </div>
            <div class="item__body-property" v-if="isImageItem">
                <p class="item__body-property-name"> {{ $t("PDF.ITEM.OPACITY") }} </p>
                <input class="item__body-property-value" type="number" v-model="item.opacity" />
            </div>
        </div>
    </AppItem>
</template>

<script>
import ImageItem from '@/features/pdf-edit/models/ImageItem.js';
import TextItem from '@/features/pdf-edit/models/TextItem.js';
import { AppItem } from "@/styles/styles";
export default {
    name: "app-item",
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    components: {
        AppItem
    },
    methods: {
        toggleItem() {
            this.item.isHidden = !this.item.isHidden;
        },
        deleteItem() {
            this.$emit('deleteItem');
        }
    },
    computed: {
        isTextItem() {
            return this.item instanceof TextItem; 
        },
        isImageItem() {
            return this.item instanceof ImageItem; 
        }
    },
}
</script>