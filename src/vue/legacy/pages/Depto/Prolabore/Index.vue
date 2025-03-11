<script>
import DeptoProLaboreTabela from '../../../components/depto/DeptoProLaboreTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    DeptoProLaboreTabela,
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
