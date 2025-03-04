<script>
import MensagensTabela from '../../components/societario/MensagensTabela';
import { mapGetters } from 'vuex';

export default {
  components: {
    MensagensTabela,
  },

  created() {
    if (this.$route.params.id) {
      this.id = decodeURIComponent(this.$route.params.id);
    }
  },

  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },

  data () {
    return {
      id: null,
    }
  },

  methods: {

  },
}
</script>
