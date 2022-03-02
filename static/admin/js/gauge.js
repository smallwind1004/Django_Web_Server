function Gauge(c) {
    this.el = c.el // canvas的id
    this.maxLineNums = c.maxLineNums // 最大刻度
    this.unitLineNums = c.unitLineNums // 單位刻度內線條數
    this.data = c.data // 資料
    this.title = c.title // 大標題
    this.textBottom = c.textBottom // 下面的文字
    this.isAnimation = c.isAnimation //是否有動畫，預設關閉

    let canvas = document.getElementById(this.el),
        ctx = canvas.getContext('2d'),
        cWidth = canvas.width,
        cHeight = canvas.height;
    ctx.textAlign = "center"
    
    let animationData = 0 //動畫，當前指標的資料
    let startAngel = 0.75 * Math.PI // 儀表盤是個圓弧，設定1.5pi。
    let r = 0.4 * canvas.width 
    // 半徑將隨著canvas的尺寸而變化
    
    //生成漸變色組，可更改前兩個引數改變顏色
    let gradientColor = gradientColors('#17deea', '#e97f03', this.maxLineNums + 1)}