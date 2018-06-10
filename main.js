let time = 6000
let n = 1
let id = setAutoplay()
bindEvent()

function setAutoplay(){
    return setInterval(()=>{
        $('.slideShow-wrapper>footer>ul>li').eq(1+n%4).trigger('click')
    },time)
}

function bindEvent(){
    $('.slideShow-wrapper>footer>ul>li').on('click',(e)=>{
        let index = $(e.currentTarget).index()
        if(index === 0) {return undefined}
        n =index
        $('.slideShow-wrapper>footer>ul>li').removeClass('active')
        $(e.currentTarget).addClass('active')
        $('.slides').css(
                {
                transform : `translateX(${-(index-1)*920}px)`
                }
            )
    })
    
    $('.slideShow-wrapper').on('mouseenter',()=>{window.clearInterval(id)})
        .on('mouseleave',()=>{id=setAutoplay()})
}
