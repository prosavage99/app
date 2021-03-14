<template>
    <div>
        <MoneyList 
            v-for="currency of currencys"
            v-bind:currency="currency"
        />
    </div>
</template>

<script>
import MoneyList from '@/components/MoneyList'
import axios from 'axios'

export default {
    data() {
      return {
          currencys: [    
            // {id: 1, title: 'USD', nominal: 1, exchangeRate: 55},
            // {id: 2, title: 'EUR', nominal: 1, exchangeRate: 85},
            // {id: 3, title: 'BYN', nominal: 1, exchangeRate: 30}
          ],         
      }
    },
    mounted() {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
        axios.get(url)
            .then((response) => {
                console.log(response.data.Valute)
                this.currencys = response.data.Valute
                })
    },
    components: {
        MoneyList
    }
}
</script>