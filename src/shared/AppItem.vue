<template>
    <div class="item">
        <div class="item__header">
            <h4 class="item__header-text">{{ item.name }}</h4>
            <div class="item__header-buttons">
                <button class="item__header-button item__header-button--trash" @click="">
                    <fa :icon="['fa', 'trash']" size="lg" />
                </button>
                <button class="item__header-button item__header-button--chevron" @click="toggleItem()">
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
    </div>
</template>

<script>
import ImageItem from '@/features/pdf-edit/models/ImageItem.js';
import TextItem from '@/features/pdf-edit/models/TextItem.js';
export default {
    name: "app-item",
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    methods: {
        toggleItem() {
            this.item.isHidden = !this.item.isHidden;
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

<style scoped>
.item:not(:first-child) {
    margin-top: 10px;
}
.item__header {
    padding: 12px 16px;
    background-color: #1d1d1d;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.item__header-text {
    color: #fff;
}

.item__header-button {
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.item__header-button:not(:last-child) {
    margin-right: 10px;
}

.item__header-button--trash {
    color: #901414;
}

.item__header-button--chevron {
    color: #fff;
}

.item__body {
    padding: 12px 16px;
    background-color: #282828;
}

.item__body-property {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item__body-property:not(:first-child) {
    margin-top: 5px;
}

.item__body-property-name {
    color: #fff;
    font-weight: 600;
    font-size: 16px;
}

.item__body-property-value {
    width: 50px;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    background-color: transparent;
    padding: 5px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type=number] {
    -moz-appearance: textfield;
}
</style>
