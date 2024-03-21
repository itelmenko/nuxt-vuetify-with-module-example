<template>
  <div>
    <h1>Welcome to the homepage</h1>

    <h2>Vuetify</h2>

    <v-text-field placeholder="Example of textfield"></v-text-field>

    <v-select
      placeholder="Select a state"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
    ></v-select>

    <v-textarea placeholder="Input your comment here"></v-textarea>

    <v-btn color="primary"> Primary </v-btn>
  </div>
</template>
