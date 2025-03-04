<script>
import DeptoSociosTabela from '../../../components/depto/DeptoSociosTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    DeptoSociosTabela,
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
