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
});