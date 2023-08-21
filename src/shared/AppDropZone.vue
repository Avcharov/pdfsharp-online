<template>
    <div 
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive" 
        @dragover.prevent 
        @drop.prevent="toggleActive"
        :class="{ 'active-dropzone': active }" 
        class="dropzone">
            <span>Drag or Drop File</span>
            <span>OR</span>
            <label for="dropzoneFile">Select File</label>
            <input type="file" id="dropzoneFile" class="dropzoneFile" />
    </div>
</template>
  
<script>
export default {
    name: "app-drop-zone",
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggleActive() {
            this.active = !this.active;
        },
    },
};
</script>
  
<style scoped>
.dropzone {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    color: #fff;

    border: 2px dashed #83bba5;
    background-color: #252525;
    transition: 0.3s ease all;
}

.dropzone label {
    padding: 8px 12px;
    color: #fff;
    background-color: #83bba5;
    transition: 0.3s ease all;
    cursor: pointer;
}

.dropzone input {
    display: none;
}

.active-dropzone {
    color: #fff;
    border-color: #fff;
    background-color: #83bba5;
}

.active-dropzone label {
    background-color: #fff;
    color: #83bba5;
}
</style>