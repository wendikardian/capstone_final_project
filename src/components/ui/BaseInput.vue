<template>
    <div :class="[{'input-wrapper' :type == 'file'}, 'my-2']">
        <label :for="identity" class="fw-semibold">
            {{ label }} <span style="color: #cb3a31">*</span>
            <slot></slot>
        </label>
    </div>
        <div class="my-2">
            <input :type="type" :class="[{ 'd-none': isImage, 'file-input': type == 'file' }, 'form-control']" :id="identity" :placeholder="placeholder"
            @change="$emit('change', $event)"
            @keyup="$emit('keyInput', $event.target.value)"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            >
        </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();


defineProps({
    type: { type: String, require: true },
    label: { type: String, require: true },
    identity: { type: String, require: true },
    placeholder: { type: String, require: true },
    isImage: { type: Boolean, require: false, default: false },
    modelValue: { type: [String, Number] }
})

</script>


<style>
.input-wrapper {
    padding: 0.375rem 0.75rem;
    width: 200px;
    text-align: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border: 1px solid #f8f9fb;
    background-color: #f3f7fa;
    border-radius: 0.375rem;
    margin-bottom: 10px;
    transition: all 1s ease;
}

.input-wrapper:hover {
    background-color: #b9bec3;
}

.file-input {
    cursor: pointer;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    font-size: 50px;
    opacity: 0;
}
</style>