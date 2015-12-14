/**
 * Created by lenovo on 2015/11/12.
 */

$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();

    $("#registUserName").blur(function(){
        if($("#registUserName").val().length<=0 || $("#registUserName").val().length > 20){
            $("#checkUserName").removeClass('has-success').removeClass("has-error").addClass('has-error');
            $("#registError").text('用户名应是1-20个字符！');
        } else {
            $.post('/checkUser',{
                username:$("#registUserName").val()
            },function(data,status){
                if(status){
                    if(data.state){
                        $("#checkUserName").removeClass('has-error').removeClass("has-success").addClass('has-success');
                        $("#registError").text('');
                    } else {
                        $("#checkUserName").removeClass('has-success').removeClass("has-error").addClass('has-error');
                        $("#registError").text('用户名已存在！');
                    }
                } else {
                    $("#registError").text('网络异常！');
                }
            });
        }
    });

    $("#registPassword").blur(function(){
        if($("#registPassword").val().length <=0 || $("#registPassword").val().length > 30){
            $("#checkPassword").removeClass('has-success').removeClass('has-error').addClass('has-error');
            $("#registError").text('密码应是1-30个字符！');
        } else {
            $("#checkPassword").removeClass('has-error').removeClass('has-success').addClass('has-success');
            $("#registError").text('');
        }
    });

    $("#registOk").blur(function(){
        if($("#registPassword").val().length>0 && $("#registPassword").val().length <=30){

            $("#checkPassword").removeClass('has-error').removeClass('has-success').addClass('has-success');
            $("#registError").text('');

            if($("#registPassword").val() != $("#registOk").val()){
                $("#checkRepeatPassword").removeClass('has-success').removeClass('has-error').addClass('has-error');
                $("#registError").text('密码不一致！');
            } else {
                $("#checkRepeatPassword").removeClass('has-error').removeClass('has-success').addClass('has-success');
                $("#registError").text('');
            }
        } else {
            $("#checkPassword").removeClass('has-success').removeClass('has-error').addClass('has-error');
            $("#registError").text('密码应是1-30个字符！');
        }
    });

});

function regist(){
    $('#myModal').modal('hide');
    $('#registModal').modal('show');
}

function submitLogin(){
    var username = $("#loginUserName").val();
    var password = $("#loginPassword").val();

    if(username.length<=0){
        $('#loginError').text('用户名不能为空！');
        return;
    }

    if(password.length<=0){
        $('#loginError').text('密码不能为空！');
        return;
    }

    $.post("/login",{
        username:username,
        password:password
    },function(data,status){
        if(status){
            if(data.state){
                $('#myModal').modal('hide');
                window.location.href='/main';
            } else {
                $('#loginError').text(data.msg);
            }
        } else {
            $('#loginError').text('网络异常，请稍后重试！');
        }
    });
}

function submitRegist(){
    var username = $("#registUserName").val();

    var password = $("#registPassword").val();

    var repeatPassword = $("#registOk").val();

    var usernameIsRight = false;

    var passwordIsRight = false;

    var repeatPasswordIsRight = false;

    if(username.length <= 0||username.length>20){
        $("#registUserName").focus();
        $("#checkUserName").removeClass('has-success').removeClass("has-error").addClass('has-error');
        $("#registError").text('用户名应是1-20个字符！');
        usernameIsRight = false;
        return;
    } else {
        usernameIsRight = true;
    }

    if(password.length <=0 || password.length > 30){
        $("#registPassword").focus();
        $("#checkPassword").removeClass('has-success').removeClass('has-error').addClass('has-error');
        $("#registError").text('密码应是1-30个字符！');
        passwordIsRight = false;
        return;
    } else {
        $("#checkPassword").removeClass('has-error').removeClass('has-success').addClass('has-success');
        $("#registError").text('');
        passwordIsRight = true;
    }

    if(passwordIsRight){
        if(repeatPassword != password){
            $("#registOk").focus();
            $("#checkRepeatPassword").removeClass('has-success').removeClass('has-error').addClass('has-error');
            $("#registError").text('密码不一致！');
            repeatPasswordIsRight = false;
            return;
        } else {
            $("#checkRepeatPassword").removeClass('has-error').removeClass('has-success').addClass('has-success');
            $("#registError").text('');
            repeatPasswordIsRight = true;
        }
    }

    if(usernameIsRight && passwordIsRight && repeatPasswordIsRight){

        $.post("/checkUser",{
            username:username
        },function(data,status){
            if(status){
                if(data.state){
                    $("#checkUserName").removeClass('has-error').removeClass("has-success").addClass('has-success');
                    $("#registError").text('');

                    $.post('/regist',{
                        username:username,
                        password:password,
                        repeatpassword:repeatPassword
                    },function(data,status){
                        if(status){
                            if(data.state){

                                $("#registError").removeClass('text-danger').removeClass('text-info').addClass('text-info');
                                $("#registError").text(data.msg+"  "+5+"秒后自动关闭!");
                                var timeout = function(){
                                    $('#registModal').modal('hide');
                                }
                                window.setTimeout(timeout,5000);
                            } else {
                                $("#registError").removeClass('text-info').removeClass('text-danger').addClass('text-danger');
                                $("#registError").text(data.msg);
                            }
                        } else {
                            $("#registError").removeClass('text-info').removeClass('text-danger').addClass('text-danger');
                            $("#registError").text('网络异常!');
                        }
                    });

                } else {
                    $("#checkUserName").removeClass('has-success').removeClass("has-error").addClass('has-error');
                    $("#registError").text('用户名已存在！');
                    usernameIsRight = false;
                    return;
                }
            } else {
                $("#registError").text('网络异常！');
                usernameIsRight = false;
                return;
            }
        });
    }
}