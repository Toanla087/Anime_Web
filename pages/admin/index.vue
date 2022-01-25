<template>
  <div class="admin">
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <b-button to="admin/mangas" class="btn-admin">Manga list</b-button>    
        </div>
        <div class="col">
          <b-button to="admin/users" class="btn-admin">User list</b-button>
        </div>
      </div>
        <!-- <div class="row justify-content-center overflow-auto">
            <div class="col-5"> -->
              <!-- <div class=""> -->
              <!-- </div> -->
            <!-- </div>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'home',
}
</script>

<style scoped>
    .admin {
        margin-top: 55px;
    }

    .btn-admin {
      margin-top: 100px;
    }
</style>
