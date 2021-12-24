$(() => {
    class Chat {
        constructor() {
          this.count = 0;//何問めかのカウント
          this.logs = [];//ユーザーがクリックした履歴
          
        }
        output() {
            if (this.count < questions.length) {

                this.textPush(questions[this.count]['title']);
                setTimeout(() => {
                    
                })
            }else {
                console.log('結果発表～～～！');
            }
        }
        textPush(text) {
            $('#chat-ul').append(`<li>${text}</li>`);
        }
        
    }

    const chat = new Chat();
    chat.output();
});