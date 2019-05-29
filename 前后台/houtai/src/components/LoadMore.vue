<template>
  <div class="dialog">
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
      :close-onclick-modal="false"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
    >
      <div class="form">
        <el-form
          ref="form"
          :model="formData"
          :rules="form_rules"
          label-width="120px"
          style="margin:10px;width:auto;"
        >
              <el-form-item prop="id" label="这条消息的id:">
            <el-input type="id" v-model="formData.id"></el-input>
          </el-form-item>
          <el-form-item prop="title" label="标题:">
            <el-input type="title" v-model="formData.title"></el-input>
          </el-form-item>
           <el-form-item prop="desc" label="描述:">
            <el-input type="desc" v-model="formData.desc"></el-input>
          </el-form-item>
          <el-form-item prop="imgUrl" label="图片地址:">
            <el-input type="imgUrl" v-model="formData.imgUrl"></el-input>
          </el-form-item>
          <el-form-item prop="Like" label="喜欢:">
            <el-input type="Like" v-model="formData.Like"></el-input>
          </el-form-item>
          <el-form-item prop="Comment" label="评论:">
            <el-input type="Comment" v-model="formData.Comment"></el-input>
          </el-form-item>
          <el-form-item class="text_right">
            <el-button @click="dialog.show=false">取消</el-button>
            <el-button type="primary" @click="onSubmit('form')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "LoadMore",
  data() {
    return {
      form_rules: {
        id: [{ required: true, message: "id不能为空", trigger: "blur" }],
        desc: [{ required: true, message: "描述不能为空", trigger: "blur" }],
        title: [{ required: true, message: "标题不能为空", trigger: "blur" }],
        // imgUrl: [{ required: true, message: "图片地址不能为空", trigger: "blur" }]
        Like: [{ required: true, message: "喜欢不能为空", trigger: "blur" }],
        Comment: [{ required: true, message: "评论不能为空", trigger: "blur" }],
      }
    };
  },
  props: {
    dialog: Object, //接收props
    formData: Object
  },
  methods: {
    onSubmit(form) {
      console.log('2',this.formData);
      this.$refs[form].validate(valid => {
        if (valid) {
          const url =
            this.dialog.option == "add" ? "add" : `edit/${this.formData._id}`;
          this.$axios.post(`/api/loadMore/${url}`, this.formData).then(res => {
            //添加成功
            this.$message({
              message: "数据添加成功",
              type: "success"
            });
          });
          //隐藏dialog
          this.dialog.show = false;
          this.$emit("update");//让父亲（FundList组件）执行这个方法，重新获取数据
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
