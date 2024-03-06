$(document).ready(function() {

    if (window.location.hash.startsWith("#ref-")) {
        $(window.location.hash).addClass("sel");
    }

    $("a.in-text-ref").each(function() {
        let new_hash = '#ref-' + $(this).html();
        $(this).attr("href", new_hash);
    });

    $(document).click(function(e) {
        $("li.sel").removeClass('sel');
        if ($(e.target).hasClass("in-text-ref")) {
            $($(e.target).attr("href")).addClass('sel');
        }
    });

    $(document).on("click", "a#evaluation-toggle-old-to-new", function(e) {
        e.preventDefault();
        $("div#evaluation-block-old").css("display", "none");
        $("div#evaluation-block-new").css("display", "block");
    })
    $(document).on("click", "a#evaluation-toggle-new-to-old", function(e) {
        e.preventDefault();
        $("div#evaluation-block-new").css("display", "none");
        $("div#evaluation-block-old").css("display", "block");
    })

    $(document).on("click", "a.participate-expandable-trigger", function(e) {
        e.preventDefault();
        let trigger_id = $(this).attr("id");
        let hidden_id = trigger_id.replace("expand", "hidden");
        let cur_dispay = $("div#" + hidden_id).css("display");
        if (cur_dispay == "block") {
            $("div#" + hidden_id).css("display", "none");
            $("a#" + trigger_id + " span.expandable-icon").html("+");
            return;
        }
        $("div#" + hidden_id).css("display", "block");
        $("a#" + trigger_id + " span.expandable-icon").html("-");
    });

});