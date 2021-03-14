<template>
    <div>
        <form @submit.prevent="onSubmit">
            <h3>{{ currency.Name}}</h3>
            <span class="mon_list">
                <strong>{{currency.CharCode}}</strong>
                <strong>{{currency.Nominal}}</strong>
                <strong>{{Math.round(currency.Value)}}</strong>
            </span>
            <input  type="number" 
                    v-model.number="val1"
            >
            
            <input  type="number" 
                    v-model.number="val2"
            >
            <button type="submit">Exchange</button>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        currency: {
            type: Object
        }
    },
    data() {
        return {
            val1: null,
            val2: null,
            newval1: null,
            newval2: null,
        }
    },
    methods: {
        onSubmit() {
            if (this.val1 !== this.newval1){
                return this.chRub()
            }
            if (this.val2 !== this.newval2){

                return this.chVal()
            }
        },
        chRub() {
            this.val2 = this.val1 * Math.round(this.currency.Value)  
            this.newval1 = this.val1
            this.newval2 = this.val2
        },
        chVal() {
            this.val1 = this.val2 / Math.round(this.currency.Value)
            this.newval1 = this.val1
            this.newval2 = this.val2
        }
    },

    mounted() {
            this.val1 = Math.round(this.currency.Nominal)
            this.val2 = Math.round(this.currency.Value)
    },

    computed: {
        // val22(){
        //     set: return this.chRub()
        // },
        // val11(){
        //     return this.chVal()
        // }

    }
}
</script>

<style scoped>
    .mon_list{
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 2rem 30rem;
        margin-bottom: 1rem;
    }
</style>