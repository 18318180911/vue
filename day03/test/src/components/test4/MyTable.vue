<template>
  <div>
      <table>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <!-- <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td><img :src="item.headImgUrl" alt="" /></td> -->
          <slot :row="item" :index="index"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>