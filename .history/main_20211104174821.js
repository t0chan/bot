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
            $('body').on('click','#select-list li', (e) => {
                this.textPush($(e.target).text());
                this.logs[this.count] =Number( $(e.target).attr('data-number'));
                $('#select-list li').remove()
                this.count++;
            });
        }
        
    }

    const chat = new Chat();
    chat.output();
    chat.answer();
});