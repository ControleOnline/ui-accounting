<script>
import ServicosAdicionaisTabela from '../../../components/depto/ServicosAdicionaisTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    ServicosAdicionaisTabela,
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
