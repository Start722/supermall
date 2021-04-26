import backtop from 'components/content/backtop/backtop';

export const backtopmixin = {
  components:{
    backtop
  },
  data(){
    return{
      isshowbacktop:false
    }
  },
  methods:{
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500);
    },
  }
}