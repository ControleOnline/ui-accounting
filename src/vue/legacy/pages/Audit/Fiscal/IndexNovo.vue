<template>
  <q-page padding>
    <q-card style="min-height: 90vh;">
      <q-card-section>
        <div class="row">
          <div class="col-12 col-md-4 q-mb-md text-h6 text-left">
            {{ $t(docs_type + '.tittle') }}
          </div>
          <div class="col-12 col-md-8 q-mb-md">
            <div class="row justify-end">
              <q-btn :label="$t(docs_type + '.new')" icon="add" size="md" color="primary" :to="{
                name: 'DocsCreate'
              }" />
            </div>
          </div>
        </div>
      </q-card-section>

      <DocsTable :docs_type="docs_type" />

    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import DocsTable from '@controleonline/ui-legacy/ui-docs/src/vue/components/docs/DocsTable';

export default {
  components: {
    DocsTable,
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },

  data() {
    return {
      docs_type: 'audit-fiscal',
    };
  },

  methods: {},
};
</script>