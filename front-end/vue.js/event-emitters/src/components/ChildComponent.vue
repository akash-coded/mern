<template>
    <input v-model="inputValue" @keyup="inputChange" />
</template>

<script>
import { ref } from "vue"
export default {
    name: "ChildComponent",
    setup(props, context) {
        const inputValue = ref("")
        const inputChange = () => {
            context.emit("newValue", inputValue.value);
        };
        return {
            inputChange,
            inputValue
        };
    },
    emits: ["newValue"]
};
</script>