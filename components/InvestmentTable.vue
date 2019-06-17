<template>
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Round</th>
        <th>Funding Date</th>
        <th>Amount</th>
        <th>Investors</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(investment, index) in investmentHistory" :key="index">
        <td>{{investment.round}}</td>
        <td>{{investment.date}}</td>
        <td>${{investment.amount}}</td>
        <td>{{investment.investor}}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  data: function() {
    return {
      investmentHistory: [
        {
          round: "Series G",
          date: "Jan 2019",
          amount: "100M",
          investor: "Accel Partners"
        },
        {
          round: "Series F",
          date: "Mar 2018",
          amount: "75M",
          investor: "GGV Capital"
        },
        {
          round: "Series E",
          date: "Mar 2016",
          amount: "60M",
          investor: "Accel Partners"
        },
        {
          round: "Series D",
          date: "Jul 2014",
          amount: "45M",
          investor: "Index Ventures"
        },
        {
          round: "Series C",
          date: "Mar 2012",
          amount: "35M",
          investor: "Google Capital"
        },
        {
          round: "Series B",
          date: "Mar 2011",
          amount: "21M",
          investor: "Sequoia Capital"
        },
        {
          round: "Series A",
          date: "Mar 2009",
          amount: "12M",
          investor: "Accel Partners"
        }
      ]
    };
  }
};
</script>
