<template>
  <div>
    <div id="map"></div>
    <div ref="mapview"></div>
  </div>
</template>

<route>
{ meta: { title: '近くの店舗' } }
</route>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const mapview = ref();
const src = ref(
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyDHODMwKXHdNmu9qbUgYKsF_e2grzTQTFk&callback=initMap',
);
onMounted(async () => {
  const tag = document.createElement('script');
  tag.src = src.value;
  tag.defer = true;
  mapview.value.append(tag);
});
</script>

<style scoped lang="scss">
#map {
  height: 80% !important;
  position: absolute;
  width: 100%;
}
</style>
