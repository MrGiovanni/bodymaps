$(document).ready(function() {

    // Get center position of 2020 for reference
    let top2020_str = $("div#year-2020").css("top");
    let top2020 = parseInt(top2020_str.substr(0, top2020_str.length-2));

    // Get center position of 2021 for reference
    let top2021_str = $("div#year-2021").css("top");
    let top2021 = parseInt(top2021_str.substr(0, top2021_str.length-2));

    // Get center position of 2022 for reference
    let top2022_str = $("div#year-2022").css("top");
    let top2022 = parseInt(top2022_str.substr(0, top2022_str.length-2));

    // Some reference times
    let date2020 = new Date('Jan 1, 2020 00:00:00');
    let date2021 = new Date('Jan 1, 2021 00:00:00');
    let date2022 = new Date('Jan 1, 2022 00:00:00');
    let time20 = date2020.getTime();
    let time21 = date2021.getTime();
    let duration21 = date2022.getTime() - time21;

    // Position the months
    // No Jan because that's implied by the start of the year
    let months = [
        "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    for (let i = 0; i < months.length; i++) {
        let month_id = months[i].substr(0, 3).toLowerCase();
        let month_start_time = new Date(months[i] + " 1, 2021 00:00:00").getTime();
        let prop = (month_start_time - time21)/duration21;
        $("div#month-" + month_id).css("top", top2021 + prop*(top2022 - top2021) + "px");
    }

    // Position the rest of the events
    let timeline_events = [
        {
            "id": "proposed-event",
            "type": "point",
            "date": new Date('December 6, 2019 23:59:59')
        },
        {
            "id": "annotation-event",
            "type": "range",
            "start": new Date('March 1, 2021 23:59:59'),
            "end": new Date('July 1, 2021 23:59:59'),
        },
        {
            "id": "intention-event",
            "type": "range",
            "start": new Date('August 2, 2021 23:59:59'),
            "end": new Date('August 23, 2021 23:59:59')
        },
        {
            "id": "submission-event",
            "type": "range",
            "start": new Date('August 30, 2021 23:59:59'),
            "end": new Date('September 17, 2021 23:59:59')
        },
        {
            "id": "miccai-event",
            "type": "point",
            "date": new Date('September 27, 2021 23:59:59')
        }
    ];
    for (let i = 0; i < timeline_events.length; i++) {
        let prop = 0;
        let evt_time = time21;
        // Set size of assembly and get necessary times
        if (timeline_events[i]["type"] == "point") {
            evt_time = timeline_events[i]["date"].getTime();
        }
        else if (timeline_events[i]["type"] == "range") {
            let start_time = timeline_events[i]["start"].getTime();
            let end_time = timeline_events[i]["end"].getTime();
            evt_time = (start_time + end_time)/2;
            // Set height
            prop = (end_time - start_time + 24*60*60*1000)/duration21;
            $("#" + timeline_events[i]["id"] + " span.range-event-leader-1").css("height", prop*(top2022 - top2021) + "px");
        }
        // Position whole assembly
        if (evt_time < time20) {
            prop = (time20 - evt_time)/duration21;
            $("#" + timeline_events[i]["id"]).css("top", top2020 - prop*(top2022 - top2021) + "px");
        }
        // The year 2020 is cut from the timeline
        else if (evt_time > time21) {
            prop = (evt_time - time21)/duration21;
            $("#" + timeline_events[i]["id"]).css("top", top2021 + prop*(top2022 - top2021) + "px");
        }
    }

    // Position the current time
    let curtime = new Date().getTime();
    prop = (curtime - time21)/duration21;
    // $("#current-date").css("top", top2021 + prop*(top2022 - top2021) + "px");
});