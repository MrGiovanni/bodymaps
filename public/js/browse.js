const RTYPES = ["kidney", "ureter", "artery", "vein", "cyst", "tumor"];

$(document).ready(function() {

    var state = {
        lightbox_open: false,
        delete_candidate: null,
        edit_candidate: null,
        task_list: null
    };

    // ================ UTILITIES ===============

    let get_page = () => {
        return "cases_" + page_str.padStart(5, "0");
    };


    // ========== CONFIRMATION WINDOWS ==========

    let show_edit_lightbox = (cid, rkey, rnum) => {
        // Add content to this lightbox
        $("span#ed-lb-curr").html(rkey);
        let sel_opts = "";
        for (let i = 0; i < RTYPES.length; i++) {
            if (RTYPES[i] != rkey) {
                sel_opts += `
                    <option value="${RTYPES[i]}">${RTYPES[i]}</option>
                `;
            }
        }
        $("select#ed-lb-new-select").html(sel_opts);

        // Display it
        show_lightbox("edit");

        state.lightbox_open = true;
        state.edit_candidate = {
            cid, rkey, rnum, page: get_page()
        };
    };

    let show_delete_lightbox = (cid, rkey, rnum) => {
        // Add content to this lightbox
        $("span#delete-cid").html(cid);
        $("span#delete-rkey").html(rkey);
        $("span#delete-rnum").html(rnum);

        // Display it
        show_lightbox("delete");

        state.lightbox_open = true;
        state.delete_candidate = {
            cid, rkey, rnum, page: get_page()
        };
    };

    let show_create_lightbox = (task_list) => {
        // Add content to this lightbox 
        $("span#num-regions").html(task_list.length);
        
        // Display it
        show_lightbox("create");

        state.lightbox_open = true;
        state.task_list = JSON.parse(JSON.stringify(task_list));
    };

    let show_lightbox = (lbtype) => {
        $(`div#${lbtype}-lightbox`).css("display", "block");
        state.lightbox_open = true;
    };

    let close_lightbox = () => {
        $("div.lightbox-outer").css("display", "none");
        state = {
            lightbox_open: false,
            delete_candidate: null,
            edit_candidate: null,
            task_list: null
        };
    };

    // ============ REQUEST LISTENERS ============

    $(document).on("click", "a#edit-confirm-button", function(e) {
        // Get new id to set it to
        const new_rkey = $("select#ed-lb-new-select").val();

        // Show user that request is being processed
        $("p#edit-error-msg").css("display", "none");
        $(this).addClass("loading");
        $(this).html(`<div class="loader-container"><div class="lds-dual-ring"></div></div>`);

        // Send request
        let payload = {dat: JSON.stringify({
            request_type: "edit",
            edit_candidate: state.edit_candidate,
            new_rkey: new_rkey
        })};
        $.post(`/${KITSNAME}/datrequest`, payload, (res) => {
            res = JSON.parse(res);
            if (res.err) {
                // Show user error message
                console.log(res.err);
                $("p#edit-error-msg").html(res.err_msg);
                $("p#edit-error-msg").css("display", "block");
            }
            else {
                // On success, refresh page
                window.location.href = window.location.pathname + "#card-" + state.edit_candidate.cid;
                window.location.reload();
            }
        }).fail(() => {
            // Show user error message
            $("p#edit-error-msg").html("Unspecified error while processing request.");
            $("p#edit-error-msg").css("display", "block");
        }).always(() => {
            $(this).removeClass("loading");
            $(this).html(`Confirm`);
        });
    });

    $(document).on("click", "a#delete-confirm-button", function(e) {
        // Show user that request is being processed
        $("p#delete-error-msg").css("display", "none");
        $(this).addClass("loading");
        $(this).html(`<div class="loader-container"><div class="lds-dual-ring"></div></div>`);

        // Send request
        let payload = {dat: JSON.stringify({
            request_type: "delete",
            delete_candidate: state.delete_candidate
        })};
        $.post(`/${KITSNAME}/datrequest`, payload, (res) => {
            res = JSON.parse(res);
            if (res.err) {
                // Show user error message
                console.log(res.err);
                $("p#delete-error-msg").html(res.err_msg);
                $("p#delete-error-msg").css("display", "block");
            }
            else {
                // On success, refresh page
                window.location.href = window.location.pathname + "#card-" + state.delete_candidate.cid;
                window.location.reload();
            }
        }).fail(() => {
            // Show user error message
            $("p#delete-error-msg").html("Unspecified error while processing request.");
            $("p#delete-error-msg").css("display", "block");
        }).always(() => {
            $(this).removeClass("loading");
            $(this).html(`Confirm`);
        });
    });

    $(document).on("click", "a#create-confirm-button", function(e) {
        // Show user that request is being processed
        $("p#create-error-msg").css("display", "none");
        $(this).addClass("loading");
        $(this).html(`<div class="loader-container"><div class="lds-dual-ring"></div></div>`);

        // Send request
        // TODO will need more info here
        let payload = {dat: JSON.stringify({
            request_type: "create",
            task_list: state.task_list,
            page: get_page(),
            debug_job: document.getElementById("debug-job").checked
        })};
        $.post(`/${KITSNAME}/datrequest`, payload, (res) => {
            res = JSON.parse(res);
            if (res.err) {
                // Show user error message
                console.log(res.err);
                $("p#create-error-msg").html(res.err_msg);
                $("p#create-error-msg").css("display", "block");
            }
            else {
                // On success, close lightbox and unselect all boxes
                close_lightbox();
                $("input[type=checkbox]:checked").prop("checked", false);
            }
        }).fail(() => {
            // Show user error message
            $("p#create-error-msg").html("Unspecified error while processing request.");
            $("p#create-error-msg").css("display", "block");
        }).always(() => {
            $(this).removeClass("loading");
            $(this).html(`Confirm`);
        });
    });

    $(document).on("click", "a.cancel-button", function(e) {
        close_lightbox();
    });

    // ========== INTERACTION LISTENERS ==========

    $(document).on("click", "a.admin-button.edit-button", function(e) {
        if (state.lightbox_open) {
            return;
        }
        show_edit_lightbox(
            $(this).attr("cid"),
            $(this).attr("rkey"),
            parseInt($(this).attr("rnum"))
        );
    });

    $(document).on("click", "a.admin-button.delete-button", function(e) {
        if (state.lightbox_open) {
            return;
        }
        show_delete_lightbox(
            $(this).attr("cid"),
            $(this).attr("rkey"),
            parseInt($(this).attr("rnum"))
        );
    });

    $(document).on("keydown", function(e) {
        if (state.lightbox_open || e.key.toLowerCase() != "c") {
            if (e.key.toLowerCase() == "escape") {
                close_lightbox();
            }
            return;
        }
        // Get list of delineation tasks
        let task_list = [];
        $("input[type=checkbox]:checked").each(function(i, el) {
            task_list.push({
                cid: $(el).attr("cid"),
                rkey: $(el).attr("rkey"),
                rnum: parseInt($(el).attr("rnum")),
                delind: parseInt($(el).attr("delind"))
            });
        });

        // If no cases have been selected, do nothing
        if (task_list.length == 0) {
            return;
        }

        // Show confirmation page for job creation
        show_create_lightbox(task_list);
    });

    $(document).on("click", `a[href="#"]`, function(e) {
        e.preventDefault();
    });
});