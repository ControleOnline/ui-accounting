<script>
import FiscalImpostosTabela from '../../../components/fiscal/FiscalImpostosTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    FiscalImpostosTabela,
  },

  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },

  data () {
    return {

    }
  },

  methods: {

  },
}
</script>
