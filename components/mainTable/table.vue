<template>
    <div>
        <loader v-if="loading" />
        <div v-else>
            <table class="general-table">
        
        <thead>
            <tr >
                <th v-for="(item, index) in tableHeads" :key="index">{{item}}</th>
            </tr>
           
        </thead>
      <TableBody :userData="userData"/>

    </table>
    <Pagination :recordcount="recordcount"/>
        </div>
     
    </div>
    
   
</template>

<script setup lang="ts">
import { userApi } from '~/api/userData';
import { ref } from 'vue';
import TableBody from './tableBody.vue';
import Pagination from './pagination.vue'
import loader from '../utils/loader.vue';

let loading = ref(false)
let userData = ref([])
let recordcount = ref(0)
let tableHeads = ref(['#','نام','آژانس','موبایل','تلفن ثابت','آدرس','تاریخ ثبت نام','وضعیت','آخرین بازدید','عملیات'])

const api = new userApi()
async function getUserData() {
    let data = { "accountType": 0, "Adress": "", "Agencyname": "", "Codeajans": -2, "isTrusted": true, "mobile": "", "modal": false, "Nameandfamily": null, "phone": "", "skip": 0, "take": 10 }
    try {
        loading.value = true
        const res: any = await api.getUserData(data)
        userData.value = res?.message
        recordcount.value = res?.recordcount
    } catch (err) {
        console.log(err)
    }finally{
        loading.value = false
    }
}

onMounted(() => {
    getUserData()
})


</script>

<style scoped lang="scss">
 .general-table {
        border: 1px solid #e8e8e8;
        border-radius: 8px;
        overflow: hidden;
        box-sizing: initial;
        border-spacing: 0;
        direction: rtl;
        width: 100%;
        padding: 18px 0;

        & thead {
            padding: 8px 0;

            & th {
                height: 53px;
                padding: 3px 16px 0;
                border-bottom: 1px solid #e8e8e8;

                & span {
                    font-size: 14px;
                    // font-weight: $w_700;
                    color: black;
                }
            }
        }

    
    }
</style>