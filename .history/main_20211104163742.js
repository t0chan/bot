$(() => {
    class Chat {
        constructor() {
          this.count = 0;//何問めかのカウント
          this.logs = [];//ユーザーがクリックした履歴
          
        }
        output() {
            this.textPush()
        }
        textPush(text) {
            $('#chat-ul').append(`<li>${text}</li>`);
        }
        
    }

    const chat = new Chat();
    chat.output();
});