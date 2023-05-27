<template>
    <div>
        <h3>Input: {{ title }}</h3>
        <ChildComponent @newValue="changeTitle" />
    </div>
</template>
  
<script>
import ChildComponent from "./ChildComponent.vue";
import { ref } from "vue"
export default {
    name: "ParentComponent",
    components: {
        ChildComponent
    },
    setup() {
        const title = ref("");
        const changeTitle = (newTitle) => {
            console.log("fire")
            title.value = newTitle;
        };
        return { title, changeTitle };
    },
};
</script>