$(() => {
    class Chat {
        constructor() {
          this.count = 0;//何問めかのカウント
          this.logs = [];//ユーザーがクリックした履歴
          
        }
        output() {
            $('#chat-ul').append(`<li>${questions[this.count]['title']}</li>`);
        }
        
    }

    const chat = new Chat();
   
});