<template>
  <div>Home
   <button @click.prevent="submitProduct">Submit</button>
  </div>
</template>

<route>
   { meta: { title: 'トップ' } }
   </route>
<script setup lang="ts">
import { onMounted } from 'vue';
import V2Api from '@/util/services/V2Api';
import ApiDefaultResponse from '@/domain/entity/response/ApiDefaultResponse';

const api = new V2Api(import.meta.env.VITE_API_V2_URL as string, {
  'x-api-key': import.meta.env.VITE_SECRET as string,
  'x-comsbi-client-id': import.meta.env.VITE_CLIENT_ID as string,
});

onMounted(async () => {
  getUser();
  getUserById();
});

async function getUser() {
  const response = await api.getUser(ApiDefaultResponse);
}

async function getUserById() {
  const response = await api.getUserById(1, ApiDefaultResponse);
}

async function submitProduct(){
   const data: any = { id: 4, name: 'product' , category: 'category' };
   const response = await api.putProduct(ApiDefaultResponse,data);
}

</script>

<style scoped lang="scss"></style>
