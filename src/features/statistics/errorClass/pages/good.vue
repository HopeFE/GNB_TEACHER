<template>
  <div>
    <card v-for="(item, index) in ErrorclassGood.index.list" :key="index">
      <div class="weui-panel__hd" slot="header" style='color:#4cc0be'>
        {{item.chapterName}}
      </div>
      <div slot="content" @click="$router.push({name:'example', params: {type: item.form, grade: item.grade, subjectId: item.subject_id, id: item.exercisesId}})">
        <div v-html="item.stem"></div>
        <div v-if="item.opt.hasOwnProperty('A')">
          <div v-for="(value, key) in item.opt" :key='value' style="padding-top:5px;">{{ key }}： <p v-html="value" style="display:inline-block"></p></div>
        </div>
      </div>
      <div slot="footer">
        <div class="weui-cell weui-cell_link" style='padding:5px 15px'>
          <div class="weui-cell__bd">
            <flexbox>
              <flexbox-item :span="3">难度: {{item.degree}}</flexbox-item>
              <flexbox-item :span="5">更新: {{item.time | ymd}}</flexbox-item>
              <flexbox-item :span="4" @click.native="setStatisticsGoodAssembleUpdate({from: item.form, id: item.exercisesId, index: index})" style='text-align:right'>
                <i v-if='item.isAssembly' class="icon iconfont icon-correct" style="color:#4cc0be;margin-right:1rem;"></i>
                <i v-else class="icon iconfont icon-icon073102" style="color:#4cc0be;margin-right:1rem;" ></i>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
      </div>
    </card>
    <div style="text-align:center;padding:20px 0;">
      <spinner v-if="loading" type="lines"></spinner>
      <div>
        <p style="font-size:16px;color:#4cc0be" v-if="loadingNoData">已经加载全部错题~</p>
        <p style="font-size:16px;color:#4cc0be" v-if="!loadingNoData && !loading" @click="_getData">点我加载更多</p>
      </div>
    </div>
  </div>
</template>

<script>
import {XHeader, Group, Card, Cell, Spinner, Flexbox, FlexboxItem, XButton, TransferDomDirective as TransferDom} from 'vux'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'good',
  components: {
    XHeader, Group, Card, Cell, Spinner, Flexbox, FlexboxItem, XButton
  },
  computed: {
    ...mapGetters(['ErrorclassGood'])
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      loading: false,
      loadingNoData: false
    }
  },
  methods: {
    ...mapActions(['getStatisticsGood', 'setStatisticsGoodAssembleUpdate', 'setStatisticsScroll', 'getStatisticsComment']),
    _getData () {
      this.loading = true
      this.getStatisticsGood().then((res) => {
        if (res.data.data.offset.length === 0) {
          this.loadingNoData = true
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.ErrorclassGood.index.reset) {
        vm._getData()
      }
      vm.$parent.$refs.viewBoxBody.scrollTop = vm.ErrorclassGood.index.scroll
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setStatisticsScroll({type: 'good', height: this.$parent.$refs.viewBoxBody.scrollTop})
    next()
  }
}
</script>
<style scoped>
.weui-btn + .weui-btn{
  margin-top:0;
}
.assembleCount{
  position: fixed;
  background:#4cc0be;
  color:#fff;
  font-size: .9rem;
  height: 3.5rem;
  width: 3.5rem;
  box-sizing: border-box;
  padding:.5rem .75rem;
  border-radius: 50%;
  bottom: 10%;
  right: 5%;
  box-shadow: 2px 2px 7px #4cc0be;
  text-align: center;
}
.checker-popup{
  background: #fff;
}
.check-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 8px 0;
  width:32%;
  margin-right: 0px;
  line-height: 18px;
  text-align:center;
  margin-bottom: 10px;
  border-radius: 15px;
}
.check-item-selected {
  background-color: #4cc0be;
  color: #fff;
}
.check-item-disabled {
  color: #999;
}
</style>
