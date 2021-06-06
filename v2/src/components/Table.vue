<template>
  <div>
    <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->
    <div class="row">
      <b-col cols="6">
        <span v-for="(el, index) in rawData" :key="index">
          {{ el }} <br />
        </span>
      </b-col>
      <b-col cols="6">
        <span v-for="(el, index) in sortedData" :key="index">
          {{ el }} <br />
        </span>
      </b-col>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      grouped: [],
      fields: [
        {
          key: 'last_name',
          sortable: true,
        },
        {
          key: 'first_name',
          sortable: false,
        },
        {
          key: 'age',
          label: 'Person age',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: 'danger',
        },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
        },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    }
  },
  computed: {
    ...mapGetters('data', [
      'rawData',
      'sortedData',
      'groupedbyWellData',
      'extractedWells',
      'rawAdjustedValues',
    ]),
  },
}
</script>
