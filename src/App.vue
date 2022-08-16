<script setup lang="ts">

import * as deployFit from './functions/deployFit'
import * as deployHeader from './functions/deployHeader'
import * as changeStretch from './functions/changeStretch'

</script>

<template>

  <div id="nav" class="flex items-center justify-center h-11">
    <h1 class="mr-4">Home</h1>
    <h1>FITS</h1>
  </div>

  <div class="flex">
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
