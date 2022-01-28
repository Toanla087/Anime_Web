<template>
    <div class="mangas-spe">
      <div class="container" v-for="(manga, index) in mangas" :key="index">
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
                        <el-input v-model="form.names"></el-input>
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
        <div class="row">
            <div class="col">
                <h1>Add new chapters</h1>
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
                    <el-form-item label="Chap number">
                        <el-input v-model="form.num"></el-input>
                    </el-form-item>
                    <el-form-item label="Name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Content">
                        <el-input type="textarea" v-model="form.content"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addChapter">Create</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="row" v-for="(chapter, index) in chapters" :key="index">
          <div class="col">
            {{chapter.chap_name}}
            {{chapter.time_up}}
            <b-button :to="`${manga.manga_id}/${chapter.chap_id}`">Edit</b-button>
            <b-button>Delete</b-button>
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
      mangas: [],
    //   genres: [],
      chapters: [],
      form: {
            name: '',
            num: '',
            content: '',
            fileList: [{
                name: '',
                url: ''
            }],
        },
    }
  },
   methods: {
    //   onSubmit() {
    //     console.log('submit!');
    //   },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
      },
      addChapter() {
        // if (this.form.trim().length === 0) {
        //     return
        // }
        this.$store.dispatch('mangas/addChapter', {
            cover: this.form.fileList,
            chap_name: this.form.name,
            chap_id: this.form.num,
            chap_content: this.form.content,
        })
        },

    },
  async asyncData(context) {
    try {
      const response = await axios
        .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}`);
    //   const ans = await axios
    //     .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}/genres`);
      const res = await axios
        .get(`https://mangakool-server.herokuapp.com/mangas/${context.params.id}/chapters`);
      return {
        mangas: response.data,
        chapters: res.data,
        // genres: ans.data
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
  .mangas-spe {
    margin-top: 55px;
  }
</style>