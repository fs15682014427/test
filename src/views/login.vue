<template>
    <div class="login-main w100 h100 df aic jcsa">
        <div class="w100 h100 df aic">
            <div class="login-banner h100"></div>
            <div class="login-form-container h100 df aic jcc">
                <div class="login-form p20 df fdc">
                    <h3 class="login-form-title mb20">{{ loginStatus ? 'Wellcome' : 'Wellcome' }}</h3>
                    <div class="login-details df fdc aic jcc">
                        <el-form class="w100">
                            <el-form-item>
                                <el-input placeholder="Encode your username"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="Encode your password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <div class="df fdr w100">
                                    <el-input placeholder="Encode your captchecode"></el-input>
                                    <div style="width: 30%;border: 1px solid red;border-radius: 5px;margin-left: 10px;">
                                    </div>
                                </div>
                            </el-form-item>
                        </el-form>
                        <el-button @click="login" class="login-form-submit">登录</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const loginStatus = ref(false)

const login = () => {

}
</script>

<style lang="scss" scoped>
.login-main {
    .login-banner {
        width: 65%;
        background-repeat: no-repeat;
        background-image: url('@/assets/imgs/banner1.png');
        background-size: 100% 100%;
    }

    .login-form-container {
        width: 35%;
        background: linear-gradient(to right, #4d45bc, #aaa4e9);

        .login-form {
            width: 400px;
            height: 500px;
            border-radius: 20px;
            background: linear-gradient(to right, #4d45bc, #aaa4e9);

            .login-form-title {
                font-size: 24px;
                color: #4d45bc;
            }

            .login-form-submit {
                background-color: #050226;
                border: none;
                color: #fff;
            }

            .login-form-submit:hover {
                background-color: #221e5f;
                box-shadow: 3px 3px 3px 3px rgba($color: #050226, $alpha: .5);
            }
        }
    }
}
</style>