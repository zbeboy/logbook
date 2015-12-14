/**
 * Created by lenovo on 2015/11/12.
 */
$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();

    $("#signin").click(function() {
        $.tipsBox({
            obj: $(this),
            str: "<small class='text-info'>签到</small>",
            callback: function() {
                $.post('/signin',{
                    title:'签到记录',
                    location:'未知',
                    content:''
                },function(data,status){
                   if(status){
                       if(data.state){
                           $('#calendarModal').modal('show');
                       }
                   }
                });
            }
        });
    });

    $("#modalName").blur(function(){
        if($("#modalName").val().length > 0){
            $.post("/checkModalName",{
                modalName:$("#modalName").val()
            },function(data,status){
               if(status){
                   if(data.state){
                       $("#checkModalName").removeClass("has-success").removeClass("has-error").addClass("has-success");
                       $("#addError").text("");
                   } else {
                       $("#checkModalName").removeClass("has-success").removeClass("has-error").addClass("has-error");
                       $("#addError").text("模板已存在!");
                   }
               } else {
                   $("#addError").text("网络异常!");
               }
            });
        } else {
            $("#checkModalName").removeClass("has-success").removeClass("has-error").addClass("has-error");
            $("#addError").text("模板名不能为空!");
        }
    });

    var time = new Date();
    dzscal_init("#tr2",{
        start_month: time.getMonth()+1
        ,start_year: time.getFullYear()
        ,start_weekday: 'Monday'
    });
});

var ADD_TITLE = "<div class='alert alert-default alert-dismissible fade in'>"+
    "<button type='button' class='close col-lg-2' data-dismiss='alert' aria-label='Close'>"+
    "<span aria-hidden='true' style='color:black'>&times;</span>"+
    "</button>"+
    "<label class='col-lg-2 control-label' style='color:black'>标题</label>"+
    "<div class='col-lg-8'>"+
    "<input class='form-control' data-id='1' value='' type='text' placeholder='标题' />"+
    "</div>"+
    "</div>";

var ADD_SUBHEAD = "<div class='alert alert-default alert-dismissible fade in'>"+
    "<button type='button' class='close col-lg-2' data-dismiss='alert' aria-label='Close'>"+
    "<span aria-hidden='true' style='color:black'>&times;</span>"+
    "</button>"+
    "<label class='col-lg-2 control-label' style='color:black'>副标题</label>"+
    "<div class='col-lg-8'>"+
    "<input class='form-control' data-id='2' value='' type='text' placeholder='副标题' />"+
    "</div>"+
    "</div>";

var ADD_SECTION = "<div class='alert alert-default alert-dismissible fade in'>"+
    "<button type='button' class='close col-lg-2' data-dismiss='alert' aria-label='Close'>"+
    "<span aria-hidden='true' style='color:black'>&times;</span>"+
    "</button>"+
    "<label style='color:black' class='col-lg-2 control-label'>段落</label>"+
    "<div class='col-lg-8'>"+
    "<textarea class='form-control' data-id='3' rows='3' value=''></textarea>"+
    "</div>"+
    "</div>";


function compile(){
    $('#templateModal').modal('hide');
    $('#compileModal').modal('show');
}

function deleteTemplate(type,obj){
    if(type === 'hidden'){
        $(obj).parent().parent().next().removeClass('hidden');
    }else if(type === 'cancel'){
        $(obj).parent().parent().addClass('hidden');
    } else if(type === 'ok'){
        $(obj).parent().parent().parent().remove();
    }

}

function add(){
    $('#templateModal').modal('hide');
    $('#addModal').modal('show');
}

function addContent(type){
    if(type === 'title'){
        $("#templateContent").append(ADD_TITLE);
    }else if(type === 'subhead'){
        $("#templateContent").append(ADD_SUBHEAD);
    }else if(type === 'section'){
        $("#templateContent").append(ADD_SECTION);
    }
}

function addModalObj(html,typeId,value,modalName){
    this.html = html;
    this.typeId = typeId;
    this.value = value;
    this.modalName = modalName;
}

/** 保存增加模板 */
function saveAddModal(){

    if($("#modalName").val().length > 0){
        $.post("/checkModalName",{
            modalName:$("#modalName").val()
        },function(data,status){
            if(status){
                if(data.state){
                    $("#checkModalName").removeClass("has-success").removeClass("has-error").addClass("has-success");
                    $("#addError").text("");
                } else {
                    $("#checkModalName").removeClass("has-success").removeClass("has-error").addClass("has-error");
                    $("#addError").text("模板已存在!");
                    return;
                }
            } else {
                $("#addError").text("网络异常!");
                return;
            }
        });
    } else {
        $("#checkModalName").removeClass("has-success").removeClass("has-error").addClass("has-error");
        $("#addError").text("模板名不能为空!");
        return;
    }

    var saveData = new Array();
    for(var i=0;i<$("#templateContent").find(".form-control").length;i++){
        var obj = $($("#templateContent").find(".form-control")[i]);
        var saveObj = null;
        if(obj.attr("data-id") == 1){
            saveObj = new addModalObj(ADD_TITLE,obj.attr("data-id"),obj.val(),$("#modalName").val());
        } else if(obj.attr("data-id") == 2){
            saveObj = new addModalObj(ADD_SUBHEAD,obj.attr("data-id"),obj.val(),$("#modalName").val());
        } else if(obj.attr("data-id") == 3){
            saveObj = new addModalObj(ADD_SECTION,obj.attr("data-id"),obj.val(),$("#modalName").val());
        }
        saveData.push(saveObj);
    }
    $.post("/addModal",{
        saveData:JSON.stringify(saveData)
    },function(data,status){
       if(status){
           if(data.state){
               $('#addModal').modal('hide');
           } else {
               $("#addError").text("模板添加失败!");
           }
       } else {
           $("#addError").text("网络异常!");
       }
    });

}

;(function($) {
    $.extend({
        tipsBox: function(options) {
            options = $.extend({
                obj: null,  //jq对象，要在那个html标签上显示
                str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
                startSize: "12px",  //动画开始的文字大小
                endSize: "30px",    //动画结束的文字大小
                interval: 600,  //动画时间间隔
                color: "red",    //文字颜色
                callback: function() {}    //回调函数
            }, options);
            $("body").append("<span class='num'>"+ options.str +"</span>");
            var box = $(".num");
            var left = options.obj.offset().left + options.obj.width() / 2;
            var top = options.obj.offset().top - options.obj.height();
            box.css({
                "position": "absolute",
                "left": left + "px",
                "top": top + "px",
                "z-index": 9999,
                "font-size": options.startSize,
                "line-height": options.endSize,
                "color": options.color
            });
            box.animate({
                "font-size": options.endSize,
                "opacity": "0",
                "top": top - parseInt(options.endSize) + "px"
            }, options.interval , function() {
                box.remove();
                options.callback();
            });
        }
    });
})(jQuery);