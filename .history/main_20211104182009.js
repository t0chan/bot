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
                this.result();
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
                this.count++;
                setTimeout(() => {
                    $('#select-list li').remove();
                    this.output();
                    this.positioning();
                },1000);
            });
        }
        positioning() {
            $('#chat-field').animate({
                scrollTop:$('#chat-ul').height()
            }, 800, 'swing')
        }
        result() {
            const total = this.logs.reduce((a,x) => a+=x,0);
            let message ="";
           if (total <= 5) {
               message = 'GOALはすぐそこです！'
           }else if (total >=15{
                message = 'まだまだこれからです！'
           }
           this.textPush(message);
        }
        
    }

    const chat = new Chat();
    chat.output();
    chat.answer();
});