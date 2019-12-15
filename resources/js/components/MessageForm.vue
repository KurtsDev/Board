<template>
        <div class="messageArea">
            <form v-on:submit.prevent="messageSubmit">

                <label for="messageTitle">Заголовок</label>
                <input type="text" id="messageTitle" name="messageTitle" v-model="messageTitleVal">

                <label for="messageText">Сообщение</label>
                <textarea name="messageText" id="messageText" v-model="messageTextVal"></textarea>

                <button type="submit">Отправить</button>

            </form>
        </div>
</template>

<script>
  export default {
      data()  {
          return {
              messageTitleVal: '',
              messageTextVal: '',
          }
      },
      methods: {
          messageSubmit: function () {
              this.loading = true;
                  axios
                      .post('/api/store', {
                          title: this.messageTitleVal,
                          message: this.messageTextVal,
                      })
                      .then(response => {
                          this.loading = false;
                      });

          }
      }
  }

</script>




<style scoped>
    .messageArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>
