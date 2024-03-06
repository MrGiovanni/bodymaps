$(document).ready(function() {

    var user_dropdown_visible = false;
    var hamburger_open = false;
    var mobile = false;

    $("div#user-dropdown").css("display", "none");

    function reposition_user_dropdown(mobile=false) {
        let udd = $("div#user-dropdown");
        if (mobile) {
            udd.css("left", "0px");
            udd.css("width", "100%");
            return;
        }
        udd.css("width", "300px");
        let sibtn = $("a#sign-in-button");
        if (!udd.length) return;
        const proposed_left = sibtn.offset().left - udd.width()/2 + sibtn.width()/2;
        const max_width = Math.max(document.documentElement.clientWidth, 900);
        if (proposed_left + udd.width() > max_width) {
            udd.css("left", max_width - udd.width() + "px");
        }
        else {
            udd.css("left", proposed_left + "px");
        }
    }
    window.onresize = function() {
        let mbl = in_mobile();
        if (mbl != mobile) {
            mobile = mbl;
            dks_mbl_transition();
        }
        reposition_user_dropdown(mbl);
    };

    function in_mobile() {
        return $("#indicator").width() == 0;
    }

    function toggle_user_dropdown(close_hamburger=true) {
        let mbl = in_mobile();
        if (mbl) {
            if (close_hamburger) {
                toggle_hamburger("close", false);
            }
            if (user_dropdown_visible) {
                user_dropdown_visible = false;
                $("div#user-dropdown").css("display", "none");
            }
            else {
                user_dropdown_visible = true;
                reposition_user_dropdown(mbl);
                $("div#user-dropdown").css("display", "block");
                $("input#username-input").focus();
            }
        }
        else {
            if (user_dropdown_visible) {
                user_dropdown_visible = false;
                $("div#user-dropdown").css("display", "none");
            }
            else {
                user_dropdown_visible = true;
                reposition_user_dropdown(mbl);
                $("div#user-dropdown").css("display", "block");
                $("input#username-input").focus();
            }
        }
        if (user_dropdown_visible && in_mobile()) {
            $("div#content-container").css("top", $("div#user-dropdown").height()+"px");            
        }
        else {
            $("div#content-container").css("top", "0px");
        }
    }

    function toggle_hamburger(force=null, handle_user_dropdown=true) {
        if (force == "open") {
            hamburger_open = false;
        }
        else if (force == "close") {
            hamburger_open = true;
        }
        if (handle_user_dropdown && user_dropdown_visible) {
            toggle_user_dropdown(false);
        }
        if (!hamburger_open) {
            $("div#header-content a.header-button").css("display", "block");
            $("div#header-content span.header-button").css("display", "block");
            hamburger_open = true;
        }
        else {
            $("div#header-content a.header-button").css("display", "none");
            $("div#header-content span.header-button").css("display", "none");
            hamburger_open = false;
        }

        // Reposition content container
        if (hamburger_open) {
            $("div#content-container").css("top", $("div#header-content").height()-$("a#header-logo-button").height()+"px");
        }
        else if (user_dropdown_visible && in_mobile()) {
            $("div#content-container").css("top", $("div#user-dropdown").height()+"px");
        }
        else {
            $("div#content-container").css("top", "0px");
        }
    }

    function dks_mbl_transition() {
        hamburger_open = false;
        if (mobile) {
            $("div#header-content a.header-button").css("display", "none");
            $("div#header-content span.header-button").css("display", "none");
            if (user_dropdown_visible) {
                $("div#content-container").css("top", $("div#user-dropdown").height()+"px");
            }
            else {
                $("div#content-container").css("top", "0px");
            }
        }
        else {
            $("div#header-content a.header-button").css("display", "inline-block");
            $("div#header-content span.header-button").css("display", "inline-block");
            $("div#content-container").css("top", "0px");
        }
    }

    function handle_login_submit(callback) {
        $("#login-error-msg").css("display", "none");
        let submitted_name = $("#username-input").val();
        let submitted_pass = $("#password-input").val();

        // Client side error checking
        if (submitted_name == "") {
            $("#login-error-msg").html(`Please enter a username.`);
            $("#login-error-msg").css("display", "block");
            callback();
            return;
        }
        if (submitted_pass == "") {
            $("#login-error-msg").html(`Please enter a password.`);
            $("#login-error-msg").css("display", "block");
            callback();
            return;
        }
        
        // POST credentials to server for validation
        let payload = {
            username: submitted_name,
            password: submitted_pass
        };
        $.post("/auth/login", payload, function(resp) {
            if (resp.success) {
                // Refresh the page
                window.location.reload();
            }
            else {
                // Show error message
                if (typeof resp.info.message !== 'undefined') {
                    $("#login-error-msg").html(resp.info.message);
                }
                else {
                    $("#login-error-msg").html(`Your request could not be processed.`);
                }
                $("#login-error-msg").css("display", "block");
            }
        }).fail(function() {
            $("#login-error-msg").html(`Your request could not be processed.`);
            $("#login-error-msg").css("display", "block");
        }).always(function() {
            callback();
        });
    }

    function handle_logout_button() {
        $.post("/auth/logout", {}, function(resp) {
            if (resp.success) {
                window.location.reload();
            }
            else {
                alert(JSON.stringify(resp.info, null, 2));
            }
        }).fail(function() {
            console.log("Error logging out.");
        });
    }

    $("a#sign-in-button").click(function(e) {
        toggle_user_dropdown();
    });
    $("a#close-user-dropdown-button").click(function(e) {
        toggle_user_dropdown();
    });

    $('a#login-submit-button').click(function(e) {
        if ($(this).attr("href") != "#") {
            return;
        }
        $("a#login-submit-button").removeAttr("href");
        handle_login_submit(function() {$("a#login-submit-button").attr("href", "#");});
    });
    $("a#logout-button").click(function(e) {
        handle_logout_button();
    })
    $('input[type="password"]').keypress(function(e) {
        if (e.key == "Enter") {
            $("a#login-submit-button").click();
        }
    });
    $("a#hamburger").on("click", function(e) {
        toggle_hamburger();
    });
});