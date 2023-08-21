<template>
    <div class="select">
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
                <app-item v-for="item in items" :item="item" :key="item.name">
                </app-item>
            </div>
        </div>
    </div>
</template>

<script>
import AppItem from './AppItem.vue';
export default {
    name: "app-select",
    components: {
        AppItem
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
        addItem(){
            this.$emit('addItem');
        }
    }
}
</script>

<style scoped>
.select:not(:first-child) {
    margin-top: 10px;
}

.select__header {
    padding: 12px 16px;
    background-color: #1a1a1a;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
}

.select__header-text {
    color: #fff;
}

.select__header-chevron-button {
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.select__body {
    padding: 12px 16px;
    background-color: #303030;
}

.select__body-items {
    margin-top: 15px;
}


</style>