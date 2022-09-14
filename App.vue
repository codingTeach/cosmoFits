<script setup lang="ts">

//  import { StarIcon } from '@heroicons/vue/24/solid'

import * as deployFit from './functions/deployFit'
import * as deployHeader from './functions/deployHeader'
import * as changeStretch from './functions/changeStretch'


onMounted(() => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "/fits.js";
  document.body.appendChild(script);
})
onMounted(() => {
  const script = document.createElement("script");
  script.type = "stylesheet";
  script.src = "/index.css";
  document.body.appendChild(script);
})

</script>



<template>

  <div id="nav" class="flex items-center justify-between h-24 px-4 mt-4">

    <h1 class="font-bold text-[70px]">cosmoFits</h1>
    <a href="https://github.com/codingTeach/cosmoFits" target="lang">

    </a>
  </div>

  <div class="flex bbg">
    <div class="w-1/3 flex justify-center">
      <div class="flex flex-col">
        <input class="my-4" type="file" @change="deployFit.default.deployFit">
        <div>
          <button class="header mr-2" @click="deployHeader.default.deployHeader">
            Header
          </button>

          <ExportFit></ExportFit>

        </div>
        <select class="mt-5 h-10 rounded-lg" id="stretch" @change="changeStretch.default.changeStretch">
          <option value="linear" selected>Linear</option>
          <option value='square'>Square</option>
          <option value='sqrt'>Square root</option>
        </select>
        <label id='cursor_loc' class='monospaced pt-3'>[] </label>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
    <div>
      <div class="border-2 border-rose-500" id="fits_div" style='width:600px; height:600px;'>
      </div>


    </div>
    <div>

    </div>
  </div>
</template>
