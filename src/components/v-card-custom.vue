<template>
    <v-card v-bind="$attrs" flat :color="bgColor" style="border-radius: 14px !important;">
        <slot />
        <template v-if="$slots.actions" v-slot:actions>
            <slot name="actions" />
        </template>
        <template v-if="$slots.append" v-slot:append>
            <slot name="append" />
        </template>
        <template v-if="$slots.image" v-slot:image>
            <slot name="image" />
        </template>
        <template v-if="$slots.item" v-slot:item>
            <slot name="item" />
        </template>
        <template v-if="$slots.loader" v-slot:loader>
            <slot name="loader" />
        </template>
        <template v-if="$slots.prepend" v-slot:prepend>
            <slot name="prepend" />
        </template>
        <template v-if="$slots.subtitle" v-slot:subtitle>
            <slot name="subtitle" />
        </template>
        <template v-if="$slots.text" v-slot:text>
            <slot name="text" />
        </template>
        <template v-if="$slots.title" v-slot:title>
            <slot name="title" />
        </template>
    </v-card>
</template>

<script>
import { VCard } from 'vuetify/components'
import { useTheme } from 'vuetify';
import { computed } from 'vue'

export default {
    name: 'VCardCustom',
    components: { VCard },
    inheritAttrs: false, // 避免重复绑定
    setup() {
        const theme = useTheme()
        const bgColor = computed(() => theme.current.value.dark ? '#3f3f3f' : '#f3f0f8')

        return { bgColor }
    }
}
</script>
