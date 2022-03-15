// ssp----------------------------------------------------------------
$('body').on('click','#sspPlus',function(e){
  
 let n = $('#ssp').val()
 n++
 $('#ssp').val(n)
 // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)+1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)+parseFloat(269)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)+parseFloat(269)
  $('#link').html(`฿${c}`)
})
$('body').on('click','#sspMinus',function(e){
  
  let n = $('#ssp').val()
  if(n == 0){
    alert('Quantity must be at least 0 ！')
  }else{
    n--
    $('#ssp').val(n)
    // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)-1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)-parseFloat(269)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)-parseFloat(269)
  $('#link').html(`฿${c}`)
  }
 })


//  ccs----------------------------------------------------------------------------
$('body').on('click','#ccsPlus',function(e){
  let n = $('#ccs').val()
  n++
  $('#ccs').val(n)
  // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)+1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)+parseFloat(250)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)+parseFloat(250)
  $('#link').html(`฿${c}`)
 })
 $('body').on('click','#ccsMinus',function(e){
   
   let n = $('#ccs').val()
   if(n == 0){
     alert('Quantity must be at least 0 ！')
   }else{
     n--
     $('#ccs').val(n)
     // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)-1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)-parseFloat(250)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)-parseFloat(250)
  $('#link').html(`฿${c}`)
   }
  })
  //msr-------------------------------------------------------------------------------
  $('body').on('click','#msrPlus',function(e){
  
    let n = $('#msr').val()
    n++
    $('#msr').val(n)
    // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)+1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)+parseFloat(330)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)+parseFloat(330)
  $('#link').html(`฿${c}`)
   })
   $('body').on('click','#msrMinus',function(e){
     
     let n = $('#msr').val()
     if(n == 0){
       alert('Quantity must be at least 0 ！')
     }else{
       n--
       $('#msr').val(n)
       // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)-1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)-parseFloat(330)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)-parseFloat(330)
  $('#link').html(`฿${c}`)
     }
    })

//msfp---------------------------------------------------------------------------
$('body').on('click','#msfpPlus',function(e){
  
  let n = $('#msfp').val()
  n++
  $('#msfp').val(n)
  // Item Total
let a = $('#IT').html()
a = a.replace('฿','')
a=parseFloat(a)+1
$('#IT').html(`฿${a}`)
// TO PAY
let b = $('#TP').html()
b = b.replace('฿','')
b=parseFloat(b)+parseFloat(280)
$('#TP').html(`฿${b}`)
// link
let c = $('#link').html()
c = c.replace('฿','')
c=parseFloat(c)+parseFloat(280)
$('#link').html(`฿${c}`)
 })
 $('body').on('click','#msfpMinus',function(e){
   
   let n = $('#msfp').val()
   if(n == 0){
     alert('Quantity must be at least 0 ！')
   }else{
     n--
     $('#msfp').val(n)
     // Item Total
let a = $('#IT').html()
a = a.replace('฿','')
a=parseFloat(a)-1
$('#IT').html(`฿${a}`)
// TO PAY
let b = $('#TP').html()
b = b.replace('฿','')
b=parseFloat(b)-parseFloat(280)
$('#TP').html(`฿${b}`)
// link
let c = $('#link').html()
c = c.replace('฿','')
c=parseFloat(c)-parseFloat(280)
$('#link').html(`฿${c}`)
   }
  })
  //hp------------------------------------
  $('body').on('click','#hpPlus',function(e){
  
    let n = $('#hp').val()
    n++
    $('#hp').val(n)
    // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)+1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)+parseFloat(240)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)+parseFloat(240)
  $('#link').html(`฿${c}`)
   })
   $('body').on('click','#hpMinus',function(e){
     
     let n = $('#hp').val()
     if(n == 0){
       alert('Quantity must be at least 0 ！')
     }else{
       n--
       $('#hp').val(n)
       // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)-1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)-parseFloat(240)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)-parseFloat(240)
  $('#link').html(`฿${c}`)
     }
    })
  //cshh----------------------------------------------------------------------
  $('body').on('click','#cshhPlus',function(e){
  
    let n = $('#cshh').val()
    n++
    $('#cshh').val(n)
    // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)+1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)+parseFloat(240)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)+parseFloat(240)
  $('#link').html(`฿${c}`)
   })
   $('body').on('click','#cshhMinus',function(e){
     
     let n = $('#cshh').val()
     if(n == 0){
       alert('Quantity must be at least 0 ！')
     }else{
       n--
       $('#cshh').val(n)
       // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)-1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)-parseFloat(240)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)-parseFloat(240)
  $('#link').html(`฿${c}`)
     }
    })
  //cc------------------------------------------------------------------------------------
  $('body').on('click','#ccPlus',function(e){
  
    let n = $('#cc').val()
    n++
    $('#cc').val(n)
    // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)+1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)+parseFloat(326)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)+parseFloat(326)
  $('#link').html(`฿${c}`)
   })
   $('body').on('click','#ccMinus',function(e){
     
     let n = $('#cc').val()
     if(n == 0){
       alert('Quantity must be at least 0 ！')
     }else{
       n--
       $('#cc').val(n)
       // Item Total
  let a = $('#IT').html()
  a = a.replace('฿','')
  a=parseFloat(a)-1
  $('#IT').html(`฿${a}`)
  // TO PAY
  let b = $('#TP').html()
  b = b.replace('฿','')
  b=parseFloat(b)-parseFloat(326)
  $('#TP').html(`฿${b}`)
  // link
  let c = $('#link').html()
  c = c.replace('฿','')
  c=parseFloat(c)-parseFloat(326)
  $('#link').html(`฿${c}`)
     }
    })