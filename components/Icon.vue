<template>
    <i 
        v-if="icon.type==='material'" 
        class="material-icons md-24" 
        :class="icon.class"
        >
        {{icon.name}}
    </i>
    <font-awesome-icon
        :class="icon.class"
        v-else-if="icon.type==='fontawesome'" 
        :icon="{ prefix: icon.namespace, iconName: icon.name }" 
        />
</template>

<script>
export default {
    name: 'Icon',
    props: ['icon']
}
</script>

<style>

</style>
