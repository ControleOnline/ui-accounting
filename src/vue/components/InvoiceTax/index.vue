<template>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      items   : [],
      saving  : false,
      loading : false,
    };
  },

  created() {
    this.onRequest();
  },

  computed: {
    ...mapGetters({
      myCompany: 'people/currentCompany',
      user: 'auth/user',
    }),
  },

  watch: {
    myCompany(company) {
      this.onRequest();
    },
  },

  methods: {
    onRequest() {
      let params = {};
      let items  = [];

      this.items = items;
    },
  },
};
</script>
