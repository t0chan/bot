$(() => {
    class Chat {
        constructor() {
          this.count = 0;//何問めかのカウント
          this.logs = [];//ユーザーがクリックした履歴
          
        }
        output() {
            this.textPush(questions[this.count]['title']);
            questions[this.count]['list'].forEach((text, index)=> {
                $('#select-list').append(`<li data-number="${index+1}">${text}</li>`);
            });
        }
        textPush(text) {
            $('#chat-ul').append(`<li>${text}</li>`);
        }
        
    }

    const chat = new Chat();
    chat.output();
});