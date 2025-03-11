<script>
import SocietarioTabela from '../../components/societario/SocietarioTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    SocietarioTabela,
  },

  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },

  data () {
    return {
      currentTab: 'societario',
    }
  },

  methods: {

  },
}
</script>
