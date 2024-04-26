<template>
    <tbody>
        
        <tr v-for="(item, index) in userData" :key="index">
            <td title="#"><span>{{index + 1}} </span></td>
            <td title="نام"><span>{{ item.nameandfamily.split(' ').reverse().join(' ') }}</span></td>
            <td title="آژانس"><span>{{ item.agencyname }}</span></td>
            <td title="موبایل"><span>{{ item.mobile }}</span></td>
            <td title="تلفن ثابت"><span>{{ item.phone.split('').reverse().join('')}}</span></td>
            <td title="آدرس"><span>{{ item.adress }}</span></td>
            <td title="تاریخ ثبت نام"><span>{{ item.dateofRegistration }}</span></td>
            <td title="وضعیت"><span :class="[item.userstatus ? 'active' : '']">{{ item.userstatus ? 'فعال' : 'غیرفعال' }}</span></td>
            <td title="آخرین بازدید"><span>{{  item.lastvisit}}</span></td>
            <td title="عملیات">...</td>
        </tr>
    </tbody>
</template>


<script setup lang="ts">


const props = 
  defineProps<{
    userData: any
  }>()


  
  </script>


<style lang="scss">
tbody {
    & .active{
        background-color: #2DC446;
        padding: 6px 12px;
        border-radius: 8px;
        color: white;
    }
            & td {
            padding: 16px 0;
                padding: 0 16px;
                border-bottom: 1px solid #E8E8E8;
                height: 80px;
            }

            & tr:nth-child(even) {
                background-color: white;
            }

            & tr:nth-child(odd) {
                background-color: #fdf7eb;
            }

            & tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
                background-color: #f9f7f4 ;
            }

            & tr:last-child {
                & td {
                    border-bottom: unset;
                }
            }
        }
</style>