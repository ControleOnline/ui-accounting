<template>
  <q-page padding>
    <div class="row">
      <div class="col-12">
        <q-card style="min-height: 90vh;">
          <q-card-section>
            <HistoricoTabela
              :id="id"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import HistoricoTabela from '../../../components/depto/HistoricoTabela';

export default {
  components: {
    HistoricoTabela,
  },

  created() {
    if (this.$route.params.id) {
      this.id = decodeURIComponent(this.$route.params.id);
    }
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },

  data() {
    return {
      id: null,
    };
  },

  methods: {},
};
</script>