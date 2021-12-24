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
                    questions[this.count]['list'].forEach((text, index)=> {
                        $('#select-list').append(`<li data-number="${index+1}">${text}</li>`);
                    });
                },400);
            }else {
                console.log('結果発表～～～！');
            }
        }
        textPush(text) {
            $('#chat-ul').append(`<li>${text}</li>`);
        }
        answer() {
            $(body).on('click',() => {

            });
        }
        
    }

    const chat = new Chat();
    chat.output();
});