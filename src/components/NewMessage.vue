

<template>
<div class="new-message">
    <form @submit.prevent="addMessage">
     <label for="new-message">New message (enter to add)</label>
     <input type="text" name="new-message" v-model="">
    </form>

</div>
</template>

<script>
    export default{
        data(){
            return {
                NewMessage:null
            }
        }
    }
</script>