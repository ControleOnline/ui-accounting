<template>
  <q-page padding>
    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-4 q-mb-md text-h6 text-left">
            {{ $t('Contábil Declarações') }}
          </div>
          <div class="col-8 q-mb-md">
            <div class="row justify-end">
              <q-btn
                :label ="$t('Nova declaração')"
                icon   ="add"
                size   ="md"
                color  ="primary"
                class  ="q-ml-sm"
                :to    ="{
                  name: 'ContabilDeclaracaoCreate'
                }"
              />
            </div>
          </div>
        </div>
      </q-card-section>

      <ContabilDeclaracaoTabela />

    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import ContabilDeclaracaoTabela from '../../../components/contabil/ContabilDeclaracaoTabela';

export default {
  components: {
    ContabilDeclaracaoTabela,
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