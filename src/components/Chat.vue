<template>
<div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
        <div class="card-content">
            <ul class="messages">
                <li>
                    <span class="teal-text">Name</span>
                    <span class="grey-text text-darken-3">messages</span>
                    <span class="grey-text time">time</span>
                </li>
            </ul>
            <div class="card-action">   
                <NewMessage :name="name"/>
            </div>
        </div>
    </div>
</div>
</template>

<script >

import NewMessage from '@/components/NewMessage'
    export default {
        name: 'Chat',
        props:['name'],
        components:{
            NewMessage
        }
        data(){
            return {

            }
        }
    }
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin-button: 400px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time {
    display: block;
    font-size: 1.2em;
}

</style>  