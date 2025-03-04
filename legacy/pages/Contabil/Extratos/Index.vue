<template>
  <q-page padding>
    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-12 q-mb-md text-h6 text-left">
            {{ $t('Contábil Extratos e Movimentações') }}
          </div>
        </div>
      </q-card-section>

      <ContabilExtratosTabela />

    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import ContabilExtratosTabela from '../../../components/contabil/ContabilExtratosTabela';

export default {
  components: {
    ContabilExtratosTabela,
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },

  data() {
    return {};
  },

  methods: {},
};
</script>