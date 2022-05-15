<template>
  <div>
    <p>全选：<input type="checkbox" v-model="isAll" /></p>
    <ul>
      <li v-for="item in list" :key="item.id">
        <input type="checkbox" v-model="item.checked" /> {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "八戒",
          checked: false,
        },
        {
          id: 2,
          name: "悟空",
          checked: false,
        },
        {
          id: 3,
          name: "唐僧",
          checked: false,
        },
        {
          id: 4,
          name: "沙僧",
          checked: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      set(value) {
        this.list.forEach((item) => {
          item.checked = value;
        });
      },
      get() {
        let all = true;
        this.list.forEach((item) => {
          if (item.checked === false) {
            all = false;
          }
        });
        return all;
      },
    },
  },
};
</script>

<style>
</style>