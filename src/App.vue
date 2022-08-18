<script setup lang="ts">

import * as deployFit from './functions/deployFit'
import * as deployHeader from './functions/deployHeader'
import * as changeStretch from './functions/changeStretch'
import ExportFit from './components/exportFit.vue'

/*
const getBase64 = (url: string) => {
  let img = new Image()
  img.src = url;
  img.crossOrigin = 'Anonymous';

  let canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0);

  let b64 = canvas.toDataURL('image/png').replace(/^data:image.+;base64,/, '');
  //console.log(b64);

  return b64;
}

getBase64("./nasa.jpg")
*/
</script>

<template>

  <div id="nav" class="flex items-center justify-center h-11">
    <h1 class="mr-4">Home</h1>
    <h1>FITS</h1>
  </div>

  <div class="flex">
    <ExportFit></ExportFit>
    <div class="w-1/3">
      <div class="flex flex-col">
        <input type="file" @change="deployFit.default.deployFit">
        <button @click="deployHeader.default.deployHeader">
          Header
        </button>
        <select id="stretch" @change="changeStretch.default.changeStretch">
          <option value="linear" selected>Linear</option>
          <option value='square'>Square</option>
          <option value='sqrt'>Square root</option>
        </select>
        <label id='cursor_loc' class='monospaced'>[] </label>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
    <div>
      <div id="fits_div" style='width:617px; height:617px;'>
      </div>


    </div>
    <div>

    </div>
  </div>
</template>
