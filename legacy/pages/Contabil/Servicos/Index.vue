<template>
  <q-page padding>
    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-12 q-mb-md text-h6 text-left">
            {{ $t('Contábil Solicitações de Serviços Adicionais') }}
          </div>
        </div>
      </q-card-section>

      <ServicosAdicionaisTabela />

    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import ServicosAdicionaisTabela from '../../../components/contabil/ServicosAdicionaisTabela';

export default {
  components: {
    ServicosAdicionaisTabela,
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