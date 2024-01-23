<template>
    <button class="text-white btn btn-success w-100"
    @click="$emit('clickButton')"
    >
        <slot></slot>
    </button>

</template>