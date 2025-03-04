<script>
import FiscalDeclaracaoTabela from '../../../components/fiscal/FiscalDeclaracaoTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    FiscalDeclaracaoTabela,
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
