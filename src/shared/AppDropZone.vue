<template>
    <DropZone 
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive" 
        @dragover.prevent 
        @drop.prevent="toggleActive"
        :class="{ 'active-dropzone': active }">
            <span>Drag or Drop File</span>
            <span>OR</span>
            <label for="dropzoneFile">Select File</label>
            <input type="file" id="dropzoneFile" class="dropzoneFile" />
    </DropZone>
</template>
  
<script>
import { DropZone } from "@/styles/styles"; 
export default {
    name: "app-drop-zone",
    components: {
        DropZone
    },
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

</style>