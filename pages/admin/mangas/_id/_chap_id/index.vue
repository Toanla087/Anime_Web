<template>
  <div class="chapters-spe">
    <div class="container">
      <div class="row">
          <div class="col">
            <h1>Mangas info</h1>
          </div>
        </div>
        <div class="row">
            <div class="col">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="Cover">
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="form.fileList"
                        >
                        <el-button size="small" type="primary">Click to upload</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="Name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Author">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="Activity form">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  layout: 'home',
  data() {
    return {
      chapters: [],
      form: {
            name: '',
            author: '',
            desc: '',
            fileList: [{
                name: '',
                url: ''
            }],
        },
    }
  },
  async asyncData(context) {
    try {
      const res = await axios
        .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}/chapters/${context.params.chap_id}`);
      return {
        chapters: res.data
      };
    } catch(e) {
      context.error(e);
    }
  },
  // mounted() {
  //   axios.get('https://mangakool-server.herokuapp.com/mangas/:id').then(response => {
  //     this.mangas = response.data
  //   });
  // }
}
</script>

<style scoped>
  .chapters-spe {
    margin-top: 55px;
  }
</style>