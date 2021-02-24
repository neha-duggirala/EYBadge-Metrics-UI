<template>
  <v-navigation-drawer
    app
    color="#f5f5f5"
    mini-variant-width="60"
    permanent
    v-model="drawer"
    :mini-variant="$store.state.mini"
    class="ats-sidebar"
  >
    <v-list>
      <v-list-item>
        <v-btn to="/Employee/1" icon depressed large>
          <v-icon color="#323754">mdi-account</v-icon>
        </v-btn>
        <v-list-item-title class="pl-2" @click="navigateTo(0)">Self Graphs</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-btn to="/EmployeeCards" icon depressed large>
          <v-icon color="#323754">mdi-account-multiple</v-icon>
        </v-btn>
        <v-list-item-title class="pl-2" @click="navigateTo(1)">Team Mates Metrics</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-btn to="/TeamCards" icon depressed large>
          <v-icon color="#323754">mdi-account-network</v-icon>
        </v-btn>
        <v-list-item-title class="pl-2" @click="navigateTo(2)">Peer Teams</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-btn to="/Manager" icon depressed large>
          <v-icon color="#323754">mdi-chart-areaspline</v-icon>
        </v-btn>
        <v-list-item-title class="pl-2" @click="navigateTo(3)">Business Intelligence </v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="nav-arrow" :class="{'nav-arrow-expanded': !($store.state.mini)}">
      <v-btn icon depressed large @click="navExtendCollapse()">
        <v-icon color="#323754" v-if="$store.state.mini">mdi-chevron-double-right</v-icon>
        <v-icon color="#323754" v-else>mdi-chevron-double-left</v-icon>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template> 

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: null,
      selectedNavItem: 0
    };
  },
  methods: {
    navExtendCollapse() {
      this.$store.dispatch("navExtendCollapse");
    },
    navigateTo(value) {
      if (value == 0) this.$router.push("/Employee/1");
      else if (value == 1) this.$router.push("/EmployeeCards");
      else if (value == 2) this.$router.push("TeamCards");
      else if (value == 3) this.$router.push("/Manager");
    }
  }
};
</script>

<style lang="scss">
.ats-sidebar {
  margin-top: 64px;
}
.nav-arrow {
  position: fixed;
  bottom: 70px;
  padding-left: 7px;
  width: 100%;
}
.nav-arrow-expanded {
  padding-left: 205px;
}
.v-list {
  height: 100%;
  .v-list-item {
    cursor: pointer !important;
  }
}
</style>