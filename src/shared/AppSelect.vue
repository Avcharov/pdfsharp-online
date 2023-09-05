<template>
    <AppSelect>
        <div class="select__header">
            <h4 class="select__header-text">{{ name }}</h4>
            <button class="select__header-chevron-button" @click="toggleSelect">
                <fa v-if="!isSelectOpen" :icon="['fa', 'chevron-down']" size="lg" />
                <fa v-else :icon="['fa', 'chevron-up']" size="lg" />
            </button>
        </div>
        <div class="select__body" :hidden="!isSelectOpen">
            <app-button class="button_select-body" @click="addItem">
                {{ addItemText }}
            </app-button>
            <div class="select__body-items">
                <app-item v-for="item in items" :item="item" :key="item.id"
                    @deleteItem="deleteItem(item.id)"
                 ></app-item>
            </div>
        </div>
    </AppSelect>
</template>

<script>
import AppItem from './AppItem.vue';
import { AppSelect } from '@/styles/styles';

export default {
    name: "app-select",
    components: {
        AppItem,
        AppSelect
    },
    props: {
        name: {
            type: String,
            required: true
        },
        addItemText: {
            type: String,
            required: true
        },
        isSelectOpen: {
            type: Boolean,
            required: true
        },
        items: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        toggleSelect() {
            this.$emit('update:isSelectOpen', !this.isSelectOpen);
        },
        addItem() {
            this.$emit('addItem');
        },
        deleteItem(itemId) {
            this.$emit('deleteItem', itemId);
        }
    }
}
</script>