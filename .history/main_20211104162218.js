$(() => {
    class Chat {
        constructor() {
          this.count = 0;//何問めかのカウント
          this.logs = [];//ユーザーがクリックした履歴
          
        }
        output() {
            $('#chat-ul').append(questions[this.count]);
        }
        
    }

    const chat = new Chat();
   
});