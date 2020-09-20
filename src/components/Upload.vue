<template>
<div class="row">
  <div class="row">
      <p>{{csvdata}}</p>
</div>
<div class="input-group mb-3">
  <div class="custom-file">
    <input type="file" @change="uploadFile" class="custom-file-input" id="inputGroupFile02">
    <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
    
  </div>
  <div class="input-group-append">
    <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
  </div>
</div>
</div>
</template>
<script>
import Papa from 'papaparse';

  export default {
    data() {
      return {
        csvdata:[],
      }
    },
    methods: {
      uploadFile(e){
        let file = e.target.files[0];
        Papa.parse(file, {
	      complete: function(results) {
        console.log(results);
        this.csvdata = results;
	      }
        });
      }
      }
    }
</script>