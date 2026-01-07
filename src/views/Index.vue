<template>
    <div :style="{ backgroundColor: bgColor, minHeight: '100vh', '--title-shadow': titleShadow }">
        <v-container max-width="1000" class="mx-auto">
            <p class="title text-center">FLYHIGH XRS 门户</p>
            <p style="margin-top: 30px; margin-bottom: 10px;" class="subtitle">网站</p>
            <v-row>
                <v-col cols="12" xl="6" lg="6" md="12" sm="12">
                    <v-card-custom>
                        <v-card-item>
                            <v-card-title>XRS Docs</v-card-title>
                            <v-card-subtitle>XRS 文档站</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            安装教程、问题修复、活动信息等文档内容......
                            <br>
                            <v-btn style="margin-top: 10px;" variant="tonal" block
                                @click="goToUrl('https://docs.xrs.kksk03.site/')">访问网站</v-btn>
                        </v-card-text>
                    </v-card-custom>
                </v-col>
                <v-col cols="12" xl="6" lg="6" md="12" sm="12">
                    <v-card-custom>
                        <v-card-item>
                            <v-card-title>XRS Hub</v-card-title>
                            <v-card-subtitle>XRS 数据站</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            用户管理、自主改车、抽抽乐、仓库、兑换码等数据内容......
                            <br>
                            <v-btn style="margin-top: 10px;" variant="tonal" block
                                @click="goToUrl('https://hub.xrs.kksk03.site/')">访问网站</v-btn>
                        </v-card-text>
                    </v-card-custom>
                </v-col>
            </v-row>
            <p style="margin-top: 30px; margin-bottom: 10px;" class="subtitle">社群</p>
            <v-row>
                <v-col cols="12" xl="4" lg="4" md="6" sm="12" style="padding: 10px;">
                    <v-card-custom class="mx-auto" subtitle="XRS官方QQ1群 | 181748185" title="FLYHIGH XRS #1">
                        <template v-slot:prepend>
                            <v-avatar color="blue-darken-2">
                                <v-img src="https://img1.kksk03.site/qqGroupIcons/FLYHIGH-XRS-1.jpg"></v-img>
                            </v-avatar>
                        </template>
                        <v-card-item style="display: flex; justify-content: center; align-items: center;">
                            <div v-html="svg_1"
                                style="width: 208px; height: 208px; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
                            </div>
                        </v-card-item>
                    </v-card-custom>
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="6" sm="12" style="padding: 10px;">
                    <v-card-custom class="mx-auto" subtitle="XRS官方QQ2群 | 686697266" title="FLYHIGH XRS #2">
                        <template v-slot:prepend>
                            <v-avatar>
                                <v-img src="https://img1.kksk03.site/qqGroupIcons/FLYHIGH-XRS-2.jpg"></v-img>
                            </v-avatar>
                        </template>
                        <v-card-item style="display: flex; justify-content: center; align-items: center;">
                            <div v-html="svg_2"
                                style="width: 208px; height: 208px; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
                            </div>
                        </v-card-item>
                    </v-card-custom>
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="6" sm="12" style="padding: 10px;">
                    <v-card-custom class="mx-auto" subtitle="XRS官方QQ3群 | 1011991306" title="FLYHIGH XRS #3">
                        <template v-slot:prepend>
                            <v-avatar>
                                <v-img src="https://img1.kksk03.site/qqGroupIcons/FLYHIGH-XRS-3.jpg"></v-img>
                            </v-avatar>
                        </template>
                        <v-card-item style="display: flex; justify-content: center; align-items: center;">
                            <div v-html="svg_3"
                                style="width: 208px; height: 208px; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
                            </div>
                        </v-card-item>
                    </v-card-custom>
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="6" sm="12" style="padding: 10px;">
                    <v-card-custom class="mx-auto" subtitle="联机对战中心 | 1012371441" title="LiveHouse CiRCLE">
                        <template v-slot:prepend>
                            <v-avatar>
                                <v-img src="https://img1.kksk03.site/qqGroupIcons/CiRCLE.jpg"></v-img>
                            </v-avatar>
                        </template>
                        <v-card-item style="display: flex; justify-content: center; align-items: center;">
                            <div v-html="svg_99"
                                style="width: 208px; height: 208px; border-radius: 10px; overflow: hidden; margin-bottom: 20px;">
                            </div>
                        </v-card-item>
                    </v-card-custom>
                </v-col>
            </v-row>
            <v-divider style="margin-top: 30px; margin-bottom: 30px;"></v-divider>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <p>Powered by <a href="https://github.com/kKsk03" target="_blank">kKsk03</a></p>
                    <p>Copyright © 2023-Present <a href="https://github.com/kKsk03" target="_blank">kKsk03</a></p>
                </div>
                <div>
                    <v-btn icon="mdi-theme-light-dark" variant="tonal" @click="toggleTheme"></v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { computed, onMounted, ref, watchEffect } from 'vue'
import QRCode from 'qrcode'

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        theme.change(savedTheme)
    } else {
        theme.change('light')
        localStorage.setItem('theme', 'light')
    }
})

const toggleTheme = () => {
    const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
    theme.change(newTheme)
    localStorage.setItem('theme', newTheme)
}

const theme = useTheme()
const bgColor = computed(() =>
    theme.current.value.dark ? '#222222' : '#FCFBFF'
)

const svg_1 = ref('')
const svg_2 = ref('')
const svg_3 = ref('')
const svg_99 = ref('')

const qrCodeColor = computed(() => ({
    code: '#303133',
    background: theme.current.value.dark ? '#f0f0f0' : '#fcfbff'
}))

function generateQrCode(url, svg) {
    QRCode.toString(url, {
        type: 'svg',
        errorCorrectionLevel: 'H',
        color: { dark: qrCodeColor.value.code, light: qrCodeColor.value.background }
    })
        .then(svgString => {
            svg.value = svgString
        })
        .catch(err => {
            console.error(err)
            svg.value = '<p style="text-align: center;">二维码生成失败</p>'
        })
}

// 监听 bgColor，保证值计算出来再生成二维码
watchEffect(() => {
    generateQrCode('https://qm.qq.com/q/NukDfq9562', svg_1) // XRS 1群
    generateQrCode('https://qm.qq.com/q/PlJpI7OjWc', svg_2) // XRS 2群
    generateQrCode('https://qm.qq.com/q/S4GZxt254k', svg_3) // XRS 3群
    generateQrCode('https://qm.qq.com/q/OcI4FsXsYY', svg_99) // 联机中心
})

const titleShadow = computed(() =>
    theme.current.value.dark
        ? '0 2px 6px rgba(255, 255, 255, 0.5)'
        : '0 2px 6px rgba(0, 0, 0, 0.5)'
)

const goToUrl = url => window.open(url, '_blank')
</script>

<style scoped>
.title {
    font-size: clamp(2rem, 8vw, 40px);
    font-weight: 700;
    text-shadow: var(--title-shadow);
}

.subtitle {
    font-size: 25px;
    opacity: 0.8;
    font-weight: 500;
}
</style>