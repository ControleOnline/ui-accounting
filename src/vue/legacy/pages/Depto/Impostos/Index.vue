<script>
import DeptoImpostosTabela from '../../../components/depto/DeptoImpostosTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    DeptoImpostosTabela,
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
