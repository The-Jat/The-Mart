$((function(){$.fn.datepicker&&$("#date_of_birth").datepicker({format:"yyyy-mm-dd",orientation:"bottom"}),$("#avatar").on("change",(function(a){var t=a.currentTarget;if(t.files&&t.files[0]){var e=new FileReader;e.onload=function(a){$(".userpic-avatar").attr("src",a.target.result)},e.readAsDataURL(t.files[0])}}))}));