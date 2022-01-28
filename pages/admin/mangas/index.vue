<template>
    <div class="users">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>This is Admin page</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1>Add a Manga</h1>
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
            <div class="row" v-for="(manga, index) in mangas" :key="index">
                <div class="col">
                    {{manga.manga_name}}
                    {{manga.manga_id}}
                    {{manga.num_of_chap}}
                    <b-button>Edit</b-button>
                    <b-button>Delete</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'home',
    data() {
        return {
            mangas: [],
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
    methods: {
      onSubmit() {
        console.log('submit!');
      },
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
      }

    },
    // mounted() {
    //     axios.get('https://mangakool-server.herokuapp.com/admin/users').then(response => {
    //     this.users = response.data
    //     });
    // },
    async asyncData(context) {
        try {

            const response= await axios.get('https://mangakool-server.herokuapp.com/admin/mangas', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('login')
                }
            });
            return {
                // .then(response => {
                    mangas: response.data
                //   });
            };
        } catch(e) {
            context.error(e);
        }
    }, 
}
</script>

<style scoped>
  .users {
    margin-top: 55px;
  }
</style>


