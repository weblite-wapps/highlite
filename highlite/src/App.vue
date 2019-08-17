<template>
  <v-app>
    <!-- <AppBar /> -->
    <!-- <ToolBar /> -->
    <v-btn flat color="grey">
      <span>Sign Out</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import ToolBar from "./components/ToolBar";
export default {
  name: "App",
  components: {
    AppBar,
    ToolBar
  },
  data: () => ({
    //
  })
};
</script>



