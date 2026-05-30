<!-- Contract imported from AGENTS.md
## Escopo
- Modulo de contabilidade, fiscal e rotinas administrativas relacionadas.
- A implementacao encontrada aqui hoje esta em Vue legado.

## Estado
- Este modulo hoje nao tem `src/react`; a implementacao disponivel fica em `src/vue`.
- Em novos prompts, priorizar modulos React equivalentes quando existirem.
- So mexer em `src/vue` se o pedido for explicitamente sobre este fluxo ou se nao houver alternativa atual.

## Quando usar
- Prompts sobre contabil, fiscal, pro-labore, impostos, folha e telas administrativas antigas.
-->

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
